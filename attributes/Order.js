import PropUtil from "./PropUtil";

class Order {
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isOrderProperty(prop, [this.Initial, this.Inherit], backup, backup2);
     }
}

export default Order;
