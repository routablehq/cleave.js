describe('Date input field', function () {
    var field = document.querySelector('.input-date');
    var cleave = new Cleave(field, {
        date: true
    });

    it('should format fully matched input value', function () {
        cleave.setCleaveRawValue('11041965');
        assert.equal(field.value, '11/04/1965');
    });

    it('should format partially matched input value', function () {
        cleave.setCleaveRawValue('1207');
        assert.equal(field.value, '12/07/');
    });

    it('should correct large date to 31', function () {
        cleave.setCleaveRawValue('33');
        assert.equal(field.value, '31/');
    });

    it('should correct large date to add leading 0', function () {
        cleave.setCleaveRawValue('4');
        assert.equal(field.value, '04/');
    });

    it('should correct large month to 12', function () {
        cleave.setCleaveRawValue('1214');
        assert.equal(field.value, '12/12/');
    });

    it('should correct large month to add leading 0', function () {
        cleave.setCleaveRawValue('127');
        assert.equal(field.value, '12/07/');
    });
});

describe('Date input field with pattern', function () {
    var field = document.querySelector('.input-date');
    var cleave = new Cleave(field, {
        date:        true,
        datePattern: ['Y', 'm', 'd']
    });

    it('should format fully matched input value', function () {
        cleave.setCleaveRawValue('19650411');
        assert.equal(field.value, '1965/04/11');
    });
});

describe('ISO date', function () {
    var field = document.querySelector('.input-date');
    var cleave = new Cleave(field, {
        date:        true,
        datePattern: ['m', 'Y', 'd']
    });

    it('should get correct ISO date', function () {
        cleave.setCleaveRawValue('04196511');
        assert.equal(cleave.getISOFormatDate(), '1965-04-11');
    });
});
