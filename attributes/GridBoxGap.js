import PropUtil from "./PropUtil";

class GridBoxGap{

    static checkProperty(prop, backup, backup2){
        return PropUtil.isLengthProperty(prop, [], backup, backup2);
    }

}

export default GridBoxGap;