$(() => {
  currentFunction = new DrawingLine(contextReal);
  $("#drawing-rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-rectangle") });

  $("#drawing-line").click((e) => {
    currentFunction = new DrawingLine(contextReal);
  }).hover(function () { displayText("drawing-line") });

  $("#drawing-s-line").click(() => {
    currentFunction = new DrawingStriaghtLine(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-s-line") });

  $("#drawing-curve").click((e) => {
    currentFunction = new DrawingCurve(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-curve") });

  $("#drawing-circle").click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-circle") });

  $("#drawing-square").click(() => {
    currentFunction = new DrawingSquare(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-square") });

  $("#drawing-triangle").click((e) => {
    currentFunction = new DrawingTriangle(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-triangle") });

  $("#drawing-text").click((e) => {
    currentFunction = new DrawingText(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-text") });

  $("#drawing-bezier").click((e) => {
    currentFunction = new DrawingBezier(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-bezier") });

  $("#drawing-polygon").click((e) => {
    currentFunction = new DrawingPolygon(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-polygon") });

  $("#drawing-erase").click(() => {
    currentFunction = new Erase(contextReal, contextDraft);
  }).hover(function () { displayText("drawing-erase") });

  $("#drawing-undo").click((e) => {
    if (cStep > 0) {
      cStep--;
      let canvasPic = new Image();
      canvasPic.src = cPushArray[cStep];
      contextReal.clearRect(
        0,
        0,
        contextReal.canvas.width,
        contextReal.canvas.height
      );
      canvasPic.onload = function () {
        contextReal.drawImage(canvasPic, 0, 0);
      };
    }
  }).hover(function () { displayText("drawing-undo") });

  $("#drawing-redo").click((e) => {
    if (cStep < cPushArray.length - 1) {
      cStep++;
      let canvasPic = new Image();
      canvasPic.src = cPushArray[cStep];
      canvasPic.onload = function () {
        contextReal.drawImage(canvasPic, 0, 0);
      };
    }
  }).hover(function () { displayText("drawing-redo") });

  $("#drawing-clear").click((e) => {
    canvasSettings.backgroundColor = '#ffffff';
    $('#background-color').val('#ffffff');
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
  }).hover(function () { displayText("drawing-clear") });

  $("#drawing-download").click((e) => {
    let image = canvasReal.toDataURL();
    let tempLink = document.createElement("a");
    tempLink.download = "image.png";
    tempLink.href = image;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }).hover(function () { displayText("drawing-download") });

});
