var myTextarea = document.querySelector('#student-area');
var testButton = document.querySelector('#do-test');
var reportButton = document.querySelector('#show-report');

var mirrorEditor = CodeMirror.fromTextArea(myTextarea, {
	lineNumbers: true,
	mode: "javascript",
	theme: 'monokai',
	viewportMargin: Infinity
});

// Set readOnly lines.
var endLine = mirrorEditor.lineCount();
if (endLine > 0) {
	for (var i = 0; i < endLine; i++) {
		if (mirrorEditor.getLine(i) !== '') {
			mirrorEditor.markText(
				{line: i, ch: 0}, 
				{line: i+1, ch: 0}, 
				{
					readOnly: 'nocursor',
					className: 'disabled-text'
				}
			);
		}
	}
}

testButton.addEventListener('click', function(){
	doTest();
});

reportButton.addEventListener('click', function(){
	$('.qunit-panel').slideToggle();
});

