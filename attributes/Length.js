class Length {
     static isValidLength(length) {
          return /^(-)?(\d+)((.)(\d+))?(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%)?$/.test(
               length
          );
     }

     static isValidPosition(position) {
          return /^(-)?(\d+)((.)(\d+))?(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%)( )(-)?(\d+)((.)(\d+))?(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%)$/.test(
               position
          );
     }

     static validatePosition(position) {
          if (this.isValidPosition(position)) return position;
          else return "";
     }

     static validateLength(length) {
          if (this.isValidLength(length)) {
               return length;
          } else {
               console.log(`${length} is not valid`);
               return "initial";
          }
     }

     static inputToJSON(input) {
          const arr = input.split(" ");

          if (arr.length === 1) {
               return {
                    top: arr[0],
                    right: arr[0],
                    bottom: arr[0],
                    left: arr[0],
               };
          }

          if (arr.length === 2) {
               return {
                    top: arr[0],
                    right: arr[1],
                    bottom: arr[0],
                    left: arr[1],
               };
          }

          if (arr.length === 3) {
               return {
                    top: arr[0],
                    right: arr[1],
                    bottom: arr[2],
                    left: "0px",
               };
          }

          if (arr.length === 4) {
               return {
                    top: arr[0],
                    right: arr[1],
                    bottom: arr[2],
                    left: arr[3],
               };
          }

          return {};
     }

     static radiusToJSON(input) {
          const arr = input.split(" ");

          if (arr.length === 1) {
               return {
                    topRight: arr[0],
                    bottomRight: arr[0],
                    bottomLeft: arr[0],
                    topLeft: arr[0],
               };
          }

          if (arr.length === 2) {
               return {
                    topRight: arr[0],
                    bottomRight: arr[1],
                    bottomLeft: arr[0],
                    topLeft: arr[1],
               };
          }

          if (arr.length === 3) {
               return {
                    topRight: arr[0],
                    bottomRight: arr[1],
                    bottomLeft: arr[2],
                    topLeft: "0px",
               };
          }

          if (arr.length === 4) {
               return {
                    topRight: arr[0],
                    bottomRight: arr[1],
                    bottomLeft: arr[2],
                    topLeft: arr[3],
               };
          }

          return {};
     }

     static isValidInput(inputLength) {
          const regex =
               /^((-)?(\d+)((.)(\d+))?(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%))(( )(-)?(\d+)((.)(\d+))?(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|vmax|fr|%)){0,3}$/;
          const regex2 = /^((\d+))(( )(\d+)){0,3}$/;
          const regex3 = /^(auto|inherit|initial)(( )(auto|inherit|initial)){0,3}$/;
          return regex.test(inputLength) || regex2.test(inputLength) || regex3.test(inputLength);
     }

     static isValidGridTemplateInput(inputLength) {
          const regex =
               /^((\d+)(cm|mm|pt|pc|px|em|ex|ch|rem|vw|vh|vmin|fr|vmax|%|auto|inherit|initial))(( )(\d+)(cm|mm|pt|pc|px|em|fr|ex|ch|rem|vw|vh|vmin|vmax|%|auto|inherit|initial)){0,}$/;
          return regex.test(inputLength);
     }

     static newPX(length) {
          return isNaN(length) ? "1mm" : `${length}px`;
     }

     static newFR(length) {
          return isNaN(length) ? "1fr" : `${length}fr`;
     }

     static newCM(length) {
          return isNaN(length) ? "1cm" : `${length}cm`;
     }

     static newMM(length) {
          return isNaN(length) ? "1mm" : `${length}mm`;
     }

     static newPT(length) {
          return isNaN(length) ? "1pt" : `${length}pt`;
     }

     static newPC(length) {
          return isNaN(length) ? "1pc" : `${length}pc`;
     }

     static newEM(length) {
          return isNaN(length) ? "1em" : `${length}em`;
     }

     static newEX(length) {
          return isNaN(length) ? "1ex" : `${length}ex`;
     }

     static newCH(length) {
          return isNaN(length) ? "1ch" : `${length}ch`;
     }

     static newREM(length) {
          return isNaN(length) ? "1rem" : `${length}rem`;
     }

     static newVW(length) {
          return isNaN(length) ? "1vw" : `${length}vw`;
     }

     static newVH(length) {
          return isNaN(length) ? "1vh" : `${length}vh`;
     }

     static newVMIN(length) {
          return isNaN(length) ? "1vmin" : `${length}vmin`;
     }

     static newVMAX(length) {
          return isNaN(length) ? "1vmax" : `${length}vmax`;
     }

     static newPercentage(length) {
          return isNaN(length) ? "1%" : `${length}%`;
     }
}

export default Length;
