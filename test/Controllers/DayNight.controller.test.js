
const CheckIfImageCanLoad = require('../../App/Controllers/DayNight.controller.js').CheckIfImageCanLoad;
var assert = require('assert');
const TRUEIMAGEURL = "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const FALSEIMAGEURL = "https://falseimageurl";

describe("Our Controller",()=>{
    it('Works when an image is valid',()=>{
        return CheckIfImageCanLoad(TRUEIMAGEURL).then((ImageUrl)=>{
            assert.equal(ImageUrl,TRUEIMAGEURL+"aef")
        }).catch((error)=>{
            throw error;
            // console.log(error)
        })

    })
    it('Says when an image is not valid',()=>{
        return CheckIfImageCanLoad(FALSEIMAGEURL).then((ImageUrl)=>{
            throw error;
        }).catch((error)=>{
            assert.equal(ImageUrl,FALSEIMAGEURL)
        })
    })
})
