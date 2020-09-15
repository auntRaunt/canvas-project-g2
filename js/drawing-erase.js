/**********************************************
 * Eraser
 * ==================================
 ***********************************************/
class Erase extends PaintFunction {
  // This class extends the PaintFunction class
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  /*
    For now, everything is the same as the pen feature. 
    The Eraser becomes different when background colors are implemented, as it has to get the color of the new background, and automatically switch to that.
    */

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.context.strokeStyle = "#ffffff";
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.lineWidth = canvasSettings.brushSize;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() { }
  onMouseUp() { }
  onMouseLeave() { }
  onMouseEnter() { }

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
