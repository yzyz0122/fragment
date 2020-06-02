let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'View UI project';
    window.document.title = title;
};

util.deepCopy = function(obj){
        var objArray = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === "object") {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === "object") {
                        objArray[key] = util.deepCopy(obj[key]);
                    } else {
                        objArray[key] = obj[key];
                    }
                }
            }
        }
        return objArray;
}


export default util;
