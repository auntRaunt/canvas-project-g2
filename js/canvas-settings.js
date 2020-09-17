var canvasSettings = {
  colorStroke: $("#stroke-color").val(),
  colorFill: $("#fill-color").val(),
  brushSize: $("#brush-size").val(),
  backgroundColor: $("#background-color").val(),
  textsize: $("#text-size").val(),
  textfont: "Arial",
  backgroundColorSet: false,
};

$('#text-size')[0].oninput = function () {
  displayText("text-size");
  canvasSettings.textsize = this.value;
};

$('#brush-size')[0].oninput = function () {
  displayText("brush-size");
  canvasSettings.brushSize = this.value;
};

$('#stroke-color')[0].oninput = function () {
  displayText("stroke-color");
  canvasSettings.colorStroke = this.value;
};

$('#fill-color')[0].oninput = function () {
  displayText("fill-color");
  canvasSettings.colorFill = this.value;
};

$('#background-color')[0].oninput = function () {
  displayText("background-color");
  canvasSettings.backgroundColor = this.value;
  backgroundColorSet = true;
};

$("#background-color-set").click(() => {
  displayText("background-color");
  contextReal.fillStyle = canvasSettings.backgroundColor;
  contextReal.globalCompositeOperation = "destination-over";
  contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
  contextReal.globalCompositeOperation = "source-over";
});

function displayText(id) {
  let displayText = document.getElementById("display-text");
  switch (id) {
    case "drawing-line":
      displayText.textContent =
        "Drawing Line - Click and drag continuously to draw lines.";
      break;
    case "drawing-erase":
      displayText.textContent =
        "Erase - Click and drag to erase what's on the canvas. The erase color will automatically be set to the background color. ";
      break;
    case "drawing-rectangle":
      displayText.textContent =
        "Rectangle - Click and drag to draw out your rectangle. Release the mouse button to finish the drawing.";
      break;
    case "drawing-circle":
      displayText.textContent =
        "Circle - Click and drag to draw out your circle. Release the mouse button to finish the drawing.";
      break;
    case "drawing-square":
      displayText.textContent =
        "Square - Click and drag to draw out your square. Release the mouse button to finish the drawing.";
      break;
    case "drawing-triangle":
      displayText.textContent =
        "Triangle - Click and drag out to create a straight line - this straight line will represent the first side and two corners of your triangle. Release, then click and drag out again to set the third corner and subsequent two sides of your triangle. The triangle can have no fill color.";
      break;
    case "drawing-polygon":
      displayText.textContent =
        "Polygon - Click to set the first point of the polygon. The polygon lines will follow your mouse, click again to set another point of the polygon. You can set as many points of the polygon as you desire within the canvas. Finish the Polygon by clicking the starting point again - the polygon will close and become a complete shape. The polygon can have no fill color.";
      break;
    case "drawing-s-line":
      displayText.textContent =
        "Straight Line - Click and drag continuously to draw out the line. This will create a straight line from the initial point of clicking to your mouse. Release the mouse button to finish the drawing.";
      break;
    case "drawing-curve":
      displayText.textContent =
        "Curve - Click and drag out to create a straight line. Release the mouse button, then click and drag out again to create the curve in that line.";
      break;
    case "drawing-bezier":
      displayText.textContent =
        "Bezier - Click and drag out to create a straight line. Release the mouse button, then click and drag out again to create the first control point of the bezier line. Release again, then click and drag out to create the second point of the bezier line.";
      break;
    case "drawing-clear":
      displayText.textContent =
        "Clear - Click to clear the canvas, and set it as a white background.";
      break;
    case "drawing-download":
      displayText.textContent =
        "Download - Click to download the canvas as a picture.";
      break;
    case "drawing-undo":
      displayText.textContent =
        "Undo - Click to undo the last action taken on the canvas. Undo can reach up to 3 actions backwards.";
      break;
    case "drawing-redo":
      displayText.textContent =
        "Redo - Click to redo the last action taken on the canvas. Redo can reach up to 3 actions forwards.";
      break;
    case "drawing-text":
      displayText.textContent =
        "Text Box - Click to add a text box. Write in what text you’d like to add to the canvas. After you are finished, click on the canvas outside the text box to add the text box to the canvas.";
      break;
    case "brush-size":
      displayText.textContent =
        "Line Width - Move the slider to change the width of the lines on the canvas. Maximum width is 51 pixels, minimum width is 1 pixel. Line width applies to the eraser, all lines and to the outer border of all shapes.";
      break;
    case "stroke-color":
      displayText.textContent =
        "Line Color - Choose your desired line color from the palette, or write in your color values. Line color applies to all lines and to the outer border of all shapes.";
      break;
    case "fill-color":
      displayText.textContent =
        "Fill Color - Choose your desired fill color from the palette, or write in your color values. Fill color applies to the inside of basic shapes.";
      break;
    case "background-color":
      displayText.textContent =
        "Background Color - Choose your desired fill color from the palette, or write in your color values. When your color has been chosen, click the 'change background color' button. To change background color again, you must clear the screen. Changing the background color also changes the eraser color.";
      break;
    case "text-size":
      displayText.textContent =
        "Text Size - Move the slider to change the size of the text in the next text box that you place onto the canvas.";
      break;




  }
}

