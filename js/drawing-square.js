class DrawingSquare extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.lineCap = "round";
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextDraft.fillStyle = canvasSettings.colorFill;
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[0] - this.origX,
    );
    this.contextDraft.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[0] - this.origX,
    );
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextReal.lineCap = "round";
    this.contextReal.lineWidth = canvasSettings.brushSize;
    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[0] - this.origX,
    );
    this.contextReal.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[0] - this.origX,
    );
    cPush();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
