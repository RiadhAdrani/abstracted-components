import PropUtil from "./PropUtil";

class JustifyContent{

    static Initial = "initial";
    static Inherit = "inherit";
    static FlexStart = "flex-start";
    static FlexEnd = "flex-end";
    static Center = "center";
    static SpaceBetween = "space-between";
    static SpaceAround = "space-around";
    static SpaceEvenly = "space-evenly";
    
    static valuesList = [
        this.Initial,
        this.Inherit,
        this.FlexStart,
        this.FlexEnd,
        this.Center,
        this.SpaceBetween,
        this.SpaceAround,
        this.SpaceEvenly
    ]

    static checkProperty(prop ,backup,backup2){
        return PropUtil.isProperty(prop, this.valuesList, backup,backup2);
    }
}

export default JustifyContent