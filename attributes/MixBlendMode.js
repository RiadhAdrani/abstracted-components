import PropUtil from "./PropUtil";

class MixBlendMode {
     static Normal = "normal";
     static Multiply = "multiply";
     static Screen = "screen";
     static Overlay = "overlay";
     static Darken = "darken";
     static Lighten = "lighten";
     static ColorDodge = "color-dodge";
     static ColorBurn = "color-burn";
     static Difference = "difference";
     static Exclusion = "exclusion";
     static Hue = "hue";
     static Saturation = "saturation";
     static Color = "color";
     static Luminosity = "luminosity";

     static valuesList = [
          this.Exclusion,
          this.Difference,
          this.ColorBurn,
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

export default MixBlendMode;
