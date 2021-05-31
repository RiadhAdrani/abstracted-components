import PropUtil from "./PropUtil";

class FlexDirection {
     static Row = "row";
     static RowReverse = "row-reverse";
     static Column = "column";
     static ColumnReverse = "column-reverse";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Row,
          this.RowReverse,
          this.Column,
          this.ColumnReverse,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty = (prop, backup, backup2) => {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     };
}

export default FlexDirection;
