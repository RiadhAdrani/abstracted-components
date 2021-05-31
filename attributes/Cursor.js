import Default from "./Default";
import PropUtil from "./PropUtil";

class Cursor extends Default {
     static Alias = "alias";
     static AllScroll = "all-scroll";
     static Cell = "cell";
     static ContextMenu = "context-menu";
     static ColResize = "col-resize";
     static Copy = "copy";
     static Crosshair = "crosshair";
     static EResize = "e-resize";
     static EwResize = "ew-resize";
     static Grab = "grab";
     static Grabbing = "grabbing";
     static Help = "help";
     static Move = "move";
     static NResize = "n-resize";
     static NeResize = "ne-resize";
     static NeswResize = "nsew-resize";
     static NsResize = "ns-resize";
     static NwResize = "nw-resize";
     static NwseResize = "nwse-resize";
     static NoDrop = "no-drop";
     static NotAllowed = "not-allowed";
     static Pointer = "pointer";
     static Progress = "progress";
     static RowResize = "row-resize";
     static SResize = "s-resize";
     static SeResize = "se-resize";
     static SwResize = "sw-resize";
     static Text = "text";
     static VerticalText = "vertical-text";
     static WResize = "w-resize";
     static Wait = "wait";
     static ZoomIn = "zoom-in";
     static ZoomOut = "zoom-out";

     static valuesList = [
          this.Alias,
          this.AllScroll,
          this.Cell,
          this.ContextMenu,
          this.ColResize,
          this.Copy,
          this.Crosshair,
          this.EResize,
          this.EwResize,
          this.Grab,
          this.Grabbing,
          this.Help,
          this.Move,
          this.NResize,
          this.NeResize,
          this.NwResize,
          this.NoDrop,
          this.NotAllowed,
          this.Pointer,
          this.Progress,
          this.RowResize,
          this.SResize,
          this.SeResize,
          this.SwResize,
          Text,
          this.VerticalText,
          this.WResize,
          this.Wait,
          this.ZoomIn,
          this.ZoomOut,
     ].concat(this.defaultValuesList);

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default Cursor;
