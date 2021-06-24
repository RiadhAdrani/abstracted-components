class Keyframes {
     /**
      *
      */
     static new(name, selectors) {
          let x = "";

          for (let s = 0; s < selectors.length; s++) {
               console.log(s);
               x += `${selectors[s][0]} {
                    ${selectors[s][1]};
               }\n`;
          }

          console.log(x);

          return `@keyframes ${name}{
               ${x}
          }`;
     }

     static newFromTo(name, fromSelector, toSelector) {
          return this.new(name, [
               ["from", fromSelector],
               ["to", toSelector],
          ]);
     }
}

export default Keyframes;
