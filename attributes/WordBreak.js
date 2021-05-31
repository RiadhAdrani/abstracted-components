import PropUtil from "./PropUtil";

class WordBreak {
     static Normal = "normal";
     static BreakAll = "break-all";
     static KeepAll = "keep-all";
     static BreakWord = "break-word";
     static Initial = "initial";
     static Inherit = "inherti";

     static valuesList = [
          this.Normal,
          this.BreakAll,
          this.KeepAll,
          this.BreakWord,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default WordBreak;
