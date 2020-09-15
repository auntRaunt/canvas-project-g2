let canvasConfig = {
  canvasArr: [],
  itemCount: 0,
  savePoint: 0,
  undo: function () {
    if (canvasConfig.itemCount > 1) {
      canvasConfig.itemCount--;
      canvasConfig.savePoint = canvasConfig.itemCount;
      contextReal.drawImage(canvasConfig.canvasArr[canvasConfig.itemCount-1], 0, 0);
      console.log(canvasConfig.itemCount);
    }
  },
  redo: function () {},
};
