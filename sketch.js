function setup() {
  createCanvas(400, 400);
textAlign(CENTER,CENTER);
  text('click for cheese', 200, 200);
}



function cheeseArtist(sliceX, sliceY, size, holecount){
let holepunch = 1;


   rect(sliceX, sliceY, size, size);   
  
  for ( holepunch = 0; holepunch < holecount; holepunch+=1){
    
  let x = random(sliceX, sliceX + size);
  let y = random(sliceY, sliceY + size);
  let holesize = random(3, 30);
    
    fill(255);
    circle(x, y, holesize);

  }
}

function touchStarted(){
  
  background(255);
  
    fill (255, 224, 145)
    noStroke();
  cheeseArtist(25, 25, 150, 17);

    fill (231, 240, 149)
cheeseArtist(225, 25, 150, 17);
  
    fill (249, 255, 128)
cheeseArtist(25, 225, 150, 17);
  
   fill (252, 232, 220)
cheeseArtist(225, 225, 150, 17);

  }