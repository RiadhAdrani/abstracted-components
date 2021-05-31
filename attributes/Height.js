import PropUtil from "./PropUtil";

class Height{

    static Auto = "auto";
    static Initial = "initial";
    static Inherit = "inherit";

    static checkProperty(prop, backup, backup2 = this.Initial){
        return PropUtil.isLengthProperty(prop,[this.Auto,this.Inherit,this.Initial],backup,backup2);
    }

}

export default Height;