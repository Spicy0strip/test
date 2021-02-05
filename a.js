function reg (num) {
    var str = String(num);
    var index = str.search(/\./i);
    if (index !== -1) {
        var arr = [];
        var index = str.search(/\./i);
        arr[0] = str.slice(0, index);
        arr[1] = str.slice(index + 1);
        arr[0] = arr[0].replace(/\d(?<=\d{3})/g, (res) => ',' + res);
        arr[1] = arr[1].replace(/(?=\d{3})\d/g, (res) => res + ',');
        str = arr[0] + arr[1];
    } else {
        str = str.replace(/\d(?<=\d{3})/g, (res) => ',' + res);
    }
    return str;
}

console.log(reg(1736152097.88));