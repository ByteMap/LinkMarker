// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
chrome.storage.sync.get({urlList:[]}, function(allURLs) {
	var urlList = allURLs.urlList;
	urlList.forEach(function(url) {
		colorUrls(url, 'red');
	});
});

function colorUrls(url, color) {
	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++) {
		if(links[i] == url) {
			links[i].style.color = color;
		}
	}
}
