export default function ConvertCssToString(activeClassNames,allStyles) {

    var _css = "";

    for (const [i, className] of activeClassNames.entries()) {

        for (const [j, styles] of allStyles.entries()) {
            const style  = styles[className];
            if(style && style.length > 0) {

                _css += `.${className} {\n`; 
                for(const [k, __style] of style.entries()) {
                    _css += "\t" +  __style + ";\n";
                } 
                _css += "}\n";
            }
        }
    }

    console.log(_css);

    return _css;
}

// var styleStr = "";
// for(var i in cssjson){
//     styleStr += i + " {\n"
//     for(var j in cssjson[i]){
//         styleStr += "\t" + j + ":" + cssjson[i][j] + ";\n"     
//     }
//     styleStr += "}\n"  
// }