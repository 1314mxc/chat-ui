# chat-ui

# 注意

### 本项目为npm包先行项目，还未上传至npm（预计 2024-6 发包，敬请期待），持续更新中...

## 介绍

本项目为“聊天展示组件”，注意！本项目并不包含：输入 - 请求 - 展示 - 动画 完整流程，只有聊天消息展示部分。

比如：文字消息、图片消息、消息状态、自定义颜色（即将更新）

本项目以及未来之npm包力在打造一个好的用户体验 = 使用者视觉、交互体验 + 开发者使用体验。


## 使用

### 方法一

使用本项目时主要看components下的index.vue（聊天消息的父元素、大盒子）、以及同级的ms组件。
ms组件是“消息本体”：消息+状态（发送中、失败重新发送、已发送）+头像+tools。其中ms组件可以单独拿出使用。

app.vue是整个components组件的引用展示

### 方法二

**本项目是UI组件** 你可以单独引入ms.scss文件，然后仿照ms.vue中html的格式写结构或者甚至只需要在关键位置添加class类名即可。

这样就可以在不限于vue的代码中快捷使用。但前提是你的项目要使用了sass～


## 参数

### index.vue

list：数组。所有消息的集合。

注意！需要格式：

```
[
    {img: [], text: "", status: 'pending/error/send', id: '', name: "", hidden: true, first: true, middle: true, last: true}
]
```

其中：
 - `hidden: true, first: true, middle: true, last: true` 这些字段可以调用ms下的util js文件中的 `setListArr` （初始化时调用，传入list，如果使用了reactive，不需要接收返回值）和 `addListItem` （新增消息时调用，传入list的某一项item 和 数组list，如果使用了reactive，不需要接收返回值）函数来实现。
 - status必须自行控制：比如重新发送消息时请求完成后要及时更改这一条消息的status。在vue3中，如果你使用了reactive或ref，直接修改字段即可，无需其他操作。


name：当前登录的人的名字。



### ms

item：父组件list里面的某一项

name：当前登录的人的名字。


（GitHub的发布：git push -u origin main，提醒用）