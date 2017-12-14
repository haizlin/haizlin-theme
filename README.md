# Haizlin-theme 博客模板

> Haizlin-theme 是我宝贝老婆业余时间给我设计的一套非常简洁的扁平化博客模板，支持Hexo，有结构清晰的设计图。  
> 以全屏为主，自适应移动端。  
> 如果你也喜欢这个主题，那就动动手指 [Star](https://github.com/haizlin/blog-theme/stargazers) 支持一下吧！  

## 设计图(PSD)
> 设计理念：

[查看](./docs/psd)

## 预览
[主题Blog预览](https://blog.haizlin.cn)

> 效果图，先睹为快  

- 首页([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Home.png))  

![Home](./docs/views/Home.png)

- 列表页([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/List.png))  

![List](./docs/views/List.png)

- 内容页([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Content.png))  

![Content](./docs/views/Content.png)

- 读书([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Read.png))

![Read](./docs/views/Read.png)

- 关于([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/About.png))

![About](./docs/views/About.png)

- 作品([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Works.png))

![Works](./docs/views/Works.png)

- 历史([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/History.png))

![History](./docs/views/History.png)

- 标签([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Tags.png))

![Tags](./docs/views/Tags.png)

- 时间归档([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Archives.png))

![Archives](./docs/views/Archives.png)

- 工具([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Tools.png))

![Tools](./docs/views/Tools.png)

- 搜索([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Search.png))

![Search](./docs/views/Search.png)

- 站点地图([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/Sitemap.png))

![Sitemap](./docs/views/Sitemap.png)

- 404([查看大图](https://raw.githubusercontent.com/haizlin/blog-theme/develop/docs/views/404.png))
> 使用了[腾讯公益](http://www.qq.com/404/)的404页面

![404](./docs/views/404.png)

## 主题特点

- [x] 扁平化设计
- [x] 文章阅读进度条
- [x] 支持feed订阅
- [x] 支持站内搜索，速度快
- [x] 支持站点地图
- [x] 添加不蒜子统计
- [x] 首页图片懒加载
- [x] 首页文章缩略图自动检索文章内图片，支持自动随机图片
- [x] 支持阅读进度条
- [x] 添加了一些波纹效果。By [Waves](https://github.com/fians/Waves)
- [x] 支持响应式
- [x] 对IE浏览器的检测和警告
- [x] 评论系统支持友言和Gitment
- [x] 版权信息可配置
- [x] 支持网站统计和文章推送
- [x] 移动端的简洁设计
- [x] 支持代码高亮并支持自定义高亮样式
- [x] 支持Shell脚本一键使用Travis CI持续部署Hexo博客


## 浏览器支持
本想支持IE6-IE8的，但后面觉得能进到这里来的估计只有技术员了吧，我相信做为一个合格的技术员都不愿意再使用IE6-IE8了，所以结论是只支持现代浏览器。

> Chrome/Firefox/Opera/Safari/IE9+  

## 使用

执行下面命令，然后修改`_config.yml`配置文件中`theme`为 `haizlin`.

```
git clone https://github.com/haizlin/blog-theme themes/haizlin
```

## 更新主题

主题会不定时的优化和更新，更新主题代码：

```
cd themes/haizlin
git pull
```

## 配置

默认:

```yml
menu:
  网站首页: /index.html
  专题系列: /categories/special/index.html
  解决方案: /categories/solution/index.html
  工具资源: /tools/index.html
  我的生活: /categories/life/index.html
  关于我们: /about/index.html
  文章标签: /tags/index.html
  时间归档: /archives/index.html

submenu:
  订阅: /atom.xml
  留言: /customization

widgets:
- search
- category
- calendar
- recent_comments
- links
- tagcloud
# - tag
# - archive
- weibo

excerpt_link: Read More
comment_link: Comments

# header头像
avatar: /img/default/avatar.png
# header右侧图片展示
ad:

# 百度分享
baidu_share: true

# 请到baidu_tongji.ejs中替换代码
baidu_tongji: true

# enable是否开启；height小挂件高度；url替换成自己的微博挂件地址，同步修改url中height的值
weibo:
  height: 400
  url:

# 评论提供可以选择 duoshuo 或者 wumii，无需评论，此处不填就行。
comment_provider: duoshuo
# 关联推荐提供可以选择baidu_tuijian 或者 wumii, 无需关联推荐，此处不填即可。
relate_provider: baidu_tuijian

# 多说，填写多说short_name
duoshuo_short_name:

# wumii，填写网站域名，例如：http://lupeng.me
wumii_siteprefix:

# 百度推荐，填写百度推荐ID，例如：hm_t_88638
baidu_tuijian_id:

# 百度统计 参考网站: [百度统计](https://tongji.baidu.com/)
baidu_anaylytics: 

# 百度文章推送  参考网站: [百度站长](http://zhanzhang.baidu.com/)  
baidu_push:

# Calendar
calendar:
  language: zh-CN
  root: calendar
```

- `avatar` 头像URL
- `baidu_share` 百度分享
- `weibo` 新浪微博
- `duoshuo` 多说评论
- `wumii` 无觅关联

## 版本更新

### v1.0.0 (2017-11-06)
- 设计模板
- 初始化hexo基础功能

## License
[MIT](/LICENSE)
