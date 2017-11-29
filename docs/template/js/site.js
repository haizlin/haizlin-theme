/**
 * haizlin 博客模板
 * author: 浪子神剑
 * email: 80285586@qq.com
 * github: https://github.com/haizlin/blog-theme
 * version: v1.0
 */

var HzlBlog = {
    init: function() {
        /*this.toc().scroll(0);
        this.toc().go();
        
        this.resize();
        
        */
        this.goTop().scroll();
        this.goTop().active();
        this.tags();
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

    console: function() {
        try {
            if (window.console && window.console.log) {
                console.log("^_^ 你来了！这都被你发现！");
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
            layer.open({
                type: 1,
                title: '搜索',
                skin: 'layui-layer-search', //样式类名
                shadeClose: true,
                shade: 0.8,
                area: ['650px', '486px'],
                content: '这是搜索框的内容'
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

    toc: function() {
        var toc = $('#post-toc');
        return {
            scroll: function(top) {
                if (!toc.length) return;
                $.toc().fixed(top);
                $.toc().actived(top);
            },
            go: function() {
                if (!toc.length) {
                    $('.post-article').css("width", "100%");
                    return;
                };
                $.toc().go();
            }
        }
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
            },
            scroll: function(top) {
                if (top > $(document).height() / 5) {
                    returnTop.addClass('in');
                } else {
                    returnTop.removeClass('in');
                }
            }
        }
    },

    scroll: function() {
        $(window).scroll(function() {
            var top = $(window).scrollTop();
            $.BLOG.toc().scroll(top);
            $.BLOG.header(top);
            $.BLOG.goTop().scroll(top);
            $.BLOG.waterfall();
        });
    },
    resize: function() {
        $(window).resize(function() {
            var top = $(window).scrollTop();
            $.BLOG.toc().scroll(top);
            $.BLOG.search().zoom();
        });
    }
};

HzlBlog.init();