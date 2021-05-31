import PropUtil from "./PropUtil";

class BackgroundBlendMode {
     static Normal = "normal";
     static Multiply = "multiply";
     static Screen = "screen";
     static Overlay = "overlay";
     static Darken = "darken";
     static Lighten = "lighten";
     static ColorDodge = "color-dodge";
     static Saturation = "saturation";
     static Color = "color";
     static Luminosity = "luminosity";

     static valuesList = [
          this.Normal,
          this.Multiply,
          this.Screen,
          this.Overlay,
          this.Darken,
          this.Lighten,
          this.ColorDodge,
          this.Saturation,
          this.Color,
          this.Luminosity,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default BackgroundBlendMode;
