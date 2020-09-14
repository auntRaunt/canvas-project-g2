class DrawingTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(coords, event) {
      
  }
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
  drawDraft(x, y) {
    this.contextDraft.lineTo(x, y);
    this.contextDraft.moveTo(x, y);
    this.contextDraft.closePath();
    this.contextDraft.stroke();
  }
  drawReal(x, y) {
    this.contextReal.lineTo(x, y);
    this.contextReal.moveTo(x, y);
    this.contextReal.closePath();
    this.contextReal.stroke();
  }
}
