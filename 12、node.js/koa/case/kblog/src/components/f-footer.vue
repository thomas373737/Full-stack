<template>
  <div class="f-footer">
    <el-main class="main">
      <el-row type="flex" class="foot_main" justify="center">
        <!--<el-col :span="8" class="item-col">
				<div class="title">常用工具</div>
				<div class="item"><a href="#" class="out-link">aaa</a></div>
				<div class="item"><a href="#" class="out-link">aa</a></div>
        </el-col>-->
        <el-col :xs="24" :sm="22" :md="8" class="item-col">
          <div class="title item">{{$t('footer.expressLane')}}</div>
          <div class="item">
            <a href="https://gitee.com/kirk958617/kblog" class="out-link">{{$t('footer.gitee')}}</a>
          </div>
          <div class="item">
            <a
              href="https://blog.csdn.net/qq_44146665?spm=1000.2115.3001.5343"
              class="out-link"
            >CSDN</a>
          </div>
          <div class="item">
            <a href="#" class="out-link">{{$t('footer.admin')}}</a>
          </div>
        </el-col>
        <el-col :xs="24" :sm="22" :md="8" class="item-col weside">
          <div class="item">
            <i class="el-icon-caret-right"></i>
            本站已稳定运行123天4时36分22秒
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            码云：https://gitee.com/kirk958617/kblog
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            邮箱：jgbzql@163.com
          </div>
          <!-- <div class="item">
            <i class="el-icon-caret-right"></i>
            © fengziy.cn |
            <a
              class="out-link"
              href="http://www.beian.miit.gov.cn"
            >渝ICP备17015355号-1</a>
          </div>-->
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
export default {
  name: "k-footer",
};
</script>
<style scoped>
.f-footer {
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #555;
}
.main {
  width: 100%;
  margin: 0 auto;
  color: #ccc;
}
.out-link {
  text-decoration: none;
  color: #ccc;
}
.out-link:hover {
  color: #ffffff;
}
.item-col {
  text-align: left;
}
.item-col.weside {
  font-size: 14px;
}
.item-col .title {
  color: #ddd;
  margin-bottom: 10px;
}
.item span {
  margin-right: 5px;
}

@media screen and (max-width: 768px) {
  .foot_main {
    display: flex;
    flex-direction: column !important;
  }
  .item-col {
    display: flex;
    flex-direction: row !important;
    justify-content: flex-start;
  }
  .item-col .item {
    margin-right: 10px;
    font-size: 14px;
  }
  .weside {
    display: flex;
    flex-direction: column !important;
  }
  .weside .item {
    margin: 3px 0;
    font-size: 14px;
  }
}
</style>