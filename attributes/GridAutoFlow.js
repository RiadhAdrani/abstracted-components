import PropUtil from "./PropUtil";

class GridAutoFlow{

    static Row = "row";
    static Columns = "column";
    static Dense = "dense";
    static RowDense = "row dense";
    static ColumnDense = "column dense";

    static valuesList = [this.Row,this.Columns, this.ColumnDense,this.Dense,this.RowDense]

    static checkProperty(prop, backup, backup2){
        return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
    }

}

export default GridAutoFlow;