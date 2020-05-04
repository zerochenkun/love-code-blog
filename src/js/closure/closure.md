# 闭包
### 定义
当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄露。

### 闭包的作用
1.实现公有变量
eg：函数累加器

2.可以做缓存（存储结构）

3.可以实现封装，属性私有化

4.模块化开发，防止污染全局变量
下面是一个有趣的函数：

```
function test() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        arr[i] = function () {
            console.log(i);
        }
    }
return  arr
}

var myArr = test();
for (var j=0;j<10;j++){
    myArr[j]();
}
// 10 个 10
```

但是我们想要分别打印 i 从 0到 9，可以用立即执行函数解决，

```
function test() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        (function (j) {
            arr[j] = function () {
                console.log(j + " ")
            }
        }(i));
    }
    return arr;
}

var myArr = test();
for (var j = 0; j < 10; j++) {
    myArr[j]();
}
```
当然在 ES 6以后，我们也可以直接将 用 let 解决 

<hr>

> 下面是一个更有意思的示例 — makeAdder 函数：

>```
>function makeAdder(x) {
>  return function(y) {
>    return x + y;
>  };
>}
>
>var add5 = makeAdder(5);
>var add10 = makeAdder(10);
>
>console.log(add5(2));  // 7
>console.log(add10(2)); // 12
>```
>
>在这个示例中，我们定义了 makeAdder(x) 函数，它接受一个参数 x ，并返回一个新的函>数。返回的函数接受一个参数 y，并返回x+y的值。
>
>从本质上讲，makeAdder 是一个函数工厂 — 他创建了将指定的值和它的参数相加求和的函>数。在上面的示例中，我们使用函数工厂创建了两个新函数 — 一个将其参数和 5 求和，另一>个和 10 求和。
>
>add5 和 add10 都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在 >add5 的环境中，x 为 5。而在 add10 中，x 则为 10。
>
> ### 实用的闭包
>闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来。这显然类似于面向对>象编程。在面向对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关>联。
>
>因此，通常你使用只有一个方法的对象的地方，都可以使用闭包。 

>[节选自mdn]   
<hr>