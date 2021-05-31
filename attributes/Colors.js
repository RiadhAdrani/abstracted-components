import Util from "./Util";

class Colors {
     static rgbRegex =
          /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/;

     static rgbaRegex =
          /rgba\(\s*(-?\d+|-?\d*\.\d+(?=%))(%?)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/;

     static hslRegex =
          /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/;

     static hslaRegex =
          /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/;

     static hexRegex = /^#[0-9A-F]{6}$/i;

     static hex3Regex = /^#([0-9A-F]{3}){1,2}$/i;

     static isValidHex(color) {
          return this.hexRegex.test(color) || this.hex3Regex.test(color);
     }

     static isValidRGB(color) {
          return this.rgbRegex.test(color);
     }

     static isValidRGBA(color) {
          return this.rgbaRegex.test(color);
     }

     static isValidHSL(color) {
          return this.hslRegex.test(color);
     }

     static isValidHSLA(color) {
          return this.hslaRegex.test(color);
     }

     static validateColor(
          color,
          backup = this.NoColorTransparent,
          backup2 = this.NoColorTransparent
     ) {
          return this.isValidColor(color)
               ? color
               : this.isValidColor(backup)
               ? backup
               : this.isValidColor(backup2)
               ? backup2
               : this.NoColorTransparent;
     }

     static isValidFontColor(color) {
          return this.isValidColor(color) && color !== this.NoColorTransparent;
     }

     static validateFontColor(color, backup, backup2) {
          if (this.isValidFontColor(color)) return color;
          if (this.isValidFontColor(backup)) return backup;
          if (this.isValidFontColor(backup2) && backup2 === "inherit") return backup2;
          return "black";
     }

     static isValidColor(color) {
          if (this.isValidRGB(color)) return true;
          if (this.isValidRGBA(color)) return true;
          if (this.isValidHex(color)) return true;
          if (this.isValidHSL(color)) return true;
          if (this.isValidHSLA(color)) return true;
          if (this.cssColorsList.includes(color)) return true;

          return false;
     }

     static newFromHex(hexCode) {
          if (Util.isBetween(hexCode.length, 3, 6) && ![4, 5].includes(hexCode.length)) {
               return `#${hexCode}`;
          } else return "#000";
     }

     static newFromRGB(r, g, b) {
          const red = isNaN(r) ? 0 : Util.isBetween(r, 0, 256) ? r : 0;
          const green = isNaN(g) ? 0 : Util.isBetween(g, 0, 256) ? g : 0;
          const blue = isNaN(b) ? 0 : Util.isBetween(b, 0, 256) ? b : 0;

          return `rgb(${red},${green},${blue})`;
     }

     static newFromRGBA(r, g, b, a) {
          const red = isNaN(r) ? 0 : Util.isBetween(r, 0, 256) ? r : 0;
          const green = isNaN(g) ? 0 : Util.isBetween(g, 0, 256) ? g : 0;
          const blue = isNaN(b) ? 0 : Util.isBetween(b, 0, 256) ? b : 0;
          const alpha = isNaN(a) ? 1 : Util.isBetween(a, 0, 1) ? a : 0;

          return `rgba(${red},${green},${blue},${alpha})`;
     }

     static newFromHSL(h, s, l) {
          const hue = isNaN(h) ? 0 : Util.isBetween(h, 0, 360) ? h : 0;
          const saturation = isNaN(s) ? 0 : Util.isBetween(s, 0, 100) ? s : 0;
          const lightness = isNaN(l) ? 0 : Util.isBetween(l, 0, 100) ? l : 0;

          return `hsl(${hue},${saturation}%,${lightness}%)`;
     }

     static newFromHSLA(h, s, l, a) {
          const hue = isNaN(h) ? 0 : Util.isBetween(h, 0, 360) ? h : 0;
          const saturation = isNaN(s) ? 0 : Util.isBetween(s, 0, 100) ? s : 0;
          const lightness = isNaN(l) ? 0 : Util.isBetween(l, 0, 100) ? l : 0;
          const alpha = isNaN(a) ? 1 : Util.isBetween(a, 0, 1) ? a : 0;

          return `hsla(${hue},${saturation}%,${lightness}%,${alpha})`;
     }

     static NoColorTransparent = "transparent";
     static AliceBlue = "aliceBlue";
     static AntiqueWhite = "antiqueWhite";
     static Aqua = "aqua";
     static Aquamarine = "aquamarine";
     static Azure = "azure";
     static Beige = "beige";
     static Bisque = "bisque";
     static Black = "black";
     static BlanchedAlmond = "blanchedAlmond";
     static Blue = "blue";
     static BlueViolet = "blueViolet";
     static Brown = "brown";
     static BurlyWood = "burlyWood";
     static CadetBlue = "cadetBlue";
     static Chartreuse = "chartreuse";
     static Chocolate = "chocolate";
     static Coral = "coral";
     static CornflowerBlue = "cornflowerBlue";
     static Cornsilk = "cornsilk";
     static Crimson = "crimson";
     static Cyan = "cyan";
     static DarkBlue = "darkBlue";
     static DarkCyan = "darkCyan";
     static DarkGoldenRod = "darkGoldenRod";
     static DarkGray = "darkGray";
     static DarkGrey = "darkGrey";
     static DarkGreen = "darkGreen";
     static DarkKhaki = "darkKhaki";
     static DarkMagenta = "darkMagenta";
     static DarkOliveGreen = "darkOliveGreen";
     static DarkOrange = "darkOrange";
     static DarkOrchid = "darkOrchid";
     static DarkRed = "darkRed";
     static DarkSalmon = "darkSalmon";
     static DarkSeaGreen = "darkSeaGreen";
     static DarkSlateBlue = "darkSlateBlue";
     static DarkSlateGray = "darkSlateGray";
     static DarkSlateGrey = "darkSlateGrey";
     static DarkTurquoise = "darkTurquoise";
     static DarkViolet = "darkViolet";
     static DeepPink = "deepPink";
     static DeepSkyBlue = "deepSkyBlue";
     static DimGray = "dimGray";
     static DimGrey = "dimGrey";
     static DodgerBlue = "dodgerBlue";
     static FireBrick = "fireBrick";
     static FloralWhite = "floralWhite";
     static ForestGreen = "forestGreen";
     static Fuchsia = "fuchsia";
     static Gainsboro = "gainsboro";
     static GhostWhite = "ghostWhite";
     static Gold = "gold";
     static GoldenRod = "goldenRod";
     static Gray = "gray";
     static Grey = "grey";
     static Green = "green";
     static GreenYellow = "greenYellow";
     static HoneyDew = "honeyDew";
     static HotPink = "hotPink";
     static IndianRed = "indianRed ";
     static Indigo = "indigo  ";
     static Initial = "initial";
     static Inherit = "inherit";
     static Ivory = "ivory";
     static Khaki = "khaki";
     static Lavender = "lavender";
     static LavenderBlush = "lavenderBlush";
     static LawnGreen = "lawnGreen";
     static LemonChiffon = "lemonChiffon";
     static LightBlue = "lightBlue";
     static LightCoral = "lightCoral";
     static LightCyan = "lightCyan";
     static LightGoldenRodYellow = "lightGoldenRodYellow";
     static LightGray = "lightGray";
     static LightGrey = "lightGrey";
     static LightGreen = "lightGreen";
     static LightPink = "lightPink";
     static LightSalmon = "lightSalmon";
     static LightSeaGreen = "lightSeaGreen";
     static LightSkyBlue = "lightSkyBlue";
     static LightSlateGray = "lightSlateGray";
     static LightSlateGrey = "lightSlateGrey";
     static LightSteelBlue = "lightSteelBlue";
     static LightYellow = "lightYellow";
     static Lime = "lime";
     static LimeGreen = "limeGreen";
     static Linen = "linen";
     static Magenta = "magenta";
     static Maroon = "maroon";
     static MediumAquaMarine = "mediumAquaMarine";
     static MediumBlue = "mediumBlue";
     static MediumOrchid = "mediumOrchid";
     static MediumPurple = "mediumPurple";
     static MediumSeaGreen = "mediumSeaGreen";
     static MediumSlateBlue = "mediumSlateBlue";
     static MediumSpringGreen = "mediumSpringGreen";
     static MediumTurquoise = "mediumTurquoise";
     static MediumVioletRed = "mediumVioletRed";
     static MidnightBlue = "midnightBlue";
     static MintCream = "mintCream";
     static MistyRose = "mistyRose";
     static Moccasin = "moccasin";
     static NavajoWhite = "navajoWhite";
     static Navy = "navy";
     static OldLace = "oldLace";
     static Olive = "olive";
     static OliveDrab = "oliveDrab";
     static Orange = "orange";
     static OrangeRed = "orangeRed";
     static Orchid = "orchid";
     static PaleGoldenRod = "paleGoldenRod";
     static PaleGreen = "paleGreen";
     static PaleTurquoise = "paleTurquoise";
     static PaleVioletRed = "paleVioletRed";
     static PapayaWhip = "papayaWhip";
     static PeachPuff = "peachPuff";
     static Peru = "peru";
     static Pink = "pink";
     static Plum = "plum";
     static PowderBlue = "powderBlue";
     static Purple = "purple";
     static RebeccaPurple = "rebeccaPurple";
     static Red = "red";
     static RosyBrown = "rosyBrown";
     static RoyalBlue = "royalBlue";
     static SaddleBrown = "saddleBrown";
     static Salmon = "salmon";
     static SandyBrown = "sandyBrown";
     static SeaGreen = "seaGreen";
     static SeaShell = "seaShell";
     static Sienna = "sienna";
     static Silver = "silver";
     static SkyBlue = "skyBlue";
     static SlateBlue = "slateBlue";
     static SlateGray = "slateGray";
     static SlateGrey = "slateGrey";
     static Snow = "snow";
     static SpringGreen = "springGreen";
     static SteelBlue = "steelBlue";
     static Tan = "tan";
     static Teal = "teal";
     static Thistle = "thistle";
     static Tomato = "tomato";
     static Turquoise = "turquoise";
     static Violet = "violet";
     static Wheat = "wheat";
     static White = "white";
     static WhiteSmoke = "whiteSmoke";
     static Yellow = "yellow";
     static YellowGreen = "yellowGreen";

     static cssColorsList = [
          "transparent",
          "initial",
          "inherit",
          "aliceBlue",
          "antiqueWhite",
          "aqua",
          "aquamarine",
          "azure",
          "beige",
          "bisque",
          "black",
          "blanchedAlmond",
          "blue",
          "blueViolet",
          "brown",
          "burlyWood",
          "cadetBlue",
          "chartreuse",
          "chocolate",
          "coral",
          "cornflowerBlue",
          "cornsilk",
          "crimson",
          "cyan",
          "darkBlue",
          "darkCyan",
          "darkGoldenRod",
          "darkGray",
          "darkGrey",
          "darkGreen",
          "darkKhaki",
          "darkMagenta",
          "darkOliveGreen",
          "darkOrange",
          "darkOrchid",
          "darkRed",
          "darkSalmon",
          "darkSeaGreen",
          "darkSlateBlue",
          "darkSlateGray",
          "darkSlateGrey",
          "darkTurquoise",
          "darkViolet",
          "deepPink",
          "deepSkyBlue",
          "dimGray",
          "dimGrey",
          "dodgerBlue",
          "fireBrick",
          "floralWhite",
          "forestGreen",
          "fuchsia",
          "gainsboro",
          "ghostWhite",
          "gold",
          "goldenRod",
          "gray",
          "grey",
          "green",
          "greenYellow",
          "honeyDew",
          "hotPink",
          "indianRed ",
          "indigo  ",
          "ivory",
          "khaki",
          "lavender",
          "lavenderBlush",
          "lawnGreen",
          "lemonChiffon",
          "lightBlue",
          "lightCoral",
          "lightCyan",
          "lightGoldenRodYellow",
          "lightGray",
          "lightGrey",
          "lightGreen",
          "lightPink",
          "lightSalmon",
          "lightSeaGreen",
          "lightSkyBlue",
          "lightSlateGray",
          "lightSlateGrey",
          "lightSteelBlue",
          "lightYellow",
          "lime",
          "limeGreen",
          "linen",
          "magenta",
          "maroon",
          "mediumAquaMarine",
          "mediumBlue",
          "mediumOrchid",
          "mediumPurple",
          "mediumSeaGreen",
          "mediumSlateBlue",
          "mediumSpringGreen",
          "mediumTurquoise",
          "mediumVioletRed",
          "midnightBlue",
          "mintCream",
          "mistyRose",
          "moccasin",
          "navajoWhite",
          "navy",
          "oldLace",
          "olive",
          "oliveDrab",
          "orange",
          "orangeRed",
          "orchid",
          "paleGoldenRod",
          "paleGreen",
          "paleTurquoise",
          "paleVioletRed",
          "papayaWhip",
          "peachPuff",
          "peru",
          "pink",
          "plum",
          "powderBlue",
          "purple",
          "rebeccaPurple",
          "red",
          "rosyBrown",
          "royalBlue",
          "saddleBrown",
          "salmon",
          "sandyBrown",
          "seaGreen",
          "seaShell",
          "sienna",
          "silver",
          "skyBlue",
          "slateBlue",
          "slateGray",
          "slateGrey",
          "snow",
          "springGreen",
          "steelBlue",
          "tan",
          "teal",
          "thistle",
          "tomato",
          "turquoise",
          "violet",
          "wheat",
          "white",
          "whiteSmoke",
          "yellow",
          "yellowGreen",
     ];
}

export default Colors;
