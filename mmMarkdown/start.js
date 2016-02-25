document.addEventListener('DOMContentLoaded', function(){
	$('#h2m').click(function(){
	    // chrome.tabs.executeScript(null,{code:"switchLight('"+ o.attr('id') +"');", allFrames: true});
	    chrome.tabs.create({'url': 'html2markdown.html','selected':true}, function(tab2) {
	        // alert(2);
	    });
	});
});