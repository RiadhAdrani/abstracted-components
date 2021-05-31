import PropUtil from "./PropUtil";

class FontSize {
    static SmallXX = "xx-small";
    static SmallX = "x-small";
    static Small = "small";
    static Smaller = "smaller";
    static Medium = "medium";
    static Large = "large";
    static Larger = "larger";
    static LargeX = "x-large";
    static LargeXX = "xx-large";
    static Initial = "initial";
    static Inherit = "inherit";

    static valuesList = [
        this.Small,
        this.SmallX,
        this.SmallXX,
        this.Smaller,
        this.Medium,
        this.Large,
        this.Larger,
        this.LargeX,
        this.LargeXX,
        this.Initial,
        this.Inherit,
    ];

    static checkProperty(prop, backup, backup2 = "initial") {
        return PropUtil.isLengthProperty(prop, this.valuesList, backup, backup2);
    }
}

export default FontSize;
