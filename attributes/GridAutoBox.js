import PropUtil from "./PropUtil";

class GridAutoBox{

    static Auto = "auto";
    static MaxContent = "max-content";
    static MinContent = "min-content";

    static checkProperty(prop, backup,backup2){
        return PropUtil.isLengthProperty(prop,[this.Auto,this.MaxContent,this.MinContent],backup,backup2);
    }

}

export default GridAutoBox;