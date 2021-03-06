import './index.scss';
import $ from 'jquery';
import * as utils from '../../common/js/utils';

// 分享设置
if(window.share){
    share({
        title:'默认标题',
        desc:'默认描述',
        link:window.location.href,
        imgUrl: ''
        // 可使用require('../../assets/img/share.jpg')来加载本地图片
    })
}

if(module.hot){
    require('./index.html');
    module.hot.accept();
    module.hot.decline('./index.html');
}