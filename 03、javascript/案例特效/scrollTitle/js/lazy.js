function lazyload() {
    let viewHeight = document.body.clientHeight //获取可视区高度
    let imgs = document.querySelectorAll('img[data-src]')
    imgs.forEach((item, index) => {
        if (item.dataset.src === '') return

        // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
        let rect = item.getBoundingClientRect()
        if (rect.bottom >= 0 && rect.top < viewHeight) {
            item.src = item.dataset.src
            item.removeAttribute('data-src')
        }
    })
}

function throttle(fn, delay) {
    let timer
    let prevTime
    return function (...args) {
        const currTime = Date.now()
        const context = this
        if (!prevTime) prevTime = currTime
        clearTimeout(timer)

        if (currTime - prevTime > delay) {
            prevTime = currTime
            fn.apply(context, args)
            clearTimeout(timer)
            return
        }

        timer = setTimeout(function () {
            prevTime = Date.now()
            timer = null
            fn.apply(context, args)
        }, delay)
    }
}

window.addEventListener('scroll', throttle(lazyload, 200))