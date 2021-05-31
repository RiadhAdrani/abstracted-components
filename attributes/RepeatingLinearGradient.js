import Colors from "./Colors";
import Util from "./Util";

class RepeatingLinearGradient {
     /**
      *
      * @param {*} angle 0-360.  **Do not add deg**.
      * @param  {...any} color_stopPosition the rest of arguments in the form of [color, percentage]: ["red","50%"].
      * #### non-array arguments for `color_stopPosition` are not valid and won't count towards the gradient. <b>
      * @returns `repeating-linear-gradient(angle, color_1 position_1, color_2 position_2 ... color_n position_n)`
      */
     static new(angle = this.ShapeEllipse, ...color_stopPosition) {
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
          return `repeating-linear-gradient(${angle}deg,${validColors})`;
     }
}

export default RepeatingLinearGradient;
