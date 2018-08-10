var argscheck   = require('cordova/argscheck'),
    utils       = require('cordova/utils'),
    exec        = require('cordova/exec'),
    channel     = require('cordova/channel');
/**
 * Check if there is an update to the App.
 * 
 * This function can be called in three ways:
 * 1. checkAppUpdate(updateUrl)
 * 2. checkAppUpdate(updateUrl, options)
 * 3. checkAppUpdate(sucessCallback, errorCallback, updateUrl, options)
 * 
 * @param successOrUrl The success callback or the URL where the update data  is located
 * @param errorOrOptions The function called on error or the authentication options
 * @param updateUrl The URL where the update data is located
 * @param options An object that may contain the authentication options
 */

var appupdate           = {};
appupdate.ENUM          = {};

appupdate.checkAppUpdate = function(succ, error, updateUrl, timeout, options) 
{
    // If the update URL hasnt been set in the updateUrl then assume no callbacks passed
//    var successCallback = updateUrl ? successOrUrl : null;
//    var errorCallback = updateUrl ? errorOrOptions : null;
//    
//    // This handles case 2, where there is an updateURL and options set
//    if ( !updateUrl && typeof errorOrOptions === 'object' ) {
//        options = errorOrOptions;
//    }
    
//    // If there is no updateUrl then assume that the URL is the first paramater
//    updateUrl = updateUrl ? updateUrl : successOrUrl;
    
    
    exec(succ, error, "AppUpdate", "checkAppUpdate",  [updateUrl, timeout, options]);
};

appupdate.ENUM.PLUGIN = 
{
    DOWNLOAD                : 1,
    /* 下载结束 */
    DOWNLOAD_FINISH         : 2,
    /* 点击开始下载按钮*/
    DOWNLOAD_CLICK_START    : 3,

    /**
     * 对比版本号
     */
    VERSION_COMPARE_START   : 200, //private 开始对比版本号; start to compare version
    VERSION_NEED_UPDATE     : 201, //检查到需要更新； need update
    VERSION_UP_TO_UPDATE    : 202, //软件是不需要更新；version up to date
    VERSION_UPDATING        : 203, //软件正在更新；version is updating
    UPDATE_CANCELLED        : 204, //软件正在更新；version is updating

    /**
     * 版本解析错误
     */
    VERSION_RESOLVE_FAIL    : 301, //版本文件解析错误 version-xml file resolve fail
    VERSION_COMPARE_FAIL    : 302, //版本文件对比错误 version-xml file compare fail

    /**
     * 网络错误
     */
    REMOTE_FILE_NOT_FOUND   : 404,
    NETWORK_ERROR           : 405,
    TIMEOUT_ERROR           : 406,
    CONNECTION_ERROR        : 407,

    /**
     * 没有相应的方法
     */
    NO_SUCH_METHOD          : 501    
};

module.exports = appupdate;



//exports.checkAppUpdate = function(successOrUrl, errorOrOptions, updateUrl, options) {
//    // If the update URL hasnt been set in the updateUrl then assume no callbacks passed
//    var successCallback = updateUrl ? successOrUrl : null;
//    var errorCallback = updateUrl ? errorOrOptions : null;
//    
//    // This handles case 2, where there is an updateURL and options set
//    if ( !updateUrl && typeof errorOrOptions === 'object' ) {
//        options = errorOrOptions;
//    }
//    
//    // If there is no updateUrl then assume that the URL is the first paramater
//    updateUrl = updateUrl ? updateUrl : successOrUrl;
//    
//    options = options ? options : {};
//    
//    exec(successCallback, errorCallback, "AppUpdate", "checkAppUpdate",  [updateUrl, options]);
//};
