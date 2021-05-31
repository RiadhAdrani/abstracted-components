class GridTemplate{

    static new(rows, columns, areas){
        return {
            rows: `${rows}`,
            columns: `${columns}`,
            areas: `${areas}`
        }
    }

}

export default GridTemplate;