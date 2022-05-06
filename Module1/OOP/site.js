if (!Array.prototype.includes2) {
    Array.prototype.includes2 = function (keyword) {
        // return this.indexOf(keyword) != -1;
        let len = this.length;
        for (let i = 0; i < len; i++) {
            if (this[i] === keyword)
                return true;
        }
        return false;
    }
}

if (!Array.prototype.includesIndex) {
    Array.prototype.includesIndex = function (keyword) {
        // return this.indexOf(keyword) != -1;
        let len = this.length;
        for (let i = 0; i < len; i++) {
            if (this[i] === keyword)
                return i;
        }
        return -1;
    }
}

let arr = [1, 4, 6, 7, 8, 9, 10];
console.log(arr.includesIndex(77));