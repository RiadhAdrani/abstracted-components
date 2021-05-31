import PropUtil from "./PropUtil";

class Padding {
     static Initial = "initial";
     static Inherit = "inherit";

     static newAll(padding) {
          return {
               top: `${padding}`,
               right: `${padding}`,
               bottom: `${padding}`,
               left: `${padding}`,
          };
     }

     static newFromTRBL(top, right, bottom, left) {
          return {
               top: `${top}`,
               right: `${right}`,
               bottom: `${bottom}`,
               left: `${left}`,
          };
     }

     static newHorizontal(padding) {
          return padding;
     }

     static newVertical(padding) {
          return padding;
     }

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isDimensionsProperty(prop, [this.Initial, this.Inherit], backup, backup2);
     }

     static checkSingleProperty(prop, backup, backup2) {
          return PropUtil.isLengthProperty(prop, [this.Initial, this.Inherit], backup, backup2);
     }
}
export default Padding;
