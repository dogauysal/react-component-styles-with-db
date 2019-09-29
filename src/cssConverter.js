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
    
    return _css;
}
