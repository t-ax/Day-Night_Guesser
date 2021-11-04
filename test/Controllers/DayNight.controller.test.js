
const TESTFUNCTION_CheckIfImageExistsAndGetPixels = require('../../App/Controllers/DayNight.controller.js').TESTFUNCTION_CheckIfImageExistsAndGetPixels;
const assert = require('chai').assert;
const TRUEIMAGEURL = "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const TRUEIMAGEPIXELS = [500, 375, 4];
const FALSEIMAGEURL = "https://falseimageurl";

describe("Our Controller",()=>{
    it('Says when an image is valid',()=>{
        return TESTFUNCTION_CheckIfImageExistsAndGetPixels(TRUEIMAGEURL).then((pixels)=>{
            assert.equal(pixels[0],TRUEIMAGEPIXELS[0])
            assert.equal(pixels[1],TRUEIMAGEPIXELS[1])
            assert.equal(pixels[2],TRUEIMAGEPIXELS[2])
        }).catch((error)=>{throw error})

    })
    it('Says when an image is not valid',()=>{
        return TESTFUNCTION_CheckIfImageExistsAndGetPixels(FALSEIMAGEURL).then((pixels)=>{
            throw error
        }).catch((error)=>{
            assert.equal(error,"400")
        })
    })

})
