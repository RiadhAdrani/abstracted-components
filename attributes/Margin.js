import PropUtil from "./PropUtil";

class Margin {
     static Initial = "initial";
     static Inherit = "inherit";

     static newAll(margin) {
          return {
               top: `${margin}`,
               right: `${margin}`,
               bottom: `${margin}`,
               left: `${margin}`,
          };
     }

     static newFromTRBL({ top, right, bottom, left }) {
          return {
               top: `${top}`,
               right: `${right}`,
               bottom: `${bottom}`,
               left: `${left}`,
          };
     }

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isDimensionsProperty(prop, [this.Initial, this.Inherit], backup, backup2);
     }

     static checkSingleProperty(prop, backup, backup2) {
          return PropUtil.isLengthProperty(prop, [this.Initial, this.Inherit], backup, backup2);
     }
}
export default Margin;
