import Default from "./Default";
import PropUtil from "./PropUtil";

class TransformOrigin extends Default {
     static originRegex = /(left|center|right|((-)?(\d+)(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%)?))( )(top|center|bottom|((-)?(\d+)(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%)?))/;

     static checkProperty(prop, backup, backup2) {
          if (this.originRegex.test(prop)) return prop;
          if (this.originRegex.test(backup)) return backup;
          if (this.originRegex.test(backup2)) return backup2;
          return PropUtil.isProperty(prop, this.defaultValuesList, backup, backup2);
     }
}

export default TransformOrigin;
