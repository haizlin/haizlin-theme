$('#search-text').click(function(){
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
