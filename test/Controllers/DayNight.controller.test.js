
const TESTFUNCTION_CheckIfImageExistsAndGetPixels = require('../../App/Controllers/DayNight.controller.js').TESTFUNCTION_CheckIfImageExistsAndGetPixels;
const CheckUrlAndExecuteService = require('../../App/Controllers/DayNight.controller.js').CheckUrlAndExecuteService;
const assert = require('chai').assert;
const httpMocks = require('node-mocks-http');
const EventEmitter = require('events');
const TRUEIMAGEURL = "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const TRUEIMAGEPIXELS = [ 25872573, 31676702, 43645321, 47812500 ];
const FALSEIMAGEURL = "https://falseimageurl";
const DAYIMAGEURL = "https://images.unsplash.com/photo-1572003818138-19cf96ee15e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
const NIGHTIMAGEURL = "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pZ2h0JTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

describe("Our Controller",function(){
    this.timeout(5000); 
    it('Says when an image is valid', async ()=>{
        return TESTFUNCTION_CheckIfImageExistsAndGetPixels(TRUEIMAGEURL).then((pixelsdata)=>{
            const pixels = pixelsdata[0]
            const datalength = pixelsdata[1]

            assert.equal(datalength, 750000)
            assert.equal(pixels[0],TRUEIMAGEPIXELS[0])
            assert.equal(pixels[1],TRUEIMAGEPIXELS[1])
            assert.equal(pixels[2],TRUEIMAGEPIXELS[2])
            assert.equal(pixels[3],TRUEIMAGEPIXELS[3])
        }).catch((error)=>{throw error})

    })
    it('Says when an image is not valid', async ()=>{
        return TESTFUNCTION_CheckIfImageExistsAndGetPixels(FALSEIMAGEURL).then((pixelsdata)=>{
            throw error
        }).catch((error)=>{
            assert.equal(error,"400")
        })
    })
    it('Can use our Service functions to say when an image is Day', (done) => {
        var request  = httpMocks.createRequest({method: 'GET',url: "/?ImageUrl="+encodeURIComponent(DAYIMAGEURL)});
        var response = httpMocks.createResponse({eventEmitter: EventEmitter});
        response.on('end', () => {
            let data = response._getData();
            assert.equal(data[0],'Day')
            done();
        })
        CheckUrlAndExecuteService(request, response)
    })
    it('Can use our Service functions to say when an image is Night', (done) => {
        var request  = httpMocks.createRequest({method: 'GET',url: "/?ImageUrl="+encodeURIComponent(NIGHTIMAGEURL)});
        var response = httpMocks.createResponse({eventEmitter: EventEmitter});
        response.on('end', () => {
            let data = response._getData();
            assert.equal(data[0],'Night')
            done();
        })
        CheckUrlAndExecuteService(request, response)
    })

})
