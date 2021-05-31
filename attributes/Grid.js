class Grid {
     static new({ templateRows, templateColumns, templateAreas, autoRows, autoColumns, autoFlow }) {
          return {
               templateRows: `${templateRows}`,
               templateColumns: `${templateColumns}`,
               templateAreas: `${templateAreas}`,
               autoRows: `${autoRows}`,
               autoColumns: `${autoColumns}`,
               autoFlow: `${autoFlow}`,
          };
     }
}

export default Grid;
