# 小说页面伪装|起点页面伪装|番茄页面伪装|笔趣阁页面伪装

![logo](https://s21.ax1x.com/2024/08/06/pkxPf0S.png)

将小说页面伪装成一个 **Word文档** 或 **Excel表格**，同时净化小说页面，去除不必要的元素。

___

适用于起点、番茄、笔趣阁、晋江、飞卢、部分轻小说站等

适配情况:
(部分站点采用图片等形式展示文字, 无法支持Excel模式)

| 站点            | Word模式 | Excel模式 |
|---------------|--------|---------|
| 起点            | ✔      | ✔       |
| 番茄            | ✔      | ✔       |
| 若干笔趣阁*        | ✔      | ✔       |
| bilinovel.com | ✔      | ✔       |
| linovelib.com | ✔      | ✔       |
| 晋江文学城         | ✔      | ✔       |
| 轻之国度          | ✔      | ✔       |
| 69书吧          | ✔      | ✔       |
| owlook.com.cn | ✔      | ✔       |
| V2EX          | ✔      | ✔       |
| 七猫            | ✔      | ❌       |
| 飞卢            | ✔      | ❌       |
| 刺猬猫           | ✔      | ❌       |

*这里的笔趣阁包含以下站: biquge.net, xbiqugu.net, biquge.co, 52wx.com, 3bqg.cc, bigee.cc, beqege.cc, biqukun.com,
biquge.tw

**很多站都自称笔趣阁, 只适配了一些**
___

项目地址[在这里](https://github.com/NiaoBlush/novel-disguise)

脚本安装地址[在这里](https://greasyfork.org/zh-CN/scripts/499657)

需要**适配其他网站**
欢迎在[反馈区](https://greasyfork.org/zh-CN/scripts/499657-%E5%B0%8F%E8%AF%B4%E9%A1%B5%E9%9D%A2%E4%BC%AA%E8%A3%85-%E5%B0%8F%E8%AF%B4%E9%A1%B5%E9%9D%A2%E7%B2%BE%E7%AE%80-%E8%B5%B7%E7%82%B9%E9%A1%B5%E9%9D%A2%E4%BC%AA%E8%A3%85-%E7%95%AA%E8%8C%84%E9%A1%B5%E9%9D%A2%E4%BC%AA%E8%A3%85-%E7%AC%94%E8%B6%A3%E9%98%81%E9%A1%B5%E9%9D%A2%E4%BC%AA%E8%A3%85/feedback)
或者[Issues](https://github.com/NiaoBlush/novel-disguise/issues/new)中提出来 (⚠**李鬼太多, 所以同时需要提供站点网址**⚠)

觉得好用的话可以给个star或者给个好评~

![1.jpg](https://s21.ax1x.com/2024/07/05/pkRJ9nH.jpg)

![excel](https://s21.ax1x.com/2024/08/27/pAk5yxf.jpg)

![2.jpg](https://s21.ax1x.com/2024/07/05/pkRJYgU.jpg)

## 安装

要使用任何脚本，首先需要浏览器安装 **Tampermonkey** 脚本管理器扩展

可以从[Chrome商店](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
或 [Firefox商店](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)
或[Edge商店](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)
商店直接安装Tampermonkey扩展。

---

如果无法从浏览器官方商店安装，参考以下内容：

以下内容摘自[这里](https://github.com/XIU2/UserScript/blob/master/README.md)，使用者自行决定是否使用。 (
感谢XIU2大佬的文件及文档)

> （[Chrome](https://pan.lanpw.com/b073l8d1e))
> - _其他基于 **Chromium** 内核的浏览器（如国内套皮浏览器）一般都可以使用 Chrome 扩展。_
> - _请确保使用 **Tampermonkey 正式版** 扩展，其他的用户脚本管理器可能导致**无法正常使用**脚本。_
> - _如果要重装脚本，请记得在 Tampermonkey 扩展的**回收站中彻底删除**脚本后再去重新安装脚本。_

> _**不会离线安装 .crx
扩展？[Chrome、Edge 重新开启隐藏的 [拖入安装 .crx 扩展] 功能！](https://zhuanlan.zhihu.com/p/276027099)**_

## 使用

开箱即用, 如果觉得浏览器的标题栏与地址栏比较显眼可以使用`F11`进入全屏模式

可以使用快捷键 `E` 临时切换到原始页面, 再次按下 `E` 恢复。

章节名放置于上方标题栏，

字数，发布时间等信息在左下角（如果有）。

___

点击浏览器右上角油猴拓展，再点击脚本下的`设置`按钮，即可打开设置菜单:

改动任何设置并点击`保存设置`按钮后，需要刷新页面以使设置生效。

![设置菜单1](https://s21.ax1x.com/2024/09/23/pAQpUUK.jpg)

![菜单界面](https://s21.ax1x.com/2024/09/23/pAQpNE6.jpg)

### 模式切换

默认为**Word模式**，可切换为**Excel模式**。

### 主题切换

默认为**Office主题**，可切换为**Wps主题**。

### Word页边距模式

可切换Word模式下页边距的显隐，半屏时采用无边距会更加自然。

### 字体

暂时没考虑字体设置的功能

字体、登录等需要关闭脚本，在原版网页中完成修改等操作后再开启脚本。

## 其他说明

微信读书好复杂，暂时没做支持。

2024-09-23: 第二次尝试适配微信读书后放弃了，这个站到底是什么妖魔鬼怪。。刷新下页面就要载入十几兆的东西，加载前居然还要检测高度否则拒绝加载。。你们赢了

<details>

<summary>版本说明</summary>

### v2.7.0

+ 适配v站
+ 公共代码优化

### v2.6.2

+ 修复非常见分辨率下header尺寸问题

### v2.6.1

+ 代码优化与脚本体积压缩
+ 52wx：改变文本颜色为黑色

### v2.6.0

+ 适配bilinovel原站 (mac会停留在原站而不是跳转到linovelib.com)

### v2.5.3

+ 修复bilinovel中excel模式下的翻页问题
+ 修复bilinovel中excel模式下的字体加密问题
+ 尝试性修复bilinovel.com未跳转导致脚本未识别的问题

### v2.5.0

+ 适配owlook.com.cn
+ 适配刺猬猫

### v2.4

+ 引入菜单
+ 加入Wps主题
+ 适配69书吧

### v2.3

+ 适配轻之国度
+ 适配飞卢(word)

### v2.2

+ 适配晋江

### v2.1

+ 适配七猫(word)

### v2.0.0

大的来了

+ 新增**Excel模式**！
+ 适配 2k / 4k 分辨率

### 历史的版本信息不写了

</details>

## 免责声明

本脚本为独立项目，与其应用的网站无任何关联或官方联系。网站提供的内容完全由各自的内容提供者负责。

本脚本仅修改内容的外观和样式，以方便用户使用，并不更改或干扰内容本身。使用本脚本时，用户仍需遵守各个网站的使用条款和版权规定。对网站内容的复制、转载、下载等操作，必须遵循内容提供方的版权要求和相关法律规定。

脚本作者不对使用本脚本后的网站内容或功能的任何变化负责，也不承担因违反网站规定或法律引起的任何责任。

`Excel模式`下部分伪装内容为随机生成，在机缘巧合下生成的或许具有特定含义的随机内容并非作者本意。

## 安装数

![install_count](https://github.com/NiaoBlush/novel-disguise/blob/master/install_count.png?raw=true)
