import TextDecorationLine from "./TextDecorationLine";

class TextDecoration {
     static new({ line, color, style }) {
          return {
               line: `${line}`,
               color: `${color}`,
               style: `${style}`,
          };
     }

     static newUnderline(color, style) {
          return this.new(TextDecorationLine.Underline, color, style);
     }

     static newLinethrough(color, style) {
          return this.new(TextDecorationLine.Linethrough, color, style);
     }

     static newOverline(color, style) {
          return this.new(TextDecorationLine.Overline, color, style);
     }
}

export default TextDecoration;
