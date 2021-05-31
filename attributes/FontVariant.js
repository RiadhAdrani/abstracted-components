import PropUtil from "./PropUtil";

class FontVariant {
     static Normal = "normal";
     static SmallCaps = "small-caps";
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.Normal, this.SmallCaps, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default FontVariant;
