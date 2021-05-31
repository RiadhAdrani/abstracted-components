import PropUtil from "./PropUtil";

class FontStyle {
    static Normal = "normal";
    static Italic = "italic";
    static Oblique = "oblique";
    static Initial = "initial";
    static Inherit = "inherit";

    static valuesList = [this.Normal, this.Italic, this.Oblique, this.Initial, this.Inherit];

    static checkProperty(prop, backup, backup2 = this.Initial) {
        return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
    }
}

export default FontStyle;
