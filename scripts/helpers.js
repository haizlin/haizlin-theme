// 左侧导航当前样式
hexo.extend.helper.register('main_nav', function(path, navUrl){
    console.log(path, navUrl);
    var _path = '/' + path;

    if(_path === navUrl){
        return 'current';
    }else{
        return '';
    }
});

// 左侧导航当前样式
hexo.extend.helper.register('sub_nav', function(category, subMenu){
    console.log('当前链接：', category);
    var currentObj = subMenu[category];
    console.log(currentObj);
    var _path = '/' + category;
    var list = '';

    for(var i in currentObj){
        if(_path === '/' + i){
            list += '<a class="current" href="/' + i + '/index.html">' + currentObj[i] + '</a>'
        }else{
            var link = '/' + i + '/index.html';
            // link = link.replace('//','/');
            console.log('链接＝', link);
            list += '<a href="' + link + '">' + currentObj[i] + '</a>'
        }
    }

    return list;
});

