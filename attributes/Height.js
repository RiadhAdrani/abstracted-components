import PropUtil from "./PropUtil";

class Height {
     static Auto = "auto";
     static Initial = "initial";
     static Inherit = "inherit";
     static FitContent = "fit-content";
     static MaxContent = "max-content";

     static checkProperty(prop, backup, backup2 = this.Initial) {
          return PropUtil.isLengthProperty(
               prop,
               [this.Auto, this.Inherit, this.Initial, this.FitContent, this.MaxContent],
               backup,
               backup2
          );
     }
}

export default Height;
