
const chai = require('chai') , chaiHttp = require('chai-http'); chai.use(chaiHttp);
const expect = chai.expect; const assert = chai.assert;
const TRUEIMAGEURL = "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

//init our app for the test
const app = require('express')();
require("../../App/Routes/DayNight.routes")(app);


describe("Our Routes",()=>{
    it('Can use our controller functions when it receives a URL', (done)=>{
        chai.request(app).get("/api?ImageUrl="+encodeURIComponent(TRUEIMAGEURL)).then((res) => {
            expect(res.status).to.equal(200);
            done()
        }).catch(done)
    })
})