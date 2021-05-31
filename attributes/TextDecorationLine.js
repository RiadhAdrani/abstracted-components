class TextDecorationLine {
     static None = "none";
     static Underline = "underline";
     static Overline = "overline";
     static Linethrough = "line-through";
     static Initial = "initial";
     static Inherit = "inherit";

     static regex = /^(none|underline|overline|line-through|initial|inherit)(( )(none|underline|overline|line-through|initial|inherit)){0,2}$/;

     static checkProperty(prop, backup, backup2) {
          if (this.regex.test(prop)) return prop;
          if (this.regex.test(backup)) return backup;
          if (this.regex.test(backup2)) return backup2;
     }
}

export default TextDecorationLine;
