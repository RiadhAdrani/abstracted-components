import PropUtil from "./PropUtil";

class BackgroundPosition {
     static LeftTop = "left top";
     static LeftCenter = "left center";
     static LeftBottom = "left bottom";
     static RightTop = "right top";
     static RightCenter = "right center";
     static RightBottom = "right bottom";
     static CenterTop = "center top";
     static CenterCenter = "center center";
     static CenterBottom = "center bottom";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.LeftTop,
          this.LeftCenter,
          this.LeftBottom,
          this.RightTop,
          this.RightBottom,
          this.RightCenter,
          this.CenterBottom,
          this.CenterCenter,
          this.CenterTop,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isPositionProperty(prop, this.valuesList, backup, backup2);
     }
}
export default BackgroundPosition;
