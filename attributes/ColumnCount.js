import PropUtil from "./PropUtil";
import Util from "./Util";

class ColumnCount {
    static Auto = "auto";
    static Initial = "initial";
    static Inherit = "inherit";

    static checkProperty(prop, backup, backup2 = this.Initial) {
        if (Util.isBetween(prop, 0, Infinity)) return prop;
        if (Util.isBetween(backup, 0, Infinity)) return backup;
        if (Util.isBetween(backup2, 0, Infinity)) return backup2;
        return PropUtil.isProperty(prop, [this.Auto, this.Initial, this.Inherit], backup, backup2);
    }
}

export default ColumnCount;
