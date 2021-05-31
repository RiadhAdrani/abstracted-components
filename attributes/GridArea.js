class GridArea {
     static new({ rowStart, columnStart, rowEnd, columnEnd }) {
          return {
               rowStart: `${rowStart}`,
               rowEnd: `${rowEnd}`,
               columnStart: `${columnStart}`,
               columnEnd: `${columnEnd}`,
          };
     }

     static newArea(name) {
          return `${name}`;
     }
}

export default GridArea;
