let o = {gabi: 2};
function isEmpty(object){
    for(let key in object){
        if(object.hasOwnProperty(key) || object.key == false){
            return false;
        }
    }
    return true;
}

console.log(isEmpty(o));