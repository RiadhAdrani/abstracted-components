import Colors from "./Colors";
import Length from "./Length";

class TextShadow {
     static None = "none";
     static Initial = "initial";
     static Inherit = "inherit";

     static new({ hOffset, vOffset, blur, color }) {
          return `${Length.validateLength(hOffset)} ${Length.validateLength(
               vOffset
          )} ${Length.validateLength(blur)} ${Colors.validateColor(color)}`;
     }
}

export default TextShadow;
