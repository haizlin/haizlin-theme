// 个人简介
try {
    if (window.console && window.console.log) {
        console.log("^_^ 你来了！这都被你发现！");
        console.log("^_^ %c越简单越快乐！越努力越幸运！", 'color:green;');
        console.log("^_^ 非常感谢我亲爱地媳妇，在百忙这中为此博客做了全新的设计!!!");
        console.log("^_^ 博客的源码及设计图(PSD)全部开源(欢迎Star)：%chttps://github.com/haizlin/blog-theme", "color:red;");
        console.log("^_^ 联系我可以发邮件：%c 80285586@qq.com", "color:green;font-weight:bold;");
    }
} catch (e) {};

// 搜索框弹窗
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

// 微信扫一扫
$('.social .weixin').hover(function() {
    $('#weixin-qrcode').fadeIn(200);
}, function() {
    $('#weixin-qrcode').fadeOut(200);
});

// 如果正文高度不够高时，底部固定在最底
$(function() {
    var resizeTimer;

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
});

// 文章标签
var tagsObj = $("#tags-list a");
tagsObj.each(function() {
    var x = 11;
    var y = 1;
    var rand = parseInt(Math.random() * (x - y + 1) + y, 10);
    $(this).addClass("size" + rand);
});