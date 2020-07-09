describe('Credit card input field', function () {
    var field = document.querySelector('.input-credit-card');
    var cleave = new Cleave(field, {
        creditCard: true
    });

    it('should format fully matched input value', function () {
        cleave.setCleaveRawValue('340000000012345');
        assert.equal(field.value, '3400 000000 12345');
    });

    it('should format partially matched input value', function () {
        cleave.setCleaveRawValue('3400000');
        assert.equal(field.value, '3400 000');
    });

    it('should strip over length value', function () {
        cleave.setCleaveRawValue('34000000001234567890');
        assert.equal(field.value, '3400 000000 12345');
    });

    it('should strip non-numeric characters', function () {
        cleave.setCleaveRawValue('34o012x34');
        assert.equal(field.value, '3401 234');
    });

    it('should allow 19-digit PANs for visa credit card', function () {
        var cleave = new Cleave(field, {
            creditCard:           true,
            creditCardStrictMode: true
        });

        cleave.setCleaveRawValue('4000123400001234567');
        assert.equal(field.value, '4000 1234 0000 1234 567');
    });
});

describe('Credit card type change', function () {
    var field = document.querySelector('.input-credit-card');
    var cardType = '';
    var cleave = new Cleave(field, {
        creditCard:              true,
        onCreditCardTypeChanged: function (type) {
            cardType = type;
        }
    });

    it('should identify uatp', function () {
        cleave.setCleaveRawValue('1000');
        assert.equal(cardType, 'uatp');
    });

    it('should identify amex', function () {
        cleave.setCleaveRawValue('3400');
        assert.equal(cardType, 'amex');
    });

    it('should identify discover', function () {
        cleave.setCleaveRawValue('6011');
        assert.equal(cardType, 'discover');
    });

    it('should identify diners', function () {
        cleave.setCleaveRawValue('300');
        assert.equal(cardType, 'diners');
    });

    it('should identify mastercard', function () {
        cleave.setCleaveRawValue('5100');
        assert.equal(cardType, 'mastercard');
    });

    it('should identify dankort', function () {
        cleave.setCleaveRawValue('5019');
        assert.equal(cardType, 'dankort');
    });

    it('should identify instapayment', function () {
        cleave.setCleaveRawValue('637');
        assert.equal(cardType, 'instapayment');
    });

    it('should identify jcb', function () {
        cleave.setCleaveRawValue('2131');
        assert.equal(cardType, 'jcb15');
    });

    it('should identify jcb', function () {
        cleave.setCleaveRawValue('35');
        assert.equal(cardType, 'jcb');
    });

    it('should identify maestro', function () {
        cleave.setCleaveRawValue('5000');
        assert.equal(cardType, 'maestro');
    });

    it('should identify visa', function () {
        cleave.setCleaveRawValue('400');
        assert.equal(cardType, 'visa');
    });

    it('should identify mir', function () {
        cleave.setCleaveRawValue('2204');
        assert.equal(cardType, 'mir');
    });

    it('should identify unionPay', function () {
        cleave.setCleaveRawValue('6288');
        assert.equal(cardType, 'unionPay');
    });
});
