$(() => {
  $("#drawing-rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });
  $("#drawing-line").click(() => {
    currentFunction = new DrawingLine(contextReal);
    console.log(currentFunction);
  });
  $("#drawing-s-line").click(() => {
    currentFunction = new DrawingStriaghtLine(contextReal, contextDraft);
  });
  $("#drawing-curve").click(() => {
    currentFunction = new DrawingCurve(contextReal, contextDraft);
  });
  $("#drawing-circle").click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
  });
  $("#drawing-triangle").click(() => {
    currentFunction = new DrawingTriangle(contextReal, contextDraft);
  });
  $("#drawing-erase").click(() => {
    currentFunction = new Erase(contextReal, contextDraft);
  });

  $("#clear").click(() => {
    currentFunction.clear();
    // currentFunction = null;
  });
});
