const { doesNotMatch } = require("assert");

const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

it('test', (done)=> {
    uppercase('test', (str)=> {
        try{
            expect(str).toBe('TEST');
            done()
        } catch (error) {
            done(error);
        }
    })
})
