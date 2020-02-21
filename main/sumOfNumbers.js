
module.exports = {
    sum(a, b) {

        if (a == "" || b == "") {
            return 0;
        }

        if (typeof (a) === 'undefined' || typeof (b) === 'undefined') {
            return 0;
        }

        if (isNaN(a) || isNaN(b)) {
            return 0;
        }

        var c = a + b
        return c;
    }
}
