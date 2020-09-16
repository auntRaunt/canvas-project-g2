/*

start, cp1, cp2, end

So, Bezier relies on 3 click events instead of 2 listed here, and has 2 control points instead of just 1.

Instead of firstLineIsDrawn, institute a clickCounter which does the initial line at 0, the CP1 at 1, and the CP2 and 2. 



On click 0 - create a straight line
On click 1 - create a Bezier line - CP2 is set to the halfway point of the two first points.
On click 2 - create a Bezier line with the saved attributes from earlier



*/

function midpoint(a, b) {
    let midpointArray = [];
    let x = parseInt(a);
    let y = parseInt(b);
    midpointArray.push(x);
    midpointArray.push(y);
    console.log(x);
    console.log(y);
    midpointArray.sort();
    let z = (Math.abs(midpointArray[1] - midpointArray[0])) / 2;
    console.log(z);
    console.log(midpointArray[0] + z);
    return midpointArray[0] + z;
}

let endpoint = ["if you are reading this, something has gone wrong."];
let cp2 = ["if you are reading this, something has gone wrong."];

class DrawingBezier extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickCounter = 0;
    }

    onMouseDown(coord, event) {
        if (this.clickCounter == 0) {
            this.origX = coord[0];
            this.origY = coord[1];
        }
    }

    onDragging(coord, event) {
        if (this.clickCounter == 0) {

            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineCap = "round";
            this.contextDraft.strokeStyle = canvasSettings.colorStroke;
            this.contextDraft.lineWidth = canvasSettings.brushSize;
            this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.stroke();

        } else if (this.clickCounter == 1) {

            this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineCap = "round";
            this.contextDraft.strokeStyle = canvasSettings.colorStroke;
            this.contextDraft.lineWidth = canvasSettings.brushSize;

            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.bezierCurveTo(midpoint(this.origX, endpoint[0]), midpoint(this.origY, endpoint[1]), coord[0], coord[1], endpoint[0], endpoint[1])
            this.contextDraft.stroke();

            this.contextDraft.beginPath();

        }

        else if (this.clickCounter == 2) {

            this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineCap = "round";
            this.contextDraft.strokeStyle = canvasSettings.colorStroke;
            this.contextDraft.lineWidth = canvasSettings.brushSize;

            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.bezierCurveTo(coord[0], coord[1], cp2[0], cp2[1], endpoint[0], endpoint[1]);
            this.contextDraft.stroke();
        }
    }

    onMouseMove() { }
    onMouseUp(coord, event) {
        if (this.clickCounter == 0) {

            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineCap = "round";
            this.contextDraft.strokeStyle = canvasSettings.colorStroke;
            this.contextDraft.lineWidth = canvasSettings.brushSize;

            this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.lineTo(coord[0], coord[1]);
            endpoint = [coord[0], coord[1]];
            this.contextDraft.stroke();
            this.clickCounter++

        } else if (this.clickCounter == 1) {

            this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineCap = "round";
            this.contextDraft.strokeStyle = canvasSettings.colorStroke;
            this.contextDraft.lineWidth = canvasSettings.brushSize;

            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.bezierCurveTo(midpoint(this.origX, endpoint[0]), midpoint(this.origY, endpoint[1]), coord[0], coord[1], endpoint[0], endpoint[1])
            cp2 = [coord[0], coord[1]];
            this.contextDraft.stroke();
            this.clickCounter++
        }

        else if (this.clickCounter == 2) {

            this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
            this.contextReal.lineJoin = "round";
            this.contextReal.lineCap = "round";
            this.contextReal.strokeStyle = canvasSettings.colorStroke;
            this.contextReal.lineWidth = canvasSettings.brushSize;

            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.bezierCurveTo(coord[0], coord[1], cp2[0], cp2[1], endpoint[0], endpoint[1]);
            this.contextReal.stroke();
            this.clickCounter = 0;
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }
}


