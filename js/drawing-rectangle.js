/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "#f44";
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.lineJoin = "round"; // lines 19-23 are added for canvas-settings.js
    this.contextDraft.lineCap = "round";
    this.contextDraft.lineWidth = canvasSettings.brushSize;
    this.contextDraft.fillStyle = canvasSettings.colorFill;
    this.contextDraft.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextDraft.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextReal.lineJoin = "round"; // lines 35-39 are added for canvas-settings.js
    this.contextReal.lineCap = "round";
    this.contextReal.lineWidth = canvasSettings.brushSize;
    this.contextReal.fillStyle = canvasSettings.colorFill;
    this.contextReal.strokeStyle = canvasSettings.colorStroke;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextReal.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
