import PropUtil from "./PropUtil";

class FontWeight {
    static _100 = "100";
    static _200 = "200";
    static _300 = "300";
    static _400 = "400";
    static _500 = "500";
    static _600 = "600";
    static _700 = "700";
    static _800 = "800";
    static _900 = "900";
    static Normal = "normal";
    static Bold = "bold";
    static Bolder = "bolder";
    static Lighter = "lighter";
    static Initial = "initial";
    static Inherit = "inherit";

    static valuesList = [
        this.Normal,
        this.Bold,
        this.Bolder,
        this.Lighter,
        this.Initial,
        this.Inherit,
        this._100,
        this._200,
        this._300,
        this._400,
        this._500,
        this._600,
        this._700,
        this._800,
        this._900,
    ];

    static checkProperty(prop, backup, backup2 = this.Initial) {
        if (/^[1-9]00$/.test(prop)) return prop;
        if (/^[1-9]00$/.test(backup)) return backup;
        if (/^[1-9]00$/.test(backup2)) return backup2;

        return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
    }
}

export default FontWeight;
