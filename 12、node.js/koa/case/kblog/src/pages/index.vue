<template>
  <div class="index">
    <f-header :class="{'navBarWrap':navBarFixed}"></f-header>
    <el-row type="flex" justify="center" id="content">
      <el-col :xs="24" :sm="22" :md="20" :style="{'minHeight':minHeight+'px'}">
        <router-view></router-view>
      </el-col>
    </el-row>
    <f-footer></f-footer>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      minHeight: 0,
      navBarFixed: false,
    };
  },
  components: {},
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 50) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
  },
  mounted() {
    let that = this;
    that.minHeight = document.documentElement.clientHeight;
    window.addEventListener("scroll", that.watchScroll);
    window.onresize = function () {
      that.minHeight = document.documentElement.clientHeight;
    };
  },
};
</script>

<style scoped>
.index {
  font-family: "microsoft yahei";
}
#content {
  background-color: #f9f9f9;
  padding: 30px 0;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
</style>
