const Paint = function (litres) {
    this.litres = litres;
}

Paint.prototype.isEmpty = function () {
    return this.litres <= 0;
}

Paint.prototype.empty = function () {
    this.litres = 0;
}

module.exports = Paint;