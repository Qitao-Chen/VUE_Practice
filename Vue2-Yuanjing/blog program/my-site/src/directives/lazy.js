import eventBus from "@/eventBus";
import defaultGif from "@/assets/default.gif"
import {
    debounce
} from "@/utils";

let imgs = [];
//设置单张图片
function setImage(img) {
    // imgs = imgs.filter((i) => {
    //     return i !== img
    // })
    //默认初始图片 defaultGif
    img.dom.src = defaultGif;
    //获取dom元素的尺寸数据，然后判断是否在视口内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        //在视口范围内
        const tempImg = new Image();
        tempImg.onload = function () {
            img.dom.src = img.src
        }
        tempImg.src = img.src;
        console.log(imgs)
        imgs = imgs.filter((i) => i !== img)
    }

}
//设置合适的图片
function setImages() {

    for (const img of imgs) {
        setImage(img)
    }
}

function handleScroll(dom) {
    setImages()
}
eventBus.$on('mainScroll', debounce(handleScroll, 50))
export default {
    inserted: function (el, binding, vnode) {
        const img = {
            dom: el,
            src: binding.value,
        }
        imgs.push(img);
        //立即处理一下
        setImage(img)
    },
    update: function (el, binding) {

    },
    unbind(el) {
        //unbind 是在元素消失的时间点执行。unbind里面的el是消失的el
        imgs = imgs.filter((img) => img.dom !== el)
    }
}