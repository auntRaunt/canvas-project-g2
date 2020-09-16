class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.movingCount = 0;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = canvasSettings.colorStroke; 
    this.contextDraft.strokeStyle = canvasSettings.colorStroke; 
    this.contextReal.lineCap = "round"; 
    this.contextDraft.lineCap = "round"; 
    this.contextReal.lineJoin = "round";
    this.contextReal.lineWidth = canvasSettings.brushSize; 
    this.contextDraft.lineWidth = canvasSettings.brushSize; 
    this.contextReal.fillStyle = canvasSettings.colorFill; 

    //action for the First click
    if (this.movingCount === 0){
        this.firstOrigX = coord[0];
        this.firstOrigY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.firstOrigX,this.firstOrigY);
    }
    dragging = true;
  }
  onMouseUp(coord, event) {
    if (this.movingCount === 0){
        this.newX = coord[0];
        this.newY = coord[1];
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.toDrawReal(this.newX,this.newY,coord[0],coord[1]);
        this.movingCount = 1;

    } else if (this.movingCount === 1){
        if (Math.pow((this.firstOrigX - coord[0]),2)<700 && Math.pow((this.firstOrigY - coord[1]),2)<2000){
            dragging = false;
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.lineTo(this.firstOrigX,this.firstOrigY);
            this.contextReal.stroke();
            this.polygonFillTest();
            this.movingCount = 0;
        } else {
            this.newX = coord[0];
            this.newY = coord[1];
            dragging = true;
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.toDrawReal(this.newX,this.newY,coord[0],coord[1]);
               
        }
    }
  }
  polygonFillTest(){
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.pointsArr[0].x,this.pointsArr[0].y);
    this.contextReal.fill();
    this.contextReal.stroke();  
  }

  onDragging(coord, event) {
    if (this.movingCount === 0){
        this.toDrawDraft(this.firstOrigX,this.firstOrigY,coord[0],coord[1]);
    } else if (this.movingCount === 1){
        this.toDrawDraft(this.newX,this.newY,coord[0],coord[1]);
    }
  }
  toDrawDraft(fromX,fromY,toX,toY){
    this.contextDraft.closePath();
    this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    this.contextDraft.beginPath(); 
    this.contextDraft.moveTo(fromX,fromY);
    this.contextDraft.lineTo(toX,toY);
    this.contextDraft.stroke();
}
  toDrawReal(fromX,fromY,toX,toY){
    this.contextReal.lineTo(fromX,fromY);
    this.contextReal.stroke();
    this.contextReal.closePath();
    this.contextReal.beginPath();
    this.contextReal.moveTo(toX,toY);
}
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
