class DrawingText extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onMouseMove(coord, event) {
    this.contextDraft.beginPath();
    this.contextDraft.rect(this.origX, this.origY, 500, 100);
    this.contextDraft.stroke();
  }
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.rect(this.origX, this.origY, 500, 100);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
