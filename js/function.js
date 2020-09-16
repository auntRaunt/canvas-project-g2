$(() => {
  currentFunction = new DrawingLine(contextReal);
  $("#drawing-rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });
  $("#drawing-line").click((e) => {
    let id = e.target.id;
    displayText(id);
    currentFunction = new DrawingLine(contextReal);
  });
  $("#drawing-s-line").click(() => {
    currentFunction = new DrawingStriaghtLine(contextReal, contextDraft);
  });
  $("#drawing-curve").click((e) => {
    let id = e.target.id;
    displayText(id);
    currentFunction = new DrawingCurve(contextReal, contextDraft);
  });
  $("#drawing-circle").click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
  });
  $("#drawing-square").click(() => {
    currentFunction = new DrawingSquare(contextReal, contextDraft);
  });
  $("#drawing-triangle").click((e) => {
    let id = e.target.id;
    displayText(id);
    currentFunction = new DrawingTriangle(contextReal, contextDraft);
  });
  $("#drawing-text").click((e) => {
    let id = e.target.id;
    displayText(id);
    currentFunction = new DrawingText(contextReal, contextDraft);
  });
  $("#drawing-bezier").click((e) => {
    let id = e.target.id;
    displayText(id);
    currentFunction = new DrawingBezier(contextReal, contextDraft);
  });
  $("#drawing-polygon").click((e) => {
    let id = e.target.id;
    displayText(id);
    currentFunction = new DrawingPolygon(contextReal, contextDraft);
  });
  $("#drawing-erase").click(() => {
    currentFunction = new Erase(contextReal, contextDraft);
  });
  $("#drawing-undo").click((e) => {
    let id = e.target.id;
    displayText(id);
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
  });
  $("#drawing-redo").click((e) => {
    let id = e.target.id;
    displayText(id);
    if (cStep < cPushArray.length - 1) {
      cStep++;
      let canvasPic = new Image();
      canvasPic.src = cPushArray[cStep];
      canvasPic.onload = function () {
        contextReal.drawImage(canvasPic, 0, 0);
      };
    }
  });
  $("#drawing-clear").click((e) => {
    let id = e.target.id;
    displayText(id);
    canvasSettings.backgroundColor = '#ffffff';
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
  });
  $("#drawing-download").click((e) => {
    let id = e.target.id;
    displayText(id);
    let image = canvasReal.toDataURL();
    let tempLink = document.createElement("a");
    tempLink.download = "image.png";
    tempLink.href = image;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  });
});
