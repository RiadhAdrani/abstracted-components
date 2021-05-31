import PropUtil from "./PropUtil";

class ColumnSpan {
     static None = "none";
     static All = "all";
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.None, this.All, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default ColumnSpan;
