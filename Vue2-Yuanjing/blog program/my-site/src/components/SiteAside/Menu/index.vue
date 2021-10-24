<template>
  <nav class="menu-container">
<Router-link  v-for="(item,index) in items" 
    :exact="item.exact"
    :key="index" 
    :to="{name:item.name}" 
    exact-active-class=""
    >
    <div class="icon">
        <Icon :type="item.icon"/>
    </div>
    <span style="white-space:nowrap">{{item.title}}</span>
</Router-link>
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
            name:"Home",
            title:"Home",
            icon:"home",
            exact:true
        },{
            name:"Blog",
            title:"Article",
            icon:"blog",
            exact:false//只要当前路径以link开头，当前菜单就是选中的。
        },{ 
            name:"About",
            title:"About Me",
            icon:"about",
            exact:true

        },{
            name:"Project",
            title:"Project and Effect",
            icon:"code",
            exact:true

        },{
            name:"Message",
            title:"Message",
            icon:"chat",
            exact:true
        }
        ]
    }
    },
    //下面的方法为老师没讲router-link-active api之前的解决方法
    //:class="{selected:isSelected(item)}"
    // methods:{
    //     isSelected(item){
    //         var link = item.link.toLowerCase();//菜单的链接地址
    //         console.log(link)
    //         var curPathname = location.pathname.toLowerCase();//当前浏览器的访问路径
    //        if(item.start){
                    //前提在不需要精确匹配的对象里 加上start属性，属性值为true
    //            console.log(link)
    //            return curPathname.startsWith(link);//利用startsWith函数
    //        }else{
    //            return link === curPathname
    //        }
    //     }
    // }
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
                margin-right: 15px;
                font-size: 16px;
                
            }
            &:hover{
            color: #fff;
        }
        }    
    }
</style>