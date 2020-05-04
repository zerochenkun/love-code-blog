# 懒加载与节流

##  懒加载

### 什么是懒加载

前端性能优化的方式有很多种，如减少HTTP请求，SSR服务端渲染，webpack实现工程化打包等。每个方法都可以衍生出很多个知识点，**懒加载**主要用于网页显示图片或其它较大资源，而图片懒加载就是通过避免一次性向服务器发出大量请求导致页面加载缓慢，而提升页面加载速度，提高用户体验的常见方法之一。

### 怎么实现

主要思路：将图片地址保存在html5新特性data-*中，data-*是一个自定义属性，可以用来嵌入自定义数据，并通过js滚动监听，当图片出现在浏览器可视区域的时候，将图片地址存储在src属性中，达到懒加载的目的。

主要 API : **IntersectionObserver** / **getBoundingClientRect** (mdn可查)





## 节流

### 什么是节流

刚才我们是通过监听scroll事件来触发懒加载函数执行的，但是scroll是不间断执行的，当用户scroll时，1s可能 scroll上百次，这是非常消耗浏览器性能的，因此我们可以通过一个节流函数来继续优化。使其在固定的时刻间隔只执行一次。

### 如何实现

主要思路：


```javascript
lazyload(document.querySelectorAll('.lazyload'))

function lazyload(imgs) {
    imgs = Array.from(imgs)
  //1.1-懒加载： IntersectionObserver 较新API,老浏览器可能无法使用
    if ('IntersectionObserver' in window) {
      let observer = new IntersectionObserver(function(entries) {
        console.log(entries)
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            loadImage(entry.target, function() {
              observer.unobserve(entry.target)
            })
          }
        })
      }, { threshold: 0.01 })
    
      imgs.forEach(img => observer.observe(img))
    } else {
        // 1.2-懒加载：旧方法，适用性好，但是代码多呀
      let onscroll = throttle(function() {
        if (imgs.length === 0) {
          return window.removeEventListener('scroll', onscroll)
        }
        imgs = imgs.filter(img => img.classList.contains('lazyload'))
        imgs.forEach(img => inViewport(img) && loadImage(img))
      }, 300)
    
      window.addEventListener('scroll', onscroll)
    //   window.dispatchEvent(new Event('scroll'))
    }
  // 2 时间戳节流
    function throttle(func, wait) {
      let prev, timer
      return function fn() {
        let curr = Date.now()
        let diff = curr - prev
        if (!prev || diff >= wait) {
          func()
          prev = curr
        }
      }
    }
  
    function inViewport(img) {
      let { top, left, right, bottom } = img.getBoundingClientRect()
      let vpWidth = document.documentElement.clientWidth
      let vpHeight = document.documentElement.clientHeight
      return (
        (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) &&
        (left > 0 && left < vpWidth || right > 0 && right < vpWidth)
      )
    }
  
    function loadImage(img, callback) {
      let image = new Image()
      image.src = img.dataset.src
      image.onload = function() {
        img.src = image.src
        img.classList.remove('lazyload')
        if (typeof callback === 'function') callback()
      }
    }
  }
```

另外别人的文章也不错,也推荐看下 [函数防抖和节流](https://juejin.im/post/5b651dc15188251aa30c8669)