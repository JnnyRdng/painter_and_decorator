const assert = require("assert");
const Decorator = require("../decorator.js");
const Room = require("../room.js");
const Paint = require("../paint.js");

describe("Decorator", function () {
    let decorator, paint1, paint2, emptyPaint, bigRoom, smallRoom;
    beforeEach(function () {
        decorator = new Decorator();
        paint1 = new Paint(12);
        paint2 = new Paint(10);
        emptyPaint = new Paint(0);
        bigRoom = new Room(2000);
        smallRoom = new Room(15);
    });
    it("should have an empty paint stock", function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });
    it("should add a can of paint to stock", function () {
        decorator.addCan(paint1);
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paint1]);
    });
    it("should have total litres in stock", function () {
        decorator.addCan(paint1);
        decorator.addCan(paint2);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 22);
    });
    it("should be able to paint small room", function () {
        decorator.addCan(paint1);
        decorator.addCan(paint2);
        const actual = decorator.canPaint(smallRoom);
        assert.strictEqual(actual, true);
    });
    it("should not be able to paint big room", function () {
        decorator.addCan(paint1);
        decorator.addCan(paint2);
        const actual = decorator.canPaint(bigRoom);
        assert.strictEqual(actual, false);
    });
    it("can paint small room with paint left", function () {
        decorator.addCan(paint1);
        decorator.addCan(paint2);
        decorator.paint(smallRoom);
        let actual = decorator.totalLitres();
        assert.strictEqual(actual, 7);
        actual = smallRoom.painted;
        assert.strictEqual(actual, true);
    });
    it("can remove empty paint cans from stock", function () {
        decorator.addCan(emptyPaint);
        decorator.addCan(paint1);
        decorator.addCan(paint2);
        decorator.removeEmpty(1);
        const actual = [paint1, paint2];
        assert.deepStrictEqual(actual, decorator.stock);
    })
});