<template>
  <nav class="menu-container">
<a  v-for="(item,index) in items" 
    :key="index" 
    :href="item.link" 
    :class="{selected:isSelected(item)}">
    <div class="icon">
        <Icon :iconType="item.icon"/>
    </div>
    <span>{{item.title}}</span>
</a>
  </nav>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components:{
        Icon,
    },
    data(){
      return {
           items:[{
            link:"/",
            title:"Home",
            icon:"home"
        },{
            link:"/blog",
            title:"Article",
            icon:"blog",
            start:true//只要当前路径以link开头，当前菜单就是选中的。
        },{
            link:"/about",
            title:"About Me",
            icon:"about"
        },{
            link:"/project",
            title:"Project&Effect",
            icon:"code"
        },{
            link:"/message",
            title:"Message",
            icon:"chat"
        }
        ]
    }
    },
    methods:{
        isSelected(item){
            var link = item.link.toLowerCase();//菜单的链接地址
            var curPathname = location.pathname.toLowerCase();//当前浏览器的访问路径
           if(item.start){
               console.log(link)
               return curPathname.startsWith(link);//利用startsWith函数
           }else{
               return link === curPathname
           }
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/global.less";
    .menu-container{
        color: @grey;
        margin: 24px 0;
        a{
          &.selected{
            background: darken(@words,3%);
        }
            padding: 0 50px;
            display: flex;
            align-items: center;
            height: 45px;
           
            .icon{
                width: 24px;
                font-size: 16px;
                
            }
            &:hover{
            color: #fff;
        }
        }    
    }
</style>