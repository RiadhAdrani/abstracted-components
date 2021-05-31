import PropUtil from "./PropUtil";

class Opacity{

    static Initial = "initial";
    static Inherit = "inherit";

    static checkProperty(prop, backup, backup2){
        return PropUtil.isOpacity(prop,backup,backup2);
    }

}

export default Opacity