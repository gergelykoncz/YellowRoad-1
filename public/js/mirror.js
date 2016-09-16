var myTextarea = document.querySelector('#student-area');
var testButton = document.querySelector('#do-test');
var reportButton = document.querySelector('#show-report');

var mirrorEditor = CodeMirror.fromTextArea(myTextarea, {
	lineNumbers: true,
	mode: "javascript",
	theme: 'monokai',
	viewportMargin: Infinity
});

testButton.addEventListener('click', function(){
	doTest();
});

reportButton.addEventListener('click', function(){
	$('.qunit-panel').slideToggle();
});

