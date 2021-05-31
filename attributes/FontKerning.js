import PropUtil from "./PropUtil";

class FontKerning {
     static Auto = "auto";
     static Normal = "normal";
     static None = "none";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, [this.Auto, this.Normal, this.None], backup, backup2);
     }
}

export default FontKerning;
