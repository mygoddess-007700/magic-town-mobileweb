(function () {
    if ((typeof cocosAnalytics) !== 'undefined'){
        var initArgs = {
            appID: '615907356',
            storeID: 'Android',
            engine: 'cocos',
            callNumber: ''
        };
        if (!initArgs.appID || !initArgs.storeID) return console.error('请在编辑器设置好 Cocos Analytics 的 appID，如果在 Android 或者 iOS 下发布，请选择好对应的渠道。');
        let cocosAnalyticsID1 = cocosAnalytics.init(initArgs);
        let _global = globalThis || window;
        _global.cocosAnalyticsID1 = _global.cocosAnalyticsID1 || cocosAnalyticsID1;
    }
})();