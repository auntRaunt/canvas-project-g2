let line1 = ["if you are reading this, something has gone wronng."];
let line2 = ["if you are reading this, something has gone wronng."];

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
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(coord[0], coord[1]);
      this.contextDraft.lineTo(line1[0], line1[1]);
      this.contextDraft.stroke();
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(coord[0], coord[1]);
      this.contextDraft.lineTo(line2[0], line2[1]);
      this.contextDraft.stroke();
    } else {
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    if (this.firstLineIsDrawnTriangle) {
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
