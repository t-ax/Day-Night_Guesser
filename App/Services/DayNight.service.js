
const brain = require('../../brainJS_module/brain')
//AI Algorithm
const network = new brain.NeuralNetwork();
const trainingdata = [
    {
        input: {r: 0, g: 1, b:1, a:1 },
        output:[1]
    },
    {
        input: {r: 0, g: 0.51, b:0.51, a:1 },
        output:[1]
    },
    {
        input: {r: 0, g: 0.49, b:0.49, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 1, b:0.40, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 0.8, b:0.40, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 0.6, b:0.40, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 0.40, b:1, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 0.40, b:0.8, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 0.40, b:0.6, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 0, b:0, a:1 },
        output:[0]
    },
    {
        input: {r: 1, g: 0, b:0, a:1 },
        output:[0]
    },
];
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWbDMtDygvRxsKqktoVTVjyw-wFhKqdYcAA&usqp=CAU

guessAndDisplayNightOrDayBasedOnPixels = (pixelsRGBAData, resultdisplay) =>{
    const testdata=[0,0,0,0];
    var datalength = pixelsRGBAData.data.length;
    for(var i=0; i < datalength; i+=4){
        testdata[0]+= pixelsRGBAData.data[i]; //R
        testdata[1]+= pixelsRGBAData.data[i+1]; //G
        testdata[2]+= pixelsRGBAData.data[i+2]; //B
        testdata[3]+= pixelsRGBAData.data[i+3]; //A
    }
    //console.log({r: testdata[0]/datalength, g: testdata[1]/datalength, b:testdata[2]/datalength, a:testdata[3]/datalength});
   
    result=network.run({r: testdata[0]/datalength, g: testdata[1]/datalength, b:testdata[2]/datalength, a:testdata[3]/datalength});
    let certainty = result[0].toFixed(2)*100;
    resultdisplay.innerHTML= result < 0.5 ? "Night "+(100-certainty)+"%" : "Day "+certainty+"%";
    
}

exports.IsTheImageDayOrNight = (pixelsdata) => {
    const pixels = pixelsdata[0];
    const datalength = pixelsdata[1];

    network.train(trainingdata, {iterations: 5000, errorTresh: 0.0001 });
    result=network.run({r: pixels[0]/datalength, g: pixels[1]/datalength, b:pixels[2]/datalength, a:pixels[3]/datalength});
    
    let certainty = result[0].toFixed(2)*100;
    return result < 0.5 ? ["Night",(100-certainty)+"%"] : ["Day",certainty+"%"];
}