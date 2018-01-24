const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
        });
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });    

    it('should square a number', () => {
        var res = utils.square(3);
    
        expect(res).toBeA('number').toBe(9);
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBeA('number').toBe(25);
            done();
        });
    });    

});


it('should set firstName and lastName', () => {
    var user = {
        age: 25,
        location: 'Maryland'
    };

    var result = utils.setName(user, 'Aubrey Tharpe');

    expect(result).toBeA('object').toInclude({
        firstName: 'Aubrey',
        lastName: 'Tharpe'
    });
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toExclude({
//         age: 23
//     })
// });
