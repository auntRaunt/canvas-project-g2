class DrawingText extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.fontWeight = 600;
    this.fontSize = 35;
    this.fontStyle = "Arial";
    this.fillStyle = "orange";
    this.clickNumber = 0;
  }

  onMouseUp(coord, event) {
    if (this.clickNumber !== 1) {
      //Make the input box appear on the clicked area
      $("#textInput").css({
        display: "block",
        transform:
          "translateY(" + coord[1] + "px)translateX(" + coord[0] + "px)",
        padding: "0",
      });

      this.origX = coord[0];
      this.origY = coord[1];
      var textContent = textInput.value;
      textInput.style["z-index"] = 1;
      textInput.value = "";

      this.contextDraft.fillText(textContent, this.origX, this.origY);
      this.clickNumber++;
    } else if (this.clickNumber === 1) {
      $("#textInput").css({ display: "none" });

      this.contextReal.strokeStyle = "white";
      this.contextReal.fillStyle = "orange";
      this.contextReal.lineWidth = 10;

      var textContent = textInput.value;
      textInput.style["z-index"] = 6;
      textInput.value = "";

      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.fillText(
        textContent,
        this.origX,
        this.origY + 35 * 1.05
      );
      this.clickNumber = 0;
    }
  }
  onMouseDown() {}
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
