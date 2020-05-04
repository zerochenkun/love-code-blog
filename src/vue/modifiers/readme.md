# .stop .prevent .sync 修饰符

## 事件修饰符

vue 官方解释 ：在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

* .stop 可以阻止冒泡事件

<a v-on:click.stop="doThis"></a>

* .prevent 可以阻止默认事件

<a v-on:click.prevent="stopVisitBing" herf="www.bing.com"></a>

## .sync 修饰符

```vue
<div id="app">
    <div>{{bar}}</div>
    <my-comp :foo.sync="bar"></my-comp>
    <!-- <my-comp :foo="bar" @update:foo="val => bar = val"></my-comp> -->
</div>
<script>
    Vue.component('my-comp', {
        template: '<div @click="increment">点我+1</div>',
        data: function() {
            return {copyFoo: this.foo}
        },
        props: ['foo'],
        methods: {
            increment: function() {
                this.$emit('update:foo', ++this.copyFoo);
            }
        }
    });
    new Vue({
        el: '#app',
        data: {bar: 0}
    });
</script>
```

小结： 代码   `<my-comp  :foo.sync="bar"></my-comp> `会被扩展成  ` <comp :foo="bar"  @update:foo="val => bar = val"></comp>`，这两个语法相同，**.sync 修饰符 **只是一个双向绑定事件，订阅发布模式下的语法糖而已。



> 本文 sync 修饰符主要内容来自 [如何理解Vue的.sync修饰符](https://segmentfault.com/a/1190000010700521)



最后，谢谢大家的阅读，如有问题，请提出斧正。

