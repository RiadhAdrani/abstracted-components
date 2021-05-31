import Default from "./Default";
import PropUtil from "./PropUtil";

class Clip extends Default {
     static newRectangle = (top, right, bottom, left) => {
          return `rect(${top}px,${right}px,${bottom}px,${left}px)`;
     };

     static checkProperty(prop, backup, backup2) {
          const reg = /^rect(\((\d+)((.)(\d+))?(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%)(,((\d+)((.)(\d+))?(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%))){3}\))$/;
          if (reg.test(prop)) return prop;
          if (reg.test(backup)) return backup;
          if (reg.test(backup2)) return backup2;

          return PropUtil.isProperty(prop, this.defaultValuesList, backup, backup2);
     }
}

export default Clip;
