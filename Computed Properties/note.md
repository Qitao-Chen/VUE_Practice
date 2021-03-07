#Computed Properties
[Computed Caching vs Methods](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods)
```
计算属性是基于响应式依赖进行缓存的，只有改变数据才会重新的让计算属性执行一次。computed properties are cached based on their reactive dependencies.
方法是只要渲染页面就会执行

So， 使用计算属性更节省性能

```javascript
computedA: function(){

}
```
```javascript
computedA: {

}
```
只有当依赖的响应式属性变化了，计算属性才会重新计算。 因为他是从缓存里面拿取数据的。