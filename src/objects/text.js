class Text extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text, style){
    // default values
    if(!style){
      style = {};
      style.fontFamily = "Arial";
      style.fontSize = 30;
    }
    if(!("fontFamily" in style)){
      style.fontFamily = "Arial";
    }
    if(!("fontSize" in style)){
      style.fontSize = 30;
    }
    super(scene, x, y, text, style);
    this.scrollFactorX = 0;
    this.scrollFactorY = 0;
    this.setDepth(10);
    scene.add.existing(this);
  }
}

export default Text;