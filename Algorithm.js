//Test images
const imgpoolurl = [
    "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.unsplash.com/photo-1572003818138-19cf96ee15e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVkJe3K_rQmG7hzoyOUkYuBU1fMQ1KJxZMQ&usqp=CAU",
    "https://img.freepik.com/photos-gratuite/ciel-fantastique_90839-278.jpg?size=626&ext=jpg",
    "https://images.unsplash.com/photo-1497465135434-9dc15238075a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pZ2h0JTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.unsplash.com/photo-1569141510930-5a09d247488f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0YXJyeSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.unsplash.com/photo-1591708370135-f2fac858e97b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://media.istockphoto.com/photos/aerial-view-dramatic-sunset-and-sunrise-sky-nature-background-with-picture-id1183953762?k=20&m=1183953762&s=612x612&w=0&h=EdMjj1ro4jVeIlr0Z0Gw-vLC_lAegmITSKt5duRg7HU=",
    "https://images.unsplash.com/photo-1607969391576-48f9021ded30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5JTIwbmlnaHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1587105020968-1cca5fdcfcec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2t5JTIwbmlnaHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5JTIwbmlnaHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1572191783453-62f99a6055ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwbmlnaHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2t5JTIwZGF5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1590198513019-7cc432df1e6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwZGF5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1566918583512-0c3dfc0d0bae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5JTIwZGF5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1576067389322-41215c09eb80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNreSUyMGRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1559334641-7448ffca69e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNreSUyMGRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1596188126441-41279e8f5e46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMGRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1600152997022-56a2b234bfc4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNreSUyMGRheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];
var imgpoolload=[];

//Wait for images to load and launch the guess function
var imageloaded = 0;
imgpoolurl.forEach((e) => {
    imgpoolload.push(new Image());
    imgpoolload[imgpoolload.length-1].crossOrigin = "Anonymous";
    imgpoolload[imgpoolload.length-1].onload = () => {
        imageloaded == imgpoolurl.length-1 ?  imgpoolload.forEach((e) => {guessNightOrDayForAnImageUrl(e)}) : imageloaded++;
    };
    imgpoolload[imgpoolload.length-1].src = e;
});

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
        input: {r: 0, g: 0.80, b:0.49, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 0.49, b:0.80, a:1 },
        output:[0]
    },
    {
        input: {r: 0, g: 0, b:0, a:1 },
        output:[0]
    },
];
network.train(trainingdata);

//display the neural network
displayneuralnetwork = brain.utilities.toSVG(network);
document.getElementById("displaynetwork").innerHTML = displayneuralnetwork;

//Functions
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

function guessNightOrDayForAnImageUrl (imageToGuess){

    var imageUrl = imageToGuess.src;
    
    //Creating the div subblock for the new image
    const subblock= document.createElement('div');
    subblock.id='subblock'+imageUrl;
    document.getElementById('mainblock').appendChild(subblock);

    //display the test image
    const imagedisplay = document.createElement('img');
    imagedisplay.id="imagedisplay";
    imagedisplay.src = imageUrl;
    document.getElementById(subblock.id).appendChild(imagedisplay);

    //Prepare the canvas   
    htmlCanvas = document.createElement('canvas');
    document.getElementById(subblock.id).appendChild(htmlCanvas);
    htmlCanvasContext = htmlCanvas.getContext("2d");
    htmlCanvasContext.drawImage(imageToGuess, 0,0,32,32);

    //Get pixels data, guess and display results
    var pixelsRGBAData = htmlCanvasContext.getImageData(0, 0, 32, 32);
    resultdisplay=document.createElement('div');
    document.getElementById(subblock.id).appendChild(resultdisplay);
    guessAndDisplayNightOrDayBasedOnPixels(pixelsRGBAData,resultdisplay);
}

