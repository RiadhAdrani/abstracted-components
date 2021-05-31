import PropUtil from "./PropUtil";

class LetterSpacing {
     static Normal = "normal";
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isLengthProperty(
               prop,
               [this.Normal, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default LetterSpacing;
