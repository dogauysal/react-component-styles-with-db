export default function ConvertCssToString(activeStyleNames,allStyles) {

    var _css = "";

    for (const [i, styleName] of activeStyleNames.entries()) {

        for (const [j, styles] of allStyles.entries()) {
            const style  = styles[styleName];
            if(style && style.styleList.length > 0) {

                
                switch (style.type) {
                    case "class":
                        _css += "."
                        break;
                    case "id":
                        _css += "#"
                    default:
                        break;
                }

                _css += `${styleName} {\n`; 
                for(const [k, __style] of style.styleList.entries()) {
                    _css += "\t" +  __style + ";\n";
                } 
                _css += "}\n";
            }
        }
    }
    
    return _css;
}
