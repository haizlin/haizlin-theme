/**
 * haizlin 博客模板
 * author: 浪子神剑
 * email: 80285586@qq.com
 * github: https://github.com/haizlin/blog-theme
 * version: v1.0
 */

var HzlBlog = {
    searchDatas: {}, // 搜索数据
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
        this.searchChange();
        this.tocVisitedColor();
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
        var index = $('.main-left nav .current').index();

        $('.main-left nav a').hover(function() {
            $('.main-left nav a').removeClass('current');
            $(this).addClass('current');
        }, function() {
            $('.main-left nav a').removeClass('current');
            $('.main-left nav a').eq(index).addClass('current');
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

    // 输入框弹窗
    search: function() {
        $('#search-text').click(function() {
            var content = '<div class="search"><input type="text" class="search-input" id="key" placeholder="输入..." /></div><ul id="search-result"></ul>';
            
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

            $('#key').focus();
        });
    },

    searchChange: function() {
        var _this = this;
        $(document).on('input propertychange', '#key', function() {
            var text = $.trim($(this).val());
            var regExp = new RegExp(text.replace(/[ ]/g, '|'), 'gmi');

            _this.loadData(function(data) {
                var result = data.filter(function(post) {
                    return _this.matcher(post, regExp);
                });

                _this.render(result);
            });

        });
    },

    matcher: function(post, regExp) {
        var _this = this;
        return _this.regtest(post.title, regExp);
    },

    regtest: function(raw, regExp) {
        regExp.lastIndex = 0;
        return regExp.test(raw);
    },

    render: function(data) {
        var html = '';
        var searchResult = $('#search-result');
        searchResult.html('');

        if (data.length) {
            for (var i = 0; i < data.length; i++) {
                html += '<li><p class="title"><a href="/' + data[i].path + '">' + data[i].title + '</a></p><p class="description">' + this.cutString(data[i].excerpt,76) + '</p></li>';
            }
        } else {
            html = '<li><p>没有找到相关结果!</p></li>';
        }

        searchResult.append(html);
    },

    loadData: function(success) {
        var _this = this;

        if (_this.isEmptyObject(_this.searchDatas)) {
            $.getJSON('/content.json', function(data) {
                _this.searchDatas = data || {};

                success(_this.searchDatas);
            })
        } else {
            success(_this.searchDatas);
        }
    },

    // 检测对象是否为空
    isEmptyObject: function(obj) {　　
        for (var key in obj) {　　　　
            return false; //返回false，不为空对象
            　　
        }　　　　
        return true; //返回true，为空对象
    },

    // 截取字符串
    cutString: function(str, len) {
        //length属性读出来的汉字长度为1 
        if (str.length * 2 <= len) {
            return str;
        }
        var strlen = 0;
        var s = "";

        for (var i = 0; i < str.length; i++) {
            s = s + str.charAt(i);
            if (str.charCodeAt(i) > 128) {
                strlen = strlen + 2;
                if (strlen >= len) {
                    return s.substring(0, s.length - 1) + "...";
                }
            } else {
                strlen = strlen + 1;

                if (strlen >= len) {
                    return s.substring(0, s.length - 2) + "...";
                }
            }
        }

        return s;
    },

    // 微信扫一扫
    weinxin: function() {
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
    },

    // toc
    tocVisitedColor: function(){
        $('.toc-link').click(function(){
            $(this).addClass('default-color');
        });
    }
};

HzlBlog.init();