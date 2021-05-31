import PropUtil from "./PropUtil";

class WritingMode {
     static HorizontalTB = "horizontal-tb";
     static VerticalRL = "vertical-rl";
     static VerticalLR = "vertical-lr";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.HorizontalTB, this.VerticalLR, this.VerticalRL],
               backup,
               backup2
          );
     }
}

export default WritingMode;
