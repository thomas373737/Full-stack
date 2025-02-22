var ApiError = require('../error/ApiError');
import logger from '../utils/log_util'
import tokenJudge from '../utils/token';
/**
 * 在app.use(router)之前调用
 */
var response_formatter = async (ctx, next) => { // 如果有返回数据，将返回数据添加到data中
    try {
        const tokenResult = await tokenJudge(ctx);
        if (! tokenResult) {
            return;
        }
        await next()
    } catch (error) {
        throw error
    }
}
var url_filter = (pattern) => {
    return async (ctx, next) => {
        var reg = new RegExp(pattern);
        try {
            // 先去执行路由
            // 通过正则的url进行格式化处理
            if (reg.test(ctx.originalUrl)) {
                await next()
            } else {
                await response_formatter(ctx, next);
            }
        } catch (error) { // 如果异常类型是API异常并且通过正则验证的url，将错误信息添加到响应体中返回。
            if (error instanceof ApiError && reg.test(ctx.originalUrl)) {
                ctx.status = 200;
                ctx.body = {
                    code: error.code,
                    message: error.message
                }
            }
            // 继续抛，让外层中间件处理日志
            throw error;
        }

    }
}
module.exports = url_filter;
