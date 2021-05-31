class ColumnRule {
     static new(width, style, color) {
          return {
               width: `${width}`,
               style: `${style}`,
               color: `${color}`,
          };
     }
}

export default ColumnRule;
