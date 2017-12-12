// 左侧导航当前样式
hexo.extend.helper.register('main_nav', function(category, navUrl){
    if(navUrl.indexOf(category) !== -1){
        return 'current';
    }else{
        return '';
    }
});

// 右侧子导航
hexo.extend.helper.register('sub_nav', function(category, subMenu){
    var currentObj = subMenu[category];
    var _path = '/' + category;
    var list = '';

    for(var i in currentObj){
        if(_path === '/' + i){
            list += '<a class="current" href="/' + i + '/index.html">' + currentObj[i] + '</a>'
        }else{
            var link = '/' + i + '/index.html';
            // link = link.replace('//','/');
            list += '<a href="' + link + '">' + currentObj[i] + '</a>'
        }
    }

    return list;
});
