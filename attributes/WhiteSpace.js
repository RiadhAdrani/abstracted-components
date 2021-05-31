import PropUtil from "./PropUtil";

class WhiteSpace {
     static Normal = "normal";
     static Nowrap = "nowrap";
     static Pre = "pre";
     static PreLine = "pre-line";
     static PreWrap = "pre-wrap";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Normal,
          this.Nowrap,
          this.Pre,
          this.PreLine,
          this.PreWrap,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default WhiteSpace;
