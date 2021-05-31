import PropUtil from "./PropUtil";

class Display {
  static Inline = "inline";
  static Block = "block";
  static Contents = "contents";
  static Flex = "flex";
  static Grid = "grid";
  static InlineBlock = "inline-block";
  static InlineFlex = "inline-flex";
  static InlineGrid = "inline-grid";
  static InlineTable = "inline-table";
  static ListItem = "list-item";
  static RunIn = "run-in";
  static Table = "table";
  static TableCaption = "table-caption";
  static TableColumnGroup = "table-column-group";
  static TableHeaderGroup = "table-header-group";
  static TableFooterGroup = "table-footer-group";
  static TableRowGroup = "table-row-group";
  static TableCell = "table-cell";
  static TableColumn = "table-column";
  static TableRow = "table-row";
  static None = "none";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [
    "inline",
    "block",
    "contents",
    "flex",
    "grid",
    "inline-block",
    "inline-flex",
    "inline-grid",
    "inline-table",
    "list-item",
    "run-in",
    "table",
    "table-caption",
    "table-column-group",
    "table-header-group",
    "table-footer-group",
    "table-row-group",
    "table-cell",
    "table-column",
    "table-row",
    "none",
    "initial",
    "inherit",
  ];

  static checkProperty = (prop, backup = this.Inline) => {
    return PropUtil.isProperty(prop, this.valuesList, backup, this.Inherit);
  };
}

export default Display;
