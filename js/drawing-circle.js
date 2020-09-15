class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(coords, event) {
    this.origX = coords[0];
    this.origY = coords[1];
  }
  onDragging(coords, event) {
    this.contextDraft.beginPath();
    this.radiusX = parseFloat(coords[0]) - parseFloat(this.origX);
    this.radiusY = parseFloat(coords[1]) - parseFloat(this.origY);
    this.radius = Math.sqrt(
      this.radiusX * this.radiusX + this.radiusY * this.radiusY
    );
    this.contextDraft.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI);
    this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
    this.contextDraft.stroke();
  }
  onMouseMove() {}
  onMouseUp(coords, event) {
    this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
    this.contextReal.beginPath();
    this.radiusX = parseFloat(coords[0]) - parseFloat(this.origX);
    this.radiusY = parseFloat(coords[1]) - parseFloat(this.origY);
    this.radius = Math.sqrt(
      this.radiusX * this.radiusX + this.radiusY * this.radiusY
    );
    this.contextReal.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI);
    this.contextReal.stroke();
    cPush();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
