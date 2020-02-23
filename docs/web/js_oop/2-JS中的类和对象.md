# 二. 初步认识 JS 中的类和对象

## 1 构造函数的定义

在 JS 早期, 没有 **[primary]类(class)** 的概念, 主要是通过 **[primary]构造函数** 来模拟的.

> 语法

```js
function 构造函数名() {
  // 函数体
}
```

1. 使用`function`关键字表示定义一个构造函数
2. **[primary]构造函数** 名一般首字母大写

> 示例: 2-1 构造函数的定义.html

```js
function Person() {}
```

通过以上方式就可以定义一个 Person 构造函数, 相当于定义好了一个 Person 类

::: details 播放视频

<iframe src="//player.bilibili.com/player.html?aid=66713318&cid=115697024&page=4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

:::

## 2 构造函数的作用

### 1) 通过构造函数实例化对象

在 JS 中, 我们通过 **[primary]构造函数(类)** **[warning]实例化** **[success]对象**

> 语法

```js
new 构造函数名()
```

> 示例: 2-2 通过构造函数实例化对象.html

```js{4}
// 一. 定义一个构造函数
function Person() {}
// 二. 实例化一个对象 , 赋值给变量p
var p = new Person()
console.log(typeof p) // object
```

以上代码

- 通过 new 关键字, 产生了一个对象, 并赋值给变量 p
- 通过`typeof p`测试变量 p 的类型为 object, 说明 p 是一个对象

::: details 播放视频

<iframe src="//player.bilibili.com/player.html?aid=66713318&cid=115697041&page=5" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
:::

### 2) 在构造函数中定义属性

::: tip
**[primary]构造函数** 规定了由该类实例化出来的 **[success]对象** 应该包含哪些 **[error]属性**
:::
比如, 由学生类实例化出来的学生 **[success]对象** 都应该有`姓名`, `年龄`这些 **[error]属性**

```js
function Student() {
  this.uname = null
  this.age = null
}
```

在 **[primary]构造函数** 的内部, 我们通过`this.属性名`的方式来定义 **[error]属性**

在这里, 大家先把这个看作固定写法, 后面我们再具体分析

::: tip
**[primary]构造函数** 虽然可以规定 **[success]实例对象** 应该包含哪些 **[error]属性** , 但是并不能确定 **[success]实例对象** 的 **[error]属性** 值
:::
比如 人类都应该有`名字`这个 **[error]属性** , 但是具体叫什么名字, 只有在一个人出生的时候才去确定

因此, 在实例化 **[success]对象** 的时候, 需要将`具体的数据`传递给 **[primary]构造函数**

> 示例: 2-3 在构造函数中定义属性.html

```js{2,7}
// 一. 定义一个学生类
function Student(n, a) {
  this.uname = n
  this.age = a
}
// 二. 实例化对象
var stu = new Student('xiaoming', 20)
```

::: danger 重要结论

**[primary]构造函数** 主要完成 **[error]属性** 的初始化!!!

:::

::: details 播放视频

<iframe src="//player.bilibili.com/player.html?aid=66713318&cid=115697071&page=6" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

:::

> 练习

一. 通过构造函数 Phone 定义一个手机类, 包含型号(type), 价格(price), 颜色(color), 屏幕大小(size)

二. 实例化两个对象

- 一个 iphone 对象, 型号: iphoneX, 价格: 6999, 颜色: 土豪金, 屏幕大小: 5.8 英寸
- 一个 huawei 对象, 型号:p30 pro, 价格: 5988, 颜色: 极光蓝, 屏幕大小: 6.1 英寸

::: details 参考答案

```js
// 一. 定义手机类
function Phone(type, price, color, size) {
  //  属性
  this.type = type
  this.price = price
  this.color = color
  this.size = size
}
// 二. 实例化对象
var iphone = new Phone('iphoneX', 6999, '土豪金', '5.8英寸')
var huawei = new Phone('p30 pro', 5988, '极光蓝', '6.1英寸')
```

:::

> 作业

一.通过构造函数 Hero 定义一个英雄类, 包含血量(HP), 类型(type), 攻击力(attack)

二.实例化两个对象

- 一个 lianpo 对象, 血量:700, 类型: 力量型, 攻击力: 70
- 一个 houyi 对象, 血量:300, 类型: 射手, 攻击力: 130

## 3 小结

::: tip 小结

1. 通过 **[primary]构造函数** 定义类(规定应该包含哪些 **[error]属性** 名)
2. 通过 new 实例化 **[success]对象** (在实例化时, 确定 **[error]属性** 值)
3. **[primary]构造函数** 主要完成 **[error]属性** 的初始化

:::

::: details 播放视频

<iframe src="//player.bilibili.com/player.html?aid=66713318&cid=115697101&page=7" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

:::
