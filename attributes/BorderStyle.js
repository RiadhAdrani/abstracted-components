import PropUtil from "./PropUtil";

class BorderStyle {
    static None = "none";
    static Hidden = "hidden";
    static Dotted = "dotted";
    static Dashed = "dashed";
    static Solid = "solid";
    static Double = "double";
    static Groove = "groove";
    static Ridge = "ridge";
    static Inset = "inset";
    static Outset = "outset";
    static Initial = "initial";
    static Inherit = "inherit";

    static valuesList = [
        this.None,
        this.Hidden,
        this.Dotted,
        this.Dashed,
        this.Solid,
        this.Double,
        this.Groove,
        this.Ridge,
        this.Inset,
        this.Outset,
        this.Initial,
        this.Inherit,
    ];

    static checkProperty(prop, backup = this.Initial, backup2 = this.Initial) {
        return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
    }
}

export default BorderStyle;
