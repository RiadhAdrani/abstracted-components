import PropUtil from "./PropUtil";

class FontStretch {
    static UltraCondensed = "ultra-condensed";
    static ExtraCondensed = "extra-condensed";
    static Condensed = "condensed";
    static SemiCondensed = "semi-condensed";
    static Normal = "normal";
    static SemiExpanded = "semi-expanded";
    static Expanded = "expanded";
    static ExtraExpanded = "extra-expanded";
    static UltraExpanded = "ultra-expanded";
    static Initial = "initial";
    static Inherit = "inherit";

    static valuesList = [
        this.UltraCondensed,
        this.ExtraCondensed,
        this.Condensed,
        this.SemiCondensed,
        this.Normal,
        this.Expanded,
        this.ExtraExpanded,
        this.UltraExpanded,
        this.Initial,
        this.Inherit,
    ];

    static checkProperty(prop, backup, backup2 = this.Initial) {
        return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
    }
}

export default FontStretch;
