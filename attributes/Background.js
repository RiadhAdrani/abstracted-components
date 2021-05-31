import BackgroundAttachment from "./BackgroundAttachment";
import BackgroundBlendMode from "./BackgroundBlendMode";
import BackgroundClip from "./BackgroundClip";
import BackgroundImage from "./BackgroundImage";
import BackgroundOrigin from "./BackgroundOrigin";
import BackgroundPosition from "./BackgroundPosition";
import BackgroundRepeat from "./BackgroundRepeat";
import Colors from "./Colors";

class Background {
     static Initial = "initial";
     static Inherit = "inherit";

     static newBackground({
          color,
          backgroundImage,
          backgroundPosition,
          backgroundSize,
          backgroundRepeat,
          backgroundOrigin,
          backgroundClip,
          backgroundAttachment,
          backgroundBlendMode,
     }) {
          return {
               color: `${Colors.validateColor(color)}`,
               image: `${backgroundImage}`,
               imageSize: `${backgroundSize}`,
               imagePosition: `${BackgroundPosition.checkProperty(backgroundPosition)}`,
               imageRepeat: `${BackgroundRepeat.checkProperty(backgroundRepeat)}`,
               imageOrigin: `${BackgroundOrigin.checkProperty(backgroundOrigin)}`,
               imageClip: `${BackgroundClip.checkProperty(backgroundClip)}`,
               imageAttachement: `${BackgroundAttachment.checkProperty(backgroundAttachment)}`,
               imageBlendMode: `${BackgroundBlendMode.checkProperty(backgroundBlendMode)}`,
          };
     }

     static newBackgroundFromImage(
          imageUrl,
          position = BackgroundPosition.CenterCenter,
          repeat = BackgroundRepeat.NoRepeat
     ) {
          return {
               image: `${BackgroundImage.newFromUrl(imageUrl)}`,
               imagePosition: `${BackgroundPosition.checkProperty(position)}`,
               imageRepeat: `${BackgroundRepeat.checkProperty(repeat)}`,
          };
     }
}

export default Background;
