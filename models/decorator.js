const Decorator = function () {
    this.stock = [];
};

Decorator.prototype.addCan = function (paint) {
    this.stock.push(paint);
};


Decorator.prototype.totalLitres = function () {
    let total = 0;
    for (let paint of this.stock) {
        total += paint.litres;
    };
    return total;
};


Decorator.prototype.canPaint = function (room) {
    let totalPaint = this.totalLitres();
    return totalPaint >= room.area;
};


Decorator.prototype.paint = function (room) {
    if (this.canPaint(room)) {
        room.paint();
        let toBePainted = room.area;
        let i = 0;
        while (toBePainted > 0) {
            if (this.stock[i].litres < toBePainted) {
                toBePainted -= this.stock[i].litres;
                this.stock[i].empty();
                i += 1;
            } else {
                this.stock[i].litres -= toBePainted;
                toBePainted = 0;
            }
        };
        this.removeEmpty(i);

        // for (let can in this.stock) {
        //     if (toBePainted > 0) {
        //         if toBePainted >= can.litres) {
        //             toBePainted -= can.litres;
        //             can.empty();
        //         } else {
        //             can.litres -= toBePainted;
        //             toBePainted = 0
        //         }
        //     }
        // }
    };
};


Decorator.prototype.removeEmpty = function (number) {
    this.stock.splice(0, number);
};

// Decorator.prototype.removeEmpties() {
//     let keepCans = [];
//     for (let can in this.stock) {
//         if (!can.empty()) {
//             keepCans.push(can);
//         }
//     }
//     this.stock = keepCans;
// }

module.exports = Decorator;