import PropUtil from "./PropUtil";

class FlexWrap {
     static NoWrap = "nowrap";
     static Wrap = "wrap";
     static WrapReverse = "wrap-reverse";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [this.NoWrap, this.Wrap, this.WrapReverse, this.Initial, this.Inherit];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default FlexWrap;