function displayTaskName(id) {
  let taskName, taskIcon;
  switch (id) {
    case "drawing-line":
      taskName = document.querySelector("#btn-drawing-line .taskname");
      taskIcon = document.getElementById("drawing-line");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-line .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-rectangle":
      taskName = document.querySelector("#btn-drawing-rectangle .taskname");
      taskIcon = document.getElementById("drawing-rectangle");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector(
          "#btn-drawing-rectangle .taskname"
        ).style.display = "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-curve":
      taskName = document.querySelector("#btn-drawing-curve .taskname");
      taskIcon = document.getElementById("drawing-curve");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-curve .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-triangle":
      taskName = document.querySelector("#btn-drawing-triangle .taskname");
      taskIcon = document.getElementById("drawing-triangle");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector(
          "#btn-drawing-triangle .taskname"
        ).style.display = "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-square":
      taskName = document.querySelector("#btn-drawing-square .taskname");
      taskIcon = document.getElementById("drawing-square");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-square .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-erase":
      taskName = document.querySelector("#btn-drawing-erase .taskname");
      taskIcon = document.getElementById("drawing-erase");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-erase .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-polygon":
      taskName = document.querySelector("#btn-drawing-polygon .taskname");
      taskIcon = document.getElementById("drawing-polygon");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-polygon .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-s-line":
      taskName = document.querySelector("#btn-drawing-s-line .taskname");
      taskIcon = document.getElementById("drawing-s-line");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-s-line .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-circle":
      taskName = document.querySelector("#btn-drawing-circle .taskname");
      taskIcon = document.getElementById("drawing-circle");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-circle .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-bezier":
      taskName = document.querySelector("#btn-drawing-bezier .taskname");
      taskIcon = document.getElementById("drawing-bezier");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-bezier .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
    case "drawing-text":
      taskName = document.querySelector("#btn-drawing-text .taskname");
      taskIcon = document.getElementById("drawing-text");
      taskIcon.classList.add("transparent");
      taskName.classList.add("animate__fadeIn");
      taskName.style.display = "block";
      setTimeout(() => {
        document.querySelector("#btn-drawing-text .taskname").style.display =
          "none";
        taskIcon.classList.remove("transparent");
      }, 1000);
      break;
  }
}

/*

How background-color works, for when we have to write things up.

Set background color using the color palette.

Click background-color-set to set the color.

The color is set only for whatever is behind the present shapes on the canvas.

Therefore, if a background color has previously been set, a new one cannot be set without first clearing the entire page.

We might want to put this in a seperate js file.


*/
