# 《JS 对象基本用法》
内容1：声明对象的两种语法
内容2：如何删除对象的属性
内容3：如何查看对象的属性
内容4：如何修改或增加对象的属性
内容5：'name' in obj和obj.hasOwnProperty('name') 的区别
## 声明对象的两种语法
对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。

什么是对象？简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。

### 声明方法

对象有两种声明方法，可以直接声明，也可用创建对象来声明，第一种更常用，第二种是官方定义，更正规。

```
// 1.直接声明 
let obj = {
    dogName = lele,
    color = balck
}
// 2.创建对象声明
 let obj = new Object {
    dogName = huahua,
    color = white
}
```
## 删除对象的属性

直接 delete obj.xxx 或 delete obj["xxx"],这两个操作效果是一样的,属性会被删除；
另外还有人会 直接 obj.name = undefined,这只会删除属性名。
可以用 obj.name in obj 来查看属性是否存在

## 查看对象属性

查看自身属性
Object.keys(obj)
查看自身属性 + 共有属性
console.dir(obj)
判断一个属性是自身的还是共有的
obj.hasOwnProperty('toString')

>注： 每个对象都有原型，对象的原型也是对象

## 修改增加对象属性
直接赋值
let obj.name = {key:value}
obj.name = {key:value}
obj.['name'] = {key:value}
> 无法通过自身增加或修改共有属性
> 偏要修改共有属性？
> 那就用 Object.prototype.toString = 'xxx' 
> 一般来说，不要修改原型，会产生各种问题
