/*chrome.storage.sync.get('newContainer', function(data) {
	//alert(data.newContainer);
	//$('#containerID').empty().append(data.newContainer);
	//$('#containerID')[0].html(data.newContainer);
	$('#containerID').html(data.newContainer);
	//alert($(this)[0].href);
	//alert($('#body-page')[0].innerHTML);
});*/

$('#containerID').on("click", "a", function(e) {
	$(".nav-tabs").on("click", "a", function(e) {
	e.preventDefault();
	$(this).tab('show');
})

.on("click", "span", function() {
	var anchor = $(this).siblings('a');
	$(anchor.attr('href')).remove();
	//(this) would be the 'x' symbol in <span>. Parent of 'x' is the tab
	$(this).parent().remove();
	$(".nav-tabs li").children('a').first().click();
	var newContainer = document.getElementById('containerID').innerHTML;
	chrome.storage.sync.set({'newContainer': newContainer});
	});

/*.on("click", "a", function() {
	e.preventDefault();
	var id = $(".nav-tabs").children().length;
	$(this).closest('li').before('<li> <a href = "#tab_' + id + '"> New Tab </a> <span> x </span> </li>');
	$('.tab-content').append('<div class = "tab-pane" id = "tab_' + id + '"> tab' + id + '</div>');
	$('.nav-tabs li:nth-child(' + id + ') a').click();
	var newContainer = document.getElementById('containerID').innerHTML;
	//alert(newContainer);
	chrome.storage.sync.set({'newContainer': newContainer});
	});*/

});

$(".add-contact").click(function(e) {
	e.preventDefault();
	var id = $(".nav-tabs").children().length;
	$(this).closest('li').before('<li> <a href = "#tab_' + id + '"> New Tab </a> <span> x </span> </li>');
	$('.tab-content').append('<div class = "tab-pane" id = "tab_' + id + '"> tab' + id + '</div>');
	$('.nav-tabs li:nth-child(' + id + ') a').click();
	var newContainer = document.getElementById('containerID').innerHTML;
	//alert(newContainer);
	chrome.storage.sync.set({'newContainer': newContainer});
});

/*$("#add-contact").click(function(e) {
	e.preventDefault();
	var id = $(".nav-tabs").children().length;
	$(this).closest('li').before('<li> <a href = "#tab_' + id + '"> New Tab </a> <span> x </span> </li>');
	$('.tab-content').append('<div class = "tab-pane" id = "tab_' + id + '"> tab' + id + '</div>');
	$('.nav-tabs li:nth-child(' + id + ') a').click();
	var newContainer = document.getElementById('containerID').innerHTML;
	//alert(newContainer);
	chrome.storage.sync.set({'newContainer': newContainer});
});*/
