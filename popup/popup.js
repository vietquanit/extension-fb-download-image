// set event onload
document.addEventListener('DOMContentLoaded', function () {
    var save = document.getElementById('save');
    var cancel = document.getElementById('cancel');

    // onClick's logic below:
    save.addEventListener('click', function () {
        console.log('save')
        closePopup();
    });
    cancel.addEventListener('click', function () {
        console.log('cancel')
        closePopup();
    });

});


// event receive url from background.js
chrome.storage.sync.get(['urlString', 'type'], function (data) {
    //Update popupElement1 and popupElement2 with loaded data
    document.getElementById("link").value = data.urlString;
    document.getElementById("img-link").src = data.urlString;
});


function closePopup() {
    let popup = window.self;
    popup.close();
}

function callApiSave(){
    
}