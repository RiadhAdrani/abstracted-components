import PropUtil from "./PropUtil";

class PageBreakInside {
     static Auto = "auto";
     static Avoid = "avoid";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [this.Auto, this.Avoid, this.Initial, this.Inherit];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default PageBreakInside;
