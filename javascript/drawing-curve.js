class DrawingCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.tempContextDraft = this.contextDraft;
    this.firstLineIsDrawn = false;
  }

  onMouseDown(coord, event) {
    //ctx.quadraticCurveTo(cp1x,cp1y,x1,y1)

    if (this.firstLineIsDrawn) {
    } else {
      //1.
      this.origX = coord[0];
      this.origY = coord[1];
    }
  }

  onDragging(coord, event) {
    if (this.firstLineIsDrawn) {
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      // this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(
        coord[0],
        coord[1],
        this.endX,
        this.endY
      );
      this.contextDraft.stroke();
    } else {
      //2.
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    if (this.firstLineIsDrawn) {
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.quadraticCurveTo(
        coord[0],
        coord[1],
        this.endX,
        this.endY
      );
      this.contextReal.stroke();
      this.firstLineIsDrawn = false;
    } else {
      this.endX = coord[0];
      this.endY = coord[1];
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(this.endX, this.endY);
      this.contextDraft.stroke();
      this.firstLineIsDrawn = true;
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
