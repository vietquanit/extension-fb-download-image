// set event onload
var type = "";
document.addEventListener("DOMContentLoaded", function () {
  var save = document.getElementById("save");
  var cancel = document.getElementById("cancel");
  let title = document.getElementById("title");
  let tag = document.getElementById("tag");
  let link = document.getElementById("link");
  // onClick's logic below:
  save.addEventListener("click", function () {
    console.log(type)
    callApiSave(title, tag, type, link);
    setInterval(function () {
      closePopup();
    },1000);
  });
  cancel.addEventListener("click", function () {
    closePopup();
  });
  // copy to clipboard
  link.onfocus = function () {
    link.style.backgroundColor = "#0f683796";
    link.style.opacity = 0.5;
    link.select()
    link.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(link.value);
  }

});

// event receive url from background.js
chrome.storage.sync.get(["urlString", "type"], function (data) {
  //Update popupElement1 and popupElement2 with loaded data
  document.getElementById("link").value = data.urlString;
  document.getElementById("img-link").src = data.urlString;
  type = data.type;
});

function closePopup() {
  let popup = window.self;
  popup.close();
}

function callApiSave(title, tag, type, link) {
  let formData = new FormData();
  let urlApi = "http://127.0.0.1:5000/insert";
  formData.append("title", title.value);
  formData.append("tag", tag.value);
  formData.append("type", type);
  formData.append("link", link.value);

  fetch(urlApi, {
    body: formData,
    method: "post",
  })
    .then(function (response) {
      return response.statusText;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
