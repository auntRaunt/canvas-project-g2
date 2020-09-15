
var canvasSettings = {
    colorStroke: $("#stroke-color").val(),
    colorFill: $("#fill-color").val(),
    brushSize: $('#brush-size').val(),
    backgroundColor: $('#background-color').val(),
}

$('#brush-size')[0].oninput = function() {
    canvasSettings.brushSize = this.value;
}

$('#stroke-color')[0].oninput = function() {
    canvasSettings.colorStroke = this.value;
}

$('#fill-color')[0].oninput = function() {
    canvasSettings.colorFill = this.value;
}

$('#background-color')[0].oninput = function() {
    canvasSettings.backgroundColor = this.value;
    contextReal.fillStyle = canvasSettings.backgroundColor;
    contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
}





