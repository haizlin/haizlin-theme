// 左侧导航当前样式
hexo.extend.helper.register('current_path', function(path, navUrl){
    var _path = '/' + path;
    var _navUrl = navUrl + 'index.html';
    var status = '';

    if(_path === _navUrl){
        return 'current';
    }else{
        return '';
    }
});
