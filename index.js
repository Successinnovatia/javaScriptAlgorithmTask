function convertFahrToCelcius(F){
    var C = (F-32)*(5/9)
    var x = C.toFixed(4)
    let inputtype = Object.prototype.toString.call(F);
    if (inputtype==="[object Number]"|| (inputtype==="[object String]" && !isNaN(F))){
        return x}
        else if (Array.isArray(F)===true){
        return  `${JSON.stringify(F)}is not a valid number but an Array`}
        else if (Object.prototype.toString.call(F)){
        return `${JSON.stringify(F)} is not a valid number but an Object`}
        /*else if (typeof F===Boolean){
                return `${F} is not a valid number but a ${Boolean}`}
        else if (typeof F===String){
            return `${F} is not a valid number but a ${String}`}*/
        }
        console.log(convertFahrToCelcius({temp:0}));


        function checkYuGiOh(){
            var output = [];
            for (var count=1; count<101; count ++){
                if (count % 2===0 && count % 3===0 && count % 5===0){
                    output.push("Yu-Gi-Oh");
                }
                else if(count % 2===0 && count % 3 ===0){
                    output.push("Yu-Gi");
                }
                else if (count % 2===0 && count % 5===0){
                    output.push("Yu-Oh");
                }
                else if(count % 3 ===0 && count % 5 ===0){
                    output.push("Gi-Oh");
                }
                else if (count % 2 ===0){
                    output.push("Yu");
                }
                else if (count % 3 ===0){
                    output.push("Gi");
                }
                else if (count % 5===0){
                    output.push("Oh");
                }
                else if (Object.prototype.toString()){
                    output.push(`invalid parameter: ${JSON.stringify(count)}`)
                }
                else {output.push(count);}
            }
            console.log(output);
        }
        checkYuGiOh(5)