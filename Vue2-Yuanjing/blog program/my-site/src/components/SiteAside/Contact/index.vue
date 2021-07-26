<template>
  <!-- <div class="contact-container"
  :style="{
      backgroundColor:`${backgroundColor}`,
      height:`${height}px`,
      width:`${width}px`
  }">
  </div> -->
    <ul class="contact-container">
           <li>
            <a href="https://github.com/Qitao-Chen">
                <div class="icon">
                    <Icon iconType="github"/>
                </div>
                <span>Qitao-Chen</span>
            </a>
        </li>
        <li>
            <a href="tencent://message/?Menu=yes&uin=596298440&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div class="icon">
                    <Icon iconType="qq"/>
                </div>
                <span>596298440</span>
            </a>
            <div class="pop">
                <img src="https://i.ibb.co/9H65N34/5f5a72d6ff04c2ef02a0534ec078644.jpg" alt="">
            </div>
        </li>
             <li>
            <a href="">
                <div class="icon">
                    <Icon iconType="weixin"/>
                </div>
                <span>ziyangchen</span>
            </a>
            <div class="pop">
                <img src="https://i.ibb.co/9H65N34/5f5a72d6ff04c2ef02a0534ec078644.jpg" alt="">
            </div>
        </li>
           <li>
            <a href="mailto:eric.chen.adl@outlook.com">
                <div class="icon">
                    <Icon iconType="mail"/>
                </div>
                <span>eric.chen.adl@outlook.com</span>
            </a>
        </li>
    </ul>
  
</template>

<script>
import Icon from "@/components/Icon"
export default {
    props:{
        // width:{
        //     type: Number,
        //     required:false
        // },
        //   height:{
        //     type: Number,
        //     required:false
        // },
        // backgroundColor:{
        //     type: String,
        //     required:false
        // }
    },
    components:{
        Icon
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container{
    // position: absolute;
    top: 500px;
    list-style: none;
    padding: 20px;
    margin: 0;   
    color:@grey;
    li{
        height: 30px;
        line-height: 30px;
        margin: 14px 0;
        cursor: pointer;
        position: relative;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
        a{
            display: flex;
            align-items: center;
            font-size: 14px;
         .icon{             
               width: 36px;
               .iconfont{
                    font-size: 26px;
                      &.iconweixin{
                   display: block;
                   font-size: 32px;
                   text-indent: -3px;
                   
               }  
               }   
        }
        }
        .pop{
            position: absolute;
            bottom: 30px;
            left: 0;
            padding: 15px 15px 5px 15px;
            background-color: white;
            border-radius: 10px;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: 0.3s;
            img{
            width: 150px;
            height: 150px;
            }
            &::after{
                content:"";
                position: absolute;
                left: 50%;
                transform: translateX(-50%) rotate(45deg);
                width: 8px;
                height: 8px;
                background: white;
                bottom: -4px;
            }    
        }       
    }
}
</style>