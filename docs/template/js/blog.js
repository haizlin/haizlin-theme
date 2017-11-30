/**
 * haizlin 博客模板
 * author: 浪子神剑
 * email: 80285586@qq.com
 * github: https://github.com/haizlin/blog-theme
 * version: v1.0
 */

var HzlBlog = {
    init: function() {
        this.resize();
        this.goTop().scroll();
        this.goTop().active();
        this.tags();
        this.nav();
        this.weinxin();
        this.console();
        this.footer();
        this.search();
    },

    tags: function() {
        var tagsObj = $("#tags-list a");
        tagsObj.each(function() {
            var x = 11;
            var y = 1;
            var rand = parseInt(Math.random() * (x - y + 1) + y, 10);
            $(this).addClass("size" + rand);
        });
    },

    nav: function() {
        $('.main-left nav a').hover(function() {
            $('.main-left nav a').removeClass('current');
            $(this).addClass('current');
        });
    },

    console: function() {
        try {
            if (window.console && window.console.log) {
                console.log("^_^ 你来了，这都被你发现！");
                console.log("^_^ %c越简单越快乐！越努力越幸运！", 'color:green;');
                console.log("^_^ 非常感谢我亲爱地媳妇，在百忙这中为此博客做了全新的设计!!!");
                console.log("^_^ 博客的源码及设计图(PSD)全部开源(欢迎Star及Pull Request)：%chttps://github.com/haizlin/blog-theme", "color:red;");
                console.log("^_^ 联系我可以发邮件：%c 80285586@qq.com", "color:green;font-weight:bold;");
            }
        } catch (e) {};
    },

    footer: function() {
        var resizeTimer = null;

        function footerHeight() {
            var winHeight = $(window).height();
            var rightHeight = $('.main-right').outerHeight(true);
            var articleHeight = $('.container article').height();

            if (rightHeight <= winHeight) {
                var _height = winHeight - rightHeight + articleHeight + 'px';

                $('.container article').height(_height);
            }
        };

        $(window).resize(function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(footerHeight, 250);
        });

        footerHeight();
    },

    search: function() {
        $('#search-text').click(function() {
            var content = '<div class="search"><input type="text" class="search-input" placeholder="输入..." /></div><ul><li><p class="title"><a href="#">关于Linux的一些使用技巧</a></p><p class="description">此博文会分享给大家一些我在使用Linux系统过程中学到或者总结的实用技巧 ...</p></li><li><a href="#">JavaScript的单线程事件循环及多线程介绍</a></p><p class="description">JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事 ...</p></li><li><a href="#">Linux共享服务Samba配置</a></p><p class="description">Samba共享服务器 安装 yum install samba -y 配置文件 ...</p></li><li><a href="#">Nodejs核心模块 Timers详解</a></p><p class="description">在 Node.js 基础库中，任何一个 TCP I/O 都会产生一个 timer（计时器）对象 ...</p></li><li><a href="#">Nodejs核心模块 Timers详解</a></p><p class="description">在 Node.js 基础库中，任何一个 TCP I/O 都会产生一个 timer（计时器）对象 ...</p></li><li><a href="#">Nodejs核心模块 Timers详解</a></p><p class="description">在 Node.js 基础库中，任何一个 TCP I/O 都会产生一个 timer（计时器）对象 ...</p></li><li><a href="#">Nodejs核心模块 Timers详解</a></p><p class="description">在 Node.js 基础库中，任何一个 TCP I/O 都会产生一个 timer（计时器）对象 ...</p></li><li><a href="#">Nodejs核心模块 Timers详解</a></p><p class="description">在 Node.js 基础库中，任何一个 TCP I/O 都会产生一个 timer（计时器）对象 ...</p></li><li><a href="#">Nodejs核心模块 Timers详解</a></p><p class="description">在 Node.js 基础库中，任何一个 TCP I/O 都会产生一个 timer（计时器）对象 ...</p></li></ul>';
            layer.open({
                type: 1,
                title: '',
                scrollbar: false,
                skin: 'layui-layer-search', //样式类名
                shadeClose: false,
                shade: 0.8,
                area: ['650px', '530px'],
                content: content
            });
        });
    },

    weinxin: function() {
        // 微信扫一扫
        $('.social .weixin').hover(function() {
            $('#weixin-qrcode').fadeIn(200);
        }, function() {
            $('#weixin-qrcode').fadeOut(200);
        });
    },

    // 返回顶部
    goTop: function() {
        var _this = this;

        return {
            active: function() {
                _this.toggleGoTop().active();
            },
            scroll: function(top) {
                _this.toggleGoTop().scroll(top);
            }
        }
    },

    toggleGoTop: function() {
        var returnTop = $('#return-top');

        return {
            active: function() {
                returnTop.click(function() {
                    $('body,html').stop(true, false);
                    $('body,html').animate({
                        scrollTop: 0
                    }, 300);
                });
                return false;
            },
            scroll: function(top) {
                $(window).scroll(function() {
                    var top = $(window).scrollTop();
                    $(window).scrollTop() > 200 ? returnTop.addClass("show") : returnTop.removeClass("show");
                });
            }
        }
    },

    resize: function() {
        $(window).resize(function() {
            var top = $(window).scrollTop();
        });
    }
};

HzlBlog.init();