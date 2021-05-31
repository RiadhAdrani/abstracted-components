class BorderImage {
     static new({ imageUrl, width, outset, repeat, slice }) {
          return {
               url: `${imageUrl}`,
               width: `${width}`,
               outset: `${outset}`,
               repeat: `${repeat}`,
               slice: `${slice}`,
          };
     }
}

export default BorderImage;
