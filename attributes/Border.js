class Border {
     static newAllComplex({
          topWidth,
          topStyle,
          topColor,
          rightWidth,
          rightStyle,
          rightColor,
          bottomWidth,
          bottomStyle,
          bottomColor,
          leftWidth,
          leftStyle,
          leftColor,
     }) {
          return {
               topWidth: `${topWidth}`,
               topStyle: `${topStyle}`,
               topColor: `${topColor}`,
               rightWidth: `${rightWidth}`,
               rightStyle: `${rightStyle}`,
               rightColor: `${rightColor}`,
               bottomWidth: `${bottomWidth}`,
               bottomStyle: `${bottomStyle}`,
               bottomColor: `${bottomColor}`,
               leftWidth: `${leftWidth}`,
               leftStyle: `${leftStyle}`,
               leftColor: `${leftColor}`,
          };
     }

     static newAll(width, style, color) {
          return this.newAllComplex({
               topWidth: width,
               topStyle: style,
               topColor: color,
               rightWidth: width,
               rightStyle: style,
               rightColor: color,
               bottomWidth: width,
               bottomStyle: style,
               bottomColor: color,
               leftWidth: width,
               leftStyle: style,
               leftColor: color,
          });
     }

     static newBottom(width, style, color) {
          return {
               width: `${width}`,
               style: `${style}`,
               color: `${color}`,
          };
     }

     static newTop(width, style, color) {
          return {
               width: `${width}`,
               style: `${style}`,
               color: `${color}`,
          };
     }

     static newRight(width, style, color) {
          return {
               width: `${width}`,
               style: `${style}`,
               color: `${color}`,
          };
     }

     static newLeft(width, style, color) {
          return {
               width: `${width}`,
               style: `${style}`,
               color: `${color}`,
          };
     }
}

export default Border;
