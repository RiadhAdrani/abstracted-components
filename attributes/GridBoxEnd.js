import PropUtil from "./PropUtil";

class GridBoxEnd {
     static Auto = "auto";

     static spanXRegEx = /^span (\d+)$/;

     static lineRegEx = /^(\d+)$/;

     static checkProperty(prop, backup, backup2) {
          if (this.spanXRegEx.test(prop) || this.lineRegEx.test(prop)) return prop;
          if (this.spanXRegEx.test(backup) || this.lineRegEx.test(backup)) return backup;
          if (this.spanXRegEx.test(backup2) || this.lineRegEx.test(backup2)) return backup2;
          return PropUtil.isProperty(prop, [this.Auto], backup, backup2);
     }

     static newSpanX(x) {
          return this.spanXRegEx.test(x) ? `span ${x}` : `span 1`;
     }

     static newCrossLine(x) {
          return this.lineRegEx.test(x) ? `${x}` : `1`;
     }
}

export default GridBoxEnd;
