import Colors from "./Colors";
import PropUtil from "./PropUtil";
import Util from "./Util";

class RadialGradient {
     static ShapeEllipse = "ellipse";
     static ShapeCircle = "circle";
     static SizeFarthestCorner = "farthest-corner";
     static SizeClosestSide = "closest-side";
     static SizeClosestCorner = "closest-corner";
     static SizeFarthestSide = "farthest-corner";
     static PositionTop = "top";
     static PositionRight = "right";
     static PositionBottom = "bottom";
     static PositionLeft = "left";

     /**
      *
      * @param {*} shape "ellipse" or "circle".
      * @param {*} size "farthest-corner" or "closest-side" or "closest-corner" or "farthest-corner".
      * @param {*} position "top" or "right" or "bottom" or "left" or a percentage : "50%".
      * @param  {...any} color_stopPosition the rest of arguments in the form of [color, percentage]: ["red","50%"].
      * #### non-array arguments for `color_stopPosition` are not valid and won't count towards the gradient. <b>
      * @returns `radial-gradient(shape size at position, color_1 position_1, color_2 position_2 ... color_n position_n)`
      */
     static new(
          shape = this.ShapeEllipse,
          size = this.SizeFarthestCorner,
          position = "center",
          ...color_stopPosition
     ) {
          const sh = [this.ShapeCircle, this.ShapeEllipse].includes(shape)
               ? shape
               : this.ShapeEllipse;
          const sz = [
               this.SizeClosestCorner,
               this.SizeClosestSide,
               this.SizeFarthestCorner,
               this.SizeFarthestSide,
          ].includes(size)
               ? size
               : this.SizeFarthestCorner;
          const pt = PropUtil.isPositionProperty(
               position,
               [this.PositionBottom, this.PositionLeft, this.PositionRight, this.PositionTop],
               "center"
          );
          const validColors = [];
          for (let i = 0; i < color_stopPosition.length; i++) {
               let c = "";
               if (Colors.isValidColor(color_stopPosition[i][0])) {
                    c += color_stopPosition[i][0];
               }
               if (Util.isPercentage(color_stopPosition[i][1])) {
                    c = `${c} ${color_stopPosition[i][1]}`;
               }
               if (c.trim() !== "") {
                    validColors.push(c);
               }
          }
          return `radial-gradient(${sh} ${sz} at ${pt}, ${validColors})`;
     }
}

export default RadialGradient;
