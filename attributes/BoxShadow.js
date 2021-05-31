import Colors from "./Colors";
import Length from "./Length";

class BoxShadow {
    static None = "none";
    static Initial = "initial";
    static Inherit = "inherit";

    static new(hOffset, vOffset, blur, spread, color, inset = false) {
        return `${Length.validateLength(hOffset)} ${Length.validateLength(
            vOffset
        )} ${Length.validateLength(blur)} ${Length.validateLength(spread)} ${Colors.validateColor(
            color
        )} ${inset ? "inset" : ""}`;
    }
}

export default BoxShadow;
