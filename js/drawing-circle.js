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
    this.contextDraft.lineJoin = "round"; 
    this.contextDraft.lineCap = "round";
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextDraft.fillStyle = canvasSettings.colorFill;
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.beginPath();
    this.radiusX = parseFloat(coords[0]) - parseFloat(this.origX);
    this.radiusY = parseFloat(coords[1]) - parseFloat(this.origY);
    this.radius = Math.sqrt(
      this.radiusX * this.radiusX + this.radiusY * this.radiusY
    );
    this.contextDraft.arc(this.origX, this.origY, this.radius, 0, 2 * Math.PI);
    this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
    this.contextDraft.stroke();
    this.contextDraft.fill();
  }
  onMouseMove() {}
  onMouseUp(coords, event) {
    this.contextReal.lineJoin = "round"; 
    this.contextReal.lineCap = "round";
    this.contextReal.lineWidth = canvasSettings.brushSize;
    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
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
