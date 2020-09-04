var image = null;
var grayImage = null;
var redImage = null;
var rainbowImage = null;
var blurImage = null;
var imgCanvas;

function loadImage(){
  var file=document.getElementById("file1");
  imgCanvas=document.getElementById("can");
  image=new SimpleImage(file);
  grayImage=new SimpleImage(file);
  redImage=new SimpleImage(file);
  rainbowImage=new SimpleImage(file);
  blurImage=new SimpleImage(file);
  image.drawTo(imgCanvas);
  
}

function makeGrayScale(){
  if(image==null||!image.complete()){
    alert("Image has not been loaded yet!");
    return;
  }
  for(var pixel of grayImage.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas=document.getElementById("can");
  grayImage.drawTo(canvas);
}

function clearcanvas(){
  var ctx=imgCanvas.getContext("2d");
  ctx.clearRect(0,0,imgCanvas.width,imgCanvas.height);
}

function resetImage(){
  if(image==null || !image.complete()){
    alert("Image has not been loaded yet!");
    return;
  }
  imgCanvas=document.getElementById("can");
  image.drawTo(imgCanvas);
}

function makeRed(){
  if(image==null||!image.complete()){
    alert("Image has not been loaded yet!");
    return;
  }
  for(var pixel of redImage.values())
  {
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
        pixel.setRed(avg*2);
        pixel.setGreen(0);
        pixel.setBlue(0); 
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((avg*2) - 255);
      pixel.setBlue((avg**2) -255); 
    }
  }
  imgCanvas=document.getElementById("can");
  redImage.drawTo(imgCanvas);
}

function makeRainbow(){
  if(image==null || !image.complete()){
    alert("Image has not been loaded yet!");
    return;
  }
  var height=rainbowImage.getHeight();
  for(var pixel of rainbowImage.values()){
    var y=pixel.getY();
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(y < (height/7)){
      if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0); 
      }else{
          pixel.setRed(255);
          pixel.setGreen((2*avg)-255);
          pixel.setBlue((2*avg)-255); 
      }     
  }
  else if(y >= (height/7) && y < (2*height/7)){
    if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0); 
      }else{
          pixel.setRed(255);
          pixel.setGreen((1.22*avg)-51);
          pixel.setBlue((2*avg)-255); 
      }     
  } 
  else if(y >= (2*height/7) && y < (3*height/7)){
    if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0); 
      }else{
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue((2*avg)-255); 
      }     
  }
  else if(y >= (3*height/7) && y < (4*height/7)){
    if(avg<128){
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0); 
      }else{
          pixel.setRed((2*avg)-255);
          pixel.setGreen(255);
          pixel.setBlue((2*avg)-255); 
      }     
  }  
  else if(y >= (4*height/7) && y < (5*height/7)){
    if(avg<128){
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg); 
      }else{
          pixel.setRed((2*avg)-255);
          pixel.setGreen((2*avg)-255);
          pixel.setBlue(255); 
      }     
  }
  else if(y >= (5*height/7) && y < (6*height/7)){
    if(avg<128){
          pixel.setRed(0.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg); 
      }else{
          pixel.setRed((1.2*avg)-51);
          pixel.setGreen((2*avg)-255);
          pixel.setBlue(255); 
      }     
  } 
  else{
    if(avg<128){
          pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg); 
      }else{
          pixel.setRed((0.4*avg)+153);
          pixel.setGreen((2*avg)-255);
          pixel.setBlue(255); 
      }     
  }  
  }
  imgCanvas=document.getElementById("can");
  rainbowImage.drawTo(imgCanvas);  
}

function makeBlur(){
   var opblurImage = new SimpleImage(image.width, image.height); 
   if(image==null || !image.complete()){
    alert("Image has not been loaded yet!");
    return;
  }
  for(var pixel of image.values()){
    var random = Math.random();
    var x = pixel.getX();
    var y = pixel.getY();
    if(random < 0.5){
      opblurImage.setPixel(x,y,pixel)
    }
    else{
      var newPixel = findPixel(x,y,10);
      opblurImage.setPixel(x,y,newPixel);
    }
  }
  imgCanvas=document.getElementById("can");
  opblurImage.drawTo(imgCanvas);  
}
function findPixel(x,y,dist){
  var h = image.getHeight();
  var w = image.getWidth();
  var nx = x + Math.random()*dist - (dist/2);
  var ny = y + Math.random()*dist - (dist/2);
  var validnx = validCoordinate(nx,w);
  var validny = validCoordinate(ny,h);
  var newpixel = image.getPixel(validnx,validny);
  return newpixel;
}
function validCoordinate(pt,len){
  if(pt < 0)
    return 0;
  if(pt >= len)
    return len-1;
  return pt;
}