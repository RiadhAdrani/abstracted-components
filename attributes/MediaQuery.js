class MediaQuery {
     /**
      * Media Query that will execute when the rule is met.
      * @param {*} rule condition to watch for. Example : max-width:"1000px"
      * @param {*} selector selector attributes using the Selector.new()
      * @returns
      */
     static new(rule, selector) {
          return `@media (${rule}){
               ${selector};
          }
          `;
     }

     static newScreenSize(size, selector) {
          return this.new(`max-width:${size}`, selector);
     }

     static newMobile320px(selector) {
          return this.newScreenSize("320px", selector);
     }

     static newMobile480px(selector) {
          return this.newScreenSize("480px", selector);
     }

     static newTablet768px(selector) {
          return this.newScreenSize("768px", selector);
     }

     static newLaptop1024px(selector) {
          return this.newScreenSize("1024px", selector);
     }

     static newDesktop1200px(selector) {
          return this.newScreenSize("1200px", selector);
     }
}

export default MediaQuery;
