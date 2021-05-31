import PropUtil from "./PropUtil";

class ListStyleType {
     static Disc = "disc";
     static Armenian = "armenian";
     static Circle = "circle";
     static CjkIdeographic = "cjk-ideographic";
     static Decimal = "decimal";
     static DecimalLeadingZero = "decimal-leading-zero";
     static Georgian = "georgian";
     static Hebrew = "hebrew";
     static Hiragana = "hiragana";
     static HiraganaIroha = "hiragana-iroha";
     static Katakana = "katakana";
     static KatakanaIroha = "katakana-iroha";
     static LowerAlpha = "lower-alpha";
     static LowerGreek = "lower-greek";
     static LowerRoman = "lower-roman";
     static None = "none";
     static Square = "square";
     static UpperAlpha = "upper-alpha";
     static UpperGreek = "upper-greek";
     static UpperLatin = "upper-latin";
     static UpperRoman = "upper-roman";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Disc,
          this.Armenian,
          this.Circle,
          this.CjkIdeographic,
          this.Decimal,
          this.DecimalLeadingZero,
          this.Georgian,
          this.Hebrew,
          this.Hiragana,
          this.HiraganaIroha,
          this.Katakana,
          this.KatakanaIroha,
          this.LowerAlpha,
          this.LowerGreek,
          this.LowerRoman,
          this.None,
          this.Square,
          this.UpperAlpha,
          this.UpperGreek,
          this.UpperLatin,
          this.UpperRoman,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default ListStyleType;
