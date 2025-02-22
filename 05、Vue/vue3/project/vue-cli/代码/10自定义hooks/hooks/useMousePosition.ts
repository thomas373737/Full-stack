import { onBeforeUnmount, onMounted, ref } from "vue";

export default function () {
    const x = ref(-1)
    const y = ref(-1)
    // 点击时间的回调函数
    const clickHandle = (event: MouseEvent) => {
        x.value = event.pageX
        y.value = event.pageY
    }
    // 页面加载完毕，在进行点击操作
    // 页面加载完毕的生命周期组合API
    onMounted(() => {
        window.addEventListener('click', clickHandle)
    })
    // 页面卸载之前的生命周期组合API
    onBeforeUnmount(() => {
        window.removeEventListener('click', clickHandle)
    })
    // 暴漏出去2对象
    return {
        x, y
    }
}