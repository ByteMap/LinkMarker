// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var urlList = [];
var selection = document.getElementById("selection");

chrome.storage.sync.get({urlList:[]}, function(allURLs) {
    urlList = allURLs.urlList;
    urlList.forEach(function(url) {
        writeAllUrls(url);
    });
    selection.size = urlList.length;
});

document.getElementById("menuButton").addEventListener("click", function() {
    chrome.tabs.create({url: chrome.extension.getURL('menu.html')});
});

document.getElementById("addButton").addEventListener("click", function() {
    addURL();
});

function addURL() {   
    chrome.tabs.query({'active': true}, function(tabs) {
        //tabs is an array; fetch the first (and only) object-element in tabs
        var newUrl = tabs[0].url;

        // If the new url is not already in the list, then continue
        // to add it to the URL list and proceed, else do nothing.
        if(urlList.indexOf(newUrl) === -1) {
            updateList(newUrl);
        }
    });
}

function updateList(url) {
    urlList.push(url);
    chrome.storage.sync.set({'urlList': urlList});
    var currentUrl = document.createElement('option');
    currentUrl.value = currentUrl.innerHTML = url;
    selection.add(currentUrl);
    selection.size = urlList.length;
}

function writeAllUrls(url) {
    var currentUrl = document.createElement('option');
    currentUrl.value = currentUrl.innerHTML = url;
    selection.add(currentUrl);
}


