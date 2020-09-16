
var canvasSettings = {
    colorStroke: $("#stroke-color").val(),
    colorFill: $("#fill-color").val(),
    brushSize: $('#brush-size').val(),
    backgroundColor: $('#background-color').val(),
    textsize: $('#text-size').val(),
    textfont: "Arial",
}

backgroundColorSet = false,

$('#text-size')[0].oninput = function() {
    canvasSettings.textsize = this.value;
}

$('#brush-size')[0].oninput = function () {
        canvasSettings.brushSize = this.value;
}

$('#stroke-color')[0].oninput = function () {
    canvasSettings.colorStroke = this.value;
}

$('#fill-color')[0].oninput = function () {
    canvasSettings.colorFill = this.value;
}

$('#background-color')[0].oninput = function () {
    canvasSettings.backgroundColor = this.value;
    backgroundColorSet = true;
}

$("#background-color-set").click(() => {
    contextReal.fillStyle = canvasSettings.backgroundColor;
    contextReal.globalCompositeOperation = 'destination-over';
    contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
    contextReal.globalCompositeOperation = 'source-over';
});


/*

How background-color works, for when we have to write things up.

Set background color using the color palette.

Click background-color-set to set the color.

The color is set only for whatever is behind the present shapes on the canvas.

Therefore, if a background color has previously been set, a new one cannot be set without first clearing the entire page.

We might want to put this in a seperate js file.


*/








