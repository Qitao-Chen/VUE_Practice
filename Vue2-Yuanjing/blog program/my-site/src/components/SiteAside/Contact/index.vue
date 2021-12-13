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
            <a target="_blank" :href="data.github">
                <div class="icon">
                    <Icon type="github"/>
                </div>
                <span>Qitao-Chen</span>
            </a>
        </li>
        <li>
            <a :href="data.qqMessage">
                <div class="icon">
                    <Icon type="qq"/>
                </div>
                <span>{{data.qq}}</span>
            </a>
            <div class="pop">
                <img :src="data.qqQrCode" alt="">
            </div>
        </li>
             <li>
            <a href="">
                <div class="icon">
                    <Icon type="weixin"/>
                </div>
                <span>{{data.weixin}}</span>
            </a>
            <div class="pop">
                <img :src="data.weixinQrCode" alt="">
            </div>
        </li>
           <li>
            <a :href="`mailto:${data.mail}`">
                <div class="icon">
                    <Icon type="mail"/>
                </div>
                <span>{{data.mail}}</span>
            </a>
        </li>
    </ul>
  
</template>

<script>
import Icon from "@/components/Icon";
import {mapState} from "vuex";
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
    },
    async created(){
        // await this.$store.dispatch("setting/fetchSetting");首页main.js触发
    },
    computed:{
        ...mapState("setting",["loading","data"])
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