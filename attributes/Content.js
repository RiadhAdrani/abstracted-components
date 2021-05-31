import Default from "./Default";

class Content extends Default {
     static Normal = "normal";
     static Counter = "counter";
     static OpenQuote = "open-quote";
     static CloseQuote = "close-quote";
     static NoOpenQuote = "no-open-quote";
     static NoCloseQuote = "no-close-quote";

     static valuesList = [
          this.Normal,
          this.Counter,
          this.OpenQuote,
          this.CloseQuote,
          this.NoOpenQuote,
          this.NoCloseQuote,
     ];

     /**
      * Sets the content as one of the selector's attribute.
      * @param {*} attribute
      */
     static newAttr(attribute) {
          return `attr(${attribute})`;
     }

     /**
      * Sets the content to the text you specify
      * @param {*} string
      * @returns
      */
     static newString(string) {
          return string;
     }

     static newMediaFromURL(url) {
          return `url(${url})`;
     }
}

export default Content;
