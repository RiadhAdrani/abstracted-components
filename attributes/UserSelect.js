import PropUtil from "./PropUtil";

class UserSelect {
     static Auto = "auto";
     static None = "none";
     static Text = "text";
     static All = "all";

     static checkProperty(props, backup, backup2) {
          return PropUtil.isProperty(
               props,
               [this.Auto, this.None, this.Text, this.All],
               backup,
               backup2
          );
     }
}

export default UserSelect;
