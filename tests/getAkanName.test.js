
const getAkanName= require("../getAkanName");

test('test getAkanName' , ()=>{
    expect(getAkanName('2022-01-15','male')).toBe('Kwame');
});