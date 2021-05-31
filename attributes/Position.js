import PropUtil from "./PropUtil";

class Position{

    static Static = "static";
    static Absolute = "absolute";
    static Fixed = "fixed";
    static Relative = "relative";
    static Sticky = "sticky";
    static Initial = "initial";
    static Inherit = "inherit";

    static valuesList = [
        this.Static,
        this.Absolute,
        this.Fixed,
        this.Relative,
        this.Sticky,
        this.Initial,
        this.Inherit
    ]

    static checkProperty(prop, backup,backup2){
        return PropUtil.isProperty(prop, this.valuesList, backup,backup2);
    }

}

export default Position;