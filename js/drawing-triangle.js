let line1 = ["if you are reading this, something has gone wrong."];
let line2 = ["if you are reading this, something has gone wrong."];

class DrawingTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.tempContextDraft = this.contextDraft;
    this.firstLineIsDrawnTriangle = false;
  }

  onMouseDown(coord, event) {
    if (this.firstLineIsDrawnTriangle) {
    } else {
      this.origX = coord[0];
      this.origY = coord[1];
    }
  }

  onDragging(coord, event) {
    if (this.firstLineIsDrawnTriangle) {
      this.contextDraft.lineJoin = "round"; 
      this.contextDraft.lineCap = "round";
      this.contextDraft.lineWidth = canvasSettings.brushSize;
      this.contextDraft.fillStyle = canvasSettings.colorFill;
      this.contextDraft.strokeStyle = canvasSettings.colorStroke;
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(coord[0], coord[1]);
      this.contextDraft.lineTo(line1[0], line1[1]);
      this.contextDraft.stroke();
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(coord[0], coord[1]);
      this.contextDraft.lineTo(line2[0], line2[1]);
      this.contextDraft.stroke();
      this.contextDraft.fill();
    } else {
      this.contextDraft.lineJoin = "round"; 
      this.contextDraft.lineCap = "round";
      this.contextDraft.lineWidth = canvasSettings.brushSize;
      this.contextDraft.fillStyle = canvasSettings.colorFill;
      this.contextDraft.strokeStyle = canvasSettings.colorStroke;
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
      this.contextDraft.fill()
    }
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    if (this.firstLineIsDrawnTriangle) {
      this.contextReal.lineJoin = "round";
      this.contextReal.lineCap = "round";
      this.contextReal.lineWidth = canvasSettings.brushSize;
      this.contextReal.fillStyle = canvasSettings.colorFill;
      this.contextReal.strokeStyle = canvasSettings.colorStroke;
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      this.contextReal.lineTo(line1[0], line1[1]);
      this.contextReal.stroke();
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0], coord[1]);
      this.contextReal.lineTo(line2[0], line2[1]);
      this.contextReal.stroke();
      this.firstLineIsDrawnTriangle = false;
    } else {
      this.contextReal.lineJoin = "round";
      this.contextReal.lineCap = "round";
      this.contextReal.lineWidth = canvasSettings.brushSize;
      this.contextReal.fillStyle = canvasSettings.colorFill;
      this.contextReal.strokeStyle = canvasSettings.colorStroke;
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.lineTo(coord[0], coord[1]);
      line1 = [this.origX, this.origY];
      line2 = [coord[0], coord[1]];
      this.contextReal.stroke();
      this.firstLineIsDrawnTriangle = true;
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
