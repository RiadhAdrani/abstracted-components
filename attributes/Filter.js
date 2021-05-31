import Default from "./Default";

class Filter extends Default {
     /**
      * Applies a blur effect to the image.
      * A larger value will create more blur.
      * If no value is specified, 0 is used.
      * @param {number} value a number, do not include px.
      * @returns
      */
     static newBlur(value = 0) {
          return `blur(${value}px)`;
     }

     /**
      * Adjusts the brightness of the image.
      * 0 will make the image completely black.
      * 100 is default and represents the original image.
      * Values over 100 will provide brighter results.
      * @param {number} percentage a numbe between 0 and 100.
      * @returns
      */
     static newBrightness(percentage = 100) {
          return `brightness(${percentage}%)`;
     }

     /**
      * Adjusts the contrast of the image.
      * 0 will make the image completely black.
      * 100 is default, and represents the original image.
      * Values over 100 will provide results with more contrast.
      * @param {number} percentage a numbe between 0 and 100.
      */
     static newContrast(percentage = 100) {
          return `contrast(${percentage}%)`;
     }

     /**
      * Applies a drop shadow effect to the image.
      * @param {*} hShadow Specifies a pixel value for the horizontal shadow. Negative values place the shadow to the left of the image.
      * @param {*} vShadow Specifies a pixel value for the vertical shadow. Negative values place the shadow above the image.
      * @param {*} blur This is the third value. Adds a blur effect to the shadow. A larger value will create more blur (the shadow becomes bigger and lighter). Negative values are not allowed.
      * @param {*} spread This is the fourth value. Positive values will cause the shadow to expand and grow bigger, and negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element).
      * @param {*} color Adds a color to the shadow. If not specified, the color depends on the browser (often black).
      */
     static newDropShadow(hShadow, vShadow, blur, spread = 0, color) {
          return `drop-shadow(${hShadow}px ${vShadow}px ${blur}px ${spread}px ${color})`;
     }

     /**
      * Converts the image to grayscale.
      * 0 (0) is default and represents the original image.
      * 100 will make the image completely gray (used for black and white images).
      * @param {number} percentage a numbe between 0 and 100.
      */
     static newGrayscale(percentage = 0) {
          return `grayscale(${percentage}%)`;
     }

     /**
      * Applies a hue rotation on the image.
      * The value defines the number of degrees around the color circle the image samples will be adjusted.
      * 0 is default, and represents the original image.
      * @param {*} angle a value between 0 and 360. do not include "deg".
      */
     static newHueRotate(angle) {
          return `hue-rotate(${angle}deg)`;
     }

     /**
      * Inverts the samples in the image.
      * 0 (0) is default and represents the original image.
      * 100 will make the image completely inverted.
      * @param {number} percentage a numbe between 0 and 100.
      */
     static newInvert(percentage = 0) {
          return `invert(${percentage}%)`;
     }

     /**
      * Sets the opacity level for the image.
      * The opacity-level describes the transparency-level, where:
      * 0 is completely transparent.
      * 100 is default and represents the original image (no transparency).
      * @param {number} percentage a numbe between 0 and 100.
      */
     static newOpacity(percentage = 100) {
          return `opacity(${percentage}%)`;
     }

     /**
      * Saturates the image.
      * 0 will make the image completely un-saturated.
      * 100 is default and represents the original image.
      * Values over 100% provides super-saturated results.
      * @param {number} percentage a numbe between 0 and 100.
      */
     static newSaturate(percentage = 100) {
          return `saturate(${percentage}%)`;
     }

     /**
      Converts the image to sepia.
      0 is default and represents the original image.
      100 will make the image completely sepia.
      * @param {number} percentage a numbe between 0 and 100.
      */
     static newSepia(percentage = 100) {
          return `sepia(${percentage}%)`;
     }
}

export default Filter;
