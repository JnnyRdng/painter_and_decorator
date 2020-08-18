const assert = require('assert');
const Paint = require('../paint');

describe("Paint (as in can)", function () {
    let paint;
    beforeEach(function () {
        paint = new Paint(10);
    });

    it("should have an amount of paint", function () {
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    });

    it("should be able to check if emty", function () {
        const actual = paint.isEmpty();
        assert.strictEqual(actual, false);
    });

    it("should be able to empty itself", function () {
        paint.empty();
        const actual = paint.isEmpty();
        assert.strictEqual(actual, true);
    });
});