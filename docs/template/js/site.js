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
$('.social .weixin').hover(function(){
    $('#weixin-qrcode').fadeIn(200);
}, function(){
    $('#weixin-qrcode').fadeOut(200);
});

// 如果正文高度不够高时，底部固定在最底
$(function(){
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