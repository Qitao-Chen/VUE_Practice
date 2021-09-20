import loadingImgUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
//Custom Directives
//https://vuejs.org/v2/guide/custom-directive.html
/**
 * 
 * @param {dom} el is the dom element which we used in
 * @param {obj} binding v-xxx="here is binding.value"
 * need reg in main js => Vue.directive("loading", vLoading);
 */
//checking whether there is an img element with loading effect in el
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]")
}

function createImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingImgUrl;
    img.className = styles.loading;
    return img;
}
export default function (el, binding) {
    //creating img element according to binding.value.
    /**
     * binding.value => "isLoading".check it in Home components index.vue, it has a boolean value, and associate with async create.=>
     * see it in directives=>isLoading
     */
    const curImg = getLoadingImg(el);
    if (binding.value) {
        if (!curImg) {
            const img = createImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}

// export default {
//     bind: function (el, binding) {
//         console.log("bind", el, binding)
//     },
//     update: function (el, binding) {
//         console.log("update", el, binding)
//     }
// }