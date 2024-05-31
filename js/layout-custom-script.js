$(document).ready(function () {
	var filePath = $('.breadcrumb > li:first-child > a').attr('href');
	if (filePath) {
		filePath = filePath.replace('index-en.html', '../index.html');
		$('.breadcrumb > li:first-child > a').attr('href', filePath);
	}
});

$(document).ready(function () {
    setWelcomeText();
    $(document).ajaxComplete(function () {
    setWelcomeText();
    });
});

function setWelcomeText(){
    for (var key in welcomeTextDict) {
        var element = $("header.portal-header[data-portal-language=" + key +"] h1");
        element.text(welcomeTextDict[key])
    }
}
var welcomeTextDict = { "en" : "Rhapsody Integration Engine"};