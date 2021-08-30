import getComponentRootDom from './getComponentRootDom.js'
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'
/**
 * 
 * @param {String} content 消息内容 
 * @param {String} type 消息类型 info error success warn ...
 * @param {Number} duration 消息多久后自动消失，默认2000
 * @param {HTMLElement} container 消息会显示到该容器正中央， 默认传到页面正中
 */
export default function (options = {}) {
    //content, type = "info", duration = 2000, container
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    //创建消息元素
    const div = document.createElement("div");
    //设置样式
    // console.log(styles)
    div.className = `${styles.message} ${styles[`message-${type}`]}`;
    //视频第32分讲解
    const el = getComponentRootDom(Icon, {
        type
    });
    div.innerHTML = `<span class="${styles.icon}">${el.outerHTML}</span><div>${content}</div>`;
    // console.log(el.outerHTML)
    // console.log(typeof el.outerHTML)
    //将div加到容器中
   
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative"
        }
    
    container.appendChild(div);
    //浏览器强行渲染
    div.clientHeight;
    //回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;

    //等一段时间提示框消息消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
        //当弹框消失后，移除该dom元素
        div.addEventListener("transitionend", function () {
            div.remove();
            //運行回調函數
            if(options.callback){
                options.callback();
            }
        }, {
            once: true
        })
    }, duration);
}