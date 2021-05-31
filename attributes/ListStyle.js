class ListStyle {
     static new({ type, position, image }) {
          return {
               type: `${type}`,
               position: `${position}`,
               image: `${image}`,
          };
     }
}

export default ListStyle;
