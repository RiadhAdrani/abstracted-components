import PropUtil from "./PropUtil";

class AlignContent {
    static Stretch = "stretch";
    static Center = "center";
    static FlexStart = "flex-start";
    static FlexEnd = "flex-end";
    static SpaceBetween = "space-between";
    static SpaceAround = "space-around";
    static SpaceEvenly = "space-evenly";
    static Initial = "initial";
    static Inherit = "inherit";

    static valuesList = [
        this.Stretch,
        this.Center,
        this.FlexStart,
        this.FlexEnd,
        this.SpaceBetween,
        this.SpaceAround,
        this.SpaceEvenly,
        this.Initial,
        this.Inherit,
    ];

    static checkProperty = (prop, backup,  backup2) => {
        return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
    };
}

export default AlignContent;
