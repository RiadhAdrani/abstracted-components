import Length from "./Length";
import PropUtil from "./PropUtil";

class GridTemplateBox{

    static None = "none";
    static Auto = "auto";
    static MaxContent = "max-content";
    static MinContent = "min-content";
    static Initial = "initial";
    static Inherit = "inherit";

    static valuesList = [
        this.None,
        this.Auto,
        this.MaxContent,
        this.MinContent,
        this.Inherit,
        this.Initial
    ]

    static checkProperty(prop, backup, backup2){
        if (Length.isValidGridTemplateInput(prop)) return prop;
        if (Length.isValidGridTemplateInput(backup)) return backup;
        if (Length.isValidGridTemplateInput(backup2)) return backup2;
        return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
    }


}

export default GridTemplateBox;