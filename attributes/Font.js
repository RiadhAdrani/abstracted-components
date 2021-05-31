class Font {
     static new({ style, weight, size, family, color }) {
          return {
               style: `${style}`,
               weight: `${weight}`,
               size: `${size}`,
               family: `${family}`,
               color: `${color}`,
          };
     }
}

export default Font;
