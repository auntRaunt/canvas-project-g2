let canvasConfig = {
  undoObject: {
    actionCount: 0,
    states: [],
    savePoint: 0,
    undoAction: function () {
      if (canvasConfig.undoObject.actionCount > 1) {
        canvasConfig.undoObject.actionCount--;
        canvasConfig.undoObject.savePoint = canvasConfig.undoObject.actionCount;
        contextReal.drawImage(
          canvasConfig.undoObject.states[
            canvasConfig.undoObject.actionCount - 1
          ],
          0,
          0
        );
      }
    },
    redoAction: function () {
      if (
        canvasConfig.undoObject.actionCount ==
          canvasConfig.undoObject.savePoint &&
        canvasConfig.undoObject.actionCount <
          canvasConfig.undoObject.states.length
      ) {
        canvasConfig.undoObject.actionCount++;
        canvasConfig.undoObject.savePoint++;
        contextReal.drawImage(
          canvasConfig.undoObject.states[
            canvasConfig.undoObject.actionCount - 1
          ],
          0,
          0
        );
      } else if (
        canvasConfig.undoObject.actionCount != canvasConfig.undoObject.savePoint
      ) {
        canvasConfig.undoObject.states.splice(
          canvasConfig.undoObject.actionCount
        );
        canvasConfig.undoObject.savePoint = canvasConfig.undoObject.actionCount;
      }
    },
  },
  // canvasArr: [],
  // itemCount: 0,
  // savePoint: 0,
  // img: document.getElementById("drawing-rectangle"),
  // undo: function () {
  //   if (this.itemCount > 1) {
  //     this.itemCount--;
  //     this.savePoint = this.itemCount;
  //     // console.log(this.canvasArr[this.canvasArr.length - 1]);
  //     let that = this;
  //     document.getElementById("drawing-rectangle").onload = function () {
  //       contextReal.drawImage(document.getElementById("drawing-rectangle"), 0, 0);
  //       console.log('hi?')
  //     };
  //     // contextReal.drawImage(this.canvasArr[this.itemCount - 1], 0, 0);
  //     // contextDraft.drawImage(this.canvasArr[this.itemCount - 1], 0, 0);
  //     // console.log(this.itemCount);
  //   }
  // },
  // redo: function () {},
};
