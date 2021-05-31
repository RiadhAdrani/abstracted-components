import PropUtil from "./PropUtil";

class FontVariantCaps {
     static Normal = "normal";
     static SmallCaps = "small-caps";
     static AllSmallCaps = "all-small-caps";
     static PetiteCaps = "petite-caps";
     static AllPetiteCaps = "all-petite-caps";
     static Unicase = "unicase";
     static TitlingCaps = "titling-caps";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Normal,
          this.SmallCaps,
          this.AllSmallCaps,
          this.PetiteCaps,
          this.AllPetiteCaps,
          this.Unicase,
          this.TitlingCaps,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default FontVariantCaps;
