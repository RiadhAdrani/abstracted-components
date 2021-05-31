import Util from "./Util";
import Colors from "./Colors";

class LinearGradient {
     static ToRight = "to right";
     static ToLeft = "to left";
     static ToTop = "to top";
     static ToBottom = "to bottom";

     /**
      * Return a valid linear gradient for the backgroundImage property.
      * @param {number} angleOrDirection string of an angle followed by (deg) keyword, example: `45deg`.
      * A direction from one of these :`to top`, `to right`, `to bottom` or `to left` could be an argument.
      * @param  {...any} colors: expanded arguments for the gradient colors.
      * @returns `linear-gradient(angleOrDirection, color1, color2, color3 ...)`
      */
     static new(angleOrDirection, ...colors) {
          const validColors = [];
          for (let i = 0; i < colors.length; i++) {
               if (Colors.isValidColor(colors[i])) {
                    validColors.push(colors[i]);
               }
          }
          const x =
               Util.isDegree(angleOrDirection) || Util.isDirection(angleOrDirection)
                    ? angleOrDirection
                    : "0deg";
          return `linear-gradient(${x}, ${validColors})`;
     }

     static newLinearGradientToRight(...colors) {
          return this.new("to right", ...colors);
     }

     static newLinearGradientToLeft(...colors) {
          return this.new("to left", ...colors);
     }

     static newLinearGradientToBottom(...colors) {
          return this.new("to bottom", ...colors);
     }

     static newLinearGradientToTop(...colors) {
          return this.new("to top", ...colors);
     }

     static newLinearGradientFromAngle(angleDeg, ...colors) {
          return this.new(`${angleDeg}deg`, ...colors);
     }
}

export default LinearGradient;
