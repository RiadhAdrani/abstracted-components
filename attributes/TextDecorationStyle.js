class TextDecorationStyle {
     static Solid = "solid";
     static Double = "double";
     static Dotted = "dotted";
     static Dashed = "dashed";
     static Wavy = "wavy";
     static Initial = "initial";
     static Inherit = "inherit";

     static regex = /^(solid|double|dotted|dashed|wavy|initial|inherit)(( )(solid|double|dotted|dashed|wavy|initial|inherit)){0,2}$/;

     static checkProperty(prop, backup, backup2) {
          if (this.regex.test(prop)) return prop;
          if (this.regex.test(backup)) return backup;
          if (this.regex.test(backup2)) return backup2;
     }
}

export default TextDecorationStyle;
