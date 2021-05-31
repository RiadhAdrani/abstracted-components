class BackgroundImage {
     static None = "none";
     static Initial = "initial";
     static Inherit = "inherit";

     static new(url) {
          return `url('${url}')`;
     }
}

export default BackgroundImage;
