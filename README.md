# workshop_2
Website(SWISS CHEESE RANDOMISER (ANDY WARHOL FOUR CHEESE BLEND): https://siennabienna.github.io/workshop_2/ 

# Things I Looked at in this Workshop
- Installing VSCode
- Expanded upon creating my own functions
- Improved a previous sketch
- Using `setInterval` and `setTimeout`
- Experiemted with `rotate` and `translate`

# Installing VSCode and Improving My Cheese Code

I installed VSCode and then uploaded my Swiss Cheese Randomiser onto a file, which I extracted and then opened in VSCode. I had a go at changing some of the code on there, which I really liked due to the live preview that would allow me to see how my code was changing live. Whilst in VSCode, I wanted to improve my sketch by adding a little function to it, just to get used to using VSCode. The function would allow me to generate multiple slices of cheese at once using a randomiser for the holes. to do this, I created the function 'CheeseArtist' which would allow me to draw cheese easily. I made the variables of this function `SliceX` (where the slice is on the x), `SliceY` (where the slice is on the Y), size, and holecount. 

```js
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
```

I had to change the variables in `random`, so that the holes would generate on top of the slices of cheese. For this, I did:

```js
let x = random(sliceX, sliceX + size);
let y = random(sliceY, sliceY + size);
let holesize = random(3, 30);
```
This is so that it would find the top left corner of the cheese slice, and then add slice onto it so that it would find the full area of the cheese.

![image](https://github.com/user-attachments/assets/bb04d6fc-dd62-4d3e-b4c1-795ae299351b)

Then, to actually use the funtion CheeseArtist that I set up, I created 4 pieces of cheese and entered the variables in for each one. I gave each one a new colour too.

# Using `setInterval` and `setTimeout` with `rotate` and `translate`

After the ill-fated attempt of trying to make my swiss cheese clock actually legible, I wanted to have another go at making a slightly better clock. To stay on theme, I decided to make it a mouse clock. I first created a mouse using 2D shaped in a google drawing, to give me a good reference point on how to draw my mouse using the code.

![image](https://github.com/user-attachments/assets/430e50a2-3806-4698-8b60-7839dcbd4269)

This shows the mouse design, as well as the sketch outlined so that I could see where I wanted each shape to be easily.

But before I could sketch my mouse, I needed to introduce `translate`. I did this so that the 0, 0 coordinate would be in the center of the page, making it easier for me to draw the mouse and to also work out the rotate later. After this, I drew my mouse. When my mouse was comeplete, I wanted to work on `rotate`.


