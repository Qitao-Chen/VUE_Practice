#学习到的新知识：
1. ```javascript
    :class="{
                    'active':addClassFlag
                }"
    //绑定class。动态添加active class 给元素。 在data中设置addClassFlag，初始值为false
     const vm = new Vue({
            el: '#app',
            data: {
                addClassFlag: false,
            }
     })
2. ```javascript
     return personArr.filter(item => {
                       console.log(item.name.includes(filterText))
                       if(item.name.includes(filterText)){
                           return true
                       }else if(item.des.includes(filterText)){
                           return true
                       }
                    })
    //filter 方法实现原理callback。 includes返回true或false。二者结合实现筛选功能
3. ```javascript
   // this.isActiveClass[index] = true;
      this.isActiveClass.splice(index,1,true)
      //这里都是在改变isActiveClass数组里面的数据，从而动态显示相应的元素。但是，直接赋值在vue里面不好使。
      //splice会改变原数组，导致vue重新渲染