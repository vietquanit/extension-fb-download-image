chrome.runtime.onInstalled.addListener(function () {
    // let contexts = [
    //     'page',
    //     'selection',
    //     'link',
    //     'editable',
    //     'image',
    //     'video',
    //     'audio'
    // ];
    // for (let i = 0; i < contexts.length; i++) {
    //     let context = contexts[i];
    //     let title = "Download " + context;
    //     chrome.contextMenus.create({
    //         title: title,
    //         contexts: [context],
    //         id: context
    //     });
    // }
    chrome.contextMenus.create({
        title: 'Download FB',
        contexts: ["all"],
        id: "Download FB"
    });

});

chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
    openPopupHTML(info.srcUrl, info.menuItemId);
    // switch (info.menuItemId) {   
    //     case 'radio':
    //         break;
    //     case 'checkbox':
    //         break;
    //     case 'link':
    //         openPopupHTML(info.srcUrl, info.menuItemId)
    //         break;
    //     case 'image':
    //         openPopupHTML(info.srcUrl, info.menuItemId);
    //         break;
    //     default:
    //         openPopupHTML(info.srcUrl, info.menuItemId);
    //         break;
    // }
    console.log(info)
}


function openPopupHTML(url){
    chrome.windows.create({
            url: 'popup/index.html',
            type: 'popup',
            width: 400,
            height: 600
    });
    sendUrlToPopUp(url)
}

function sendUrlToPopUp(urlString, type){
    chrome.storage.sync.set({'urlString': urlString, 'type': type});
}