angular.module('mobileApp').factory('settingServer', function () {
    var data = {
        pages: [
            {
                name: '皮肤切换',
                href: "href('#/tab/skin')"
            },
            {
                name: '清除浏览历史',
                href: 'clearHistory()'
            },
            {
                name: '检查更新',
                href: 'upData()'
            },
        ]
    };
    return data;
});