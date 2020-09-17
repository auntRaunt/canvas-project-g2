$(() => {
  currentFunction = new DrawingLine(contextReal);
  $("#drawing-rectangle")
    .click(() => {
      currentFunction = new DrawingRectangle(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-rectangle");
      displayTaskName(e.target.id);
    });

  $("#drawing-line")
    .click((e) => {
      currentFunction = new DrawingLine(contextReal);
    })
    .hover(function (e) {
      displayText("drawing-line");
    });

  $("#drawing-s-line")
    .click(() => {
      currentFunction = new DrawingStriaghtLine(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-s-line");
      displayTaskName(e.target.id);
    });

  $("#drawing-curve")
    .click((e) => {
      currentFunction = new DrawingCurve(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-curve");
      displayTaskName(e.target.id);
    });

  $("#drawing-circle")
    .click(() => {
      currentFunction = new DrawingCircle(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-circle");
      displayTaskName(e.target.id);
    });

  $("#drawing-square")
    .click(() => {
      currentFunction = new DrawingSquare(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-square");
      displayTaskName(e.target.id);
    });

  $("#drawing-triangle")
    .click((e) => {
      currentFunction = new DrawingTriangle(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-triangle");
      displayTaskName(e.target.id);
    });

  $("#drawing-text")
    .click((e) => {
      currentFunction = new DrawingText(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-text");
      displayTaskName(e.target.id);
    });

  $("#drawing-bezier")
    .click((e) => {
      currentFunction = new DrawingBezier(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-bezier");
      displayTaskName(e.target.id);
    });

  $("#drawing-polygon")
    .click((e) => {
      currentFunction = new DrawingPolygon(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-polygon");
      displayTaskName(e.target.id);
    });

  $("#drawing-erase")
    .click(() => {
      currentFunction = new Erase(contextReal, contextDraft);
    })
    .hover(function (e) {
      displayText("drawing-erase");
      displayTaskName(e.target.id);
    });

  $("#drawing-undo")
    .click((e) => {
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
    })
    .hover(function () {
      displayText("drawing-undo");
    });

  $("#drawing-redo")
    .click((e) => {
      if (cStep < cPushArray.length - 1) {
        cStep++;
        let canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () {
          contextReal.drawImage(canvasPic, 0, 0);
        };
      }
    })
    .hover(function () {
      displayText("drawing-redo");
    });

  $("#drawing-clear")
    .click((e) => {
      canvasSettings.backgroundColor = "#ffffff";
      $("#background-color").val("#ffffff");
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
    })
    .hover(function () {
      displayText("drawing-clear");
    });

  $("#drawing-download")
    .click((e) => {
      let image = canvasReal.toDataURL();
      let tempLink = document.createElement("a");
      tempLink.download = "image.png";
      tempLink.href = image;
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    })
    .hover(function () {
      displayText("drawing-download");
    });
});


//hovering text animation
$("#btn-drawing-line").hover(() => {
  displayTaskName("drawing-line");
});

$("#btn-drawing-rectangle").hover(() => {
  displayTaskName("drawing-rectangle");
});

$("#btn-drawing-curve").hover(() => {
  displayTaskName("drawing-curve");
});

$("#btn-drawing-triangle").hover(() => {
  displayTaskName("drawing-triangle");
});

$("#btn-drawing-square").hover(() => {
  displayTaskName("drawing-square");
});

$("#btn-drawing-erase").hover(() => {
  displayTaskName("drawing-erase");
});

$("#btn-drawing-polygon").hover(() => {
  displayTaskName("drawing-polygon");
});

$("#btn-drawing-s-line").hover(() => {
  displayTaskName("drawing-s-line");
});

$("#btn-drawing-circle").hover(() => {
  displayTaskName("drawing-circle");
});

$("#btn-drawing-bezier").hover(() => {
  displayTaskName("drawing-bezier");
});

$("#btn-drawing-text").hover(() => {
  displayTaskName("drawing-text");
});







