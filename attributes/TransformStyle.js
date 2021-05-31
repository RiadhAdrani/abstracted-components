import Default from "./Default";
import PropUtil from "./PropUtil";

class TransformStyle extends Default {
     static Flat = "flat";
     static Preserve3D = "preserve-3d";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [...this.defaultValuesList, this.Flat, this.Preserve3D],
               backup,
               backup2
          );
     }
}

export default TransformStyle;
