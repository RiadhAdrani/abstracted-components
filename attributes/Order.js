import PropUtil from "./PropUtil";

class Order {
     static Initial = "initial";
     static Inherit = "inherit";
     static None = "none";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isOrderProperty(
               prop,
               [this.Initial, this.Inherit, this.None],
               backup,
               backup2
          );
     }
}

export default Order;
