class GridTemplateAreas{

    static new(...rowArrays){
        let output = "";

        for(let i = 0; i < rowArrays.length; i++){
            for (let j = 0; j < rowArrays[i].length; j++){
                rowArrays[j][i] = rowArrays[j][i].split(" ").join("").trim();
            }
            output += `"${rowArrays[i].join(" ")}"`;
        }

        return output;
    }

}

export default GridTemplateAreas;