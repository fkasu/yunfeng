/**
 * Created by Pevon on 2016/11/16.
 */
angular.module('mobileApp').factory('myServer', function () {
    var data = {
        img: 'my.png',
        lists: [
            {
                name: '联系我们',
                href: "href('#/tab/contact')"

            }, {
                name: '设置',
                href: "href('#/tab/setting')"
            }, {
                name: '关于',
                href:'showAlert()'
            }
        ]
    };
    return data;
});
