import Default from "./Default";
import PropUtil from "./PropUtil";

class BorderRadius extends Default {
     static newAll(radius) {
          return {
               topRight: `${radius}`,
               topLeft: `${radius}`,
               bottomRight: `${radius}`,
               bottomLeft: `${radius}`,
          };
     }

     static newFromTRBL({ topRight, bottomRight, bottomLeft, topLeft }) {
          return {
               topRight: `${topRight}`,
               topLeft: `${topLeft}`,
               bottomRight: `${bottomRight}`,
               bottomLeft: `${bottomLeft}`,
          };
     }

     static checkProperty(prop, backup = this.Initial, backup2 = this.Initial) {
          return PropUtil.isLengthProperty(prop, this.defaultValuesList, backup, backup2);
     }
}

export default BorderRadius;
