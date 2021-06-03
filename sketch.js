
var backgroundImg,backgroundImg2,backgroundImg3, backgroundImg4,backgroundImg5,backgroundImg6,backgroundImg7
function preload(){
    backgroundImg=loadImage("sunrise1.png")


}

function setup(){
    createCanvas(800,600)
}

function draw(){
    background(backgroundImg)
    sun()
    sun2()
    sun3()
    sun4()
    sun5()
    sun6()
    sun7()
    
    sun10()
    sun11()
    
}

async function sun (){
var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
var responseJSON= await response.json()
var datetime=responseJSON.datetime
var hour=datetime.slice(11,13);

if(hour>=06 && hour<=24){
    backgroundImg=loadImage("sunrise2.png")
    
    
}




}

async function sun2(){
    var response1=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON1=await response1.json()
    var datetime=responseJSON1.datetime;
    var hour1=datetime.slice(11,13)

    if(hour1>=06 && hour1<=24){
        backgroundImg=loadImage("sunrise3.png")
    }
}

async function sun3(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunrise4.png")
    }
}

async function sun4(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunrise5.png")
    }
}

async function sun5(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunrise6.png")
    }
}

async function sun6(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunset7.png")
    }
}

async function sun7(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunset8.png")
    }
}

async function sun8(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunset9.png")
    }
}

async function sun9(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunset10.png")
    }
}

async function sun10(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunset11.png")
    }
}

async function sun11(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)

    if(hour>=06 && hour<=24){
        backgroundImg=loadImage("sunset12.png")
    }
}