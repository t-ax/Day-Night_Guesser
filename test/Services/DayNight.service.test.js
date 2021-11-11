
const IsTheImageDayOrNight = require('../../App/Services/DayNight.service.js').IsTheImageDayOrNight;
const assert = require('chai').assert;
const DAYIMAGE_PIXELS = [ 188856532, 244499182, 300412147, 382500000 ]
const DAYIMAGE_DATALENGTH = 6000000
const NIGHTIMAGE_PIXELS = [ 18365516, 28225256, 43884637, 171615000 ]
const NIGHTIMAGE_DATALENGTH = 2692000

describe("Our Service",()=>{
    it('Says when an image is Day',()=>{
        let result = IsTheImageDayOrNight([DAYIMAGE_PIXELS, DAYIMAGE_DATALENGTH]);
        assert.equal(result[0],'Day')
    })
    it('Says when an image is Night',()=>{
        let result = IsTheImageDayOrNight([NIGHTIMAGE_PIXELS, NIGHTIMAGE_DATALENGTH]);
        assert.equal(result[0],'Night')
    })
})