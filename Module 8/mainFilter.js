'use string';

function filterByType(dataType, ...dataLog) {
    return dataLog.filter(function (type) {
        return typeof type === dataType;
    })
}
var filtered = filterByType('number', 10, 20, 'a', 'b', true, false);
console.log(filtered);
