class BorderImageSource {
     static None = "none";
     static Initial = "initial";
     static inherit = "inherit";

     static new(url) {
          return `url("${url}")`;
     }
}

export default BorderImageSource;
