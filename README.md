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

# Customising VSCode

Whilst improving my cheese code, I got the hang for using VSCode. I had a browse through the extensions to find any that looked interesting, and I found a cool theme, as well as an extension to make little animal friends appear next to my code (called vscode-pets)! Would recommend. 

![image](https://github.com/user-attachments/assets/fc68e6e0-3af4-4ab9-82b0-5c755e25e7bd)


# Using `rotate` and `translate`

After the ill-fated attempt of trying to make my swiss cheese clock actually legible, I wanted to have another go at making a slightly better clock. To stay on theme, I decided to make it a mouse clock. I first created a mouse using 2D shapes in a google drawing, to give me a good reference point on how to draw my mouse using the code.

![image](https://github.com/user-attachments/assets/430e50a2-3806-4698-8b60-7839dcbd4269)

This shows the mouse design, as well as the sketch outlined so that I could see where I wanted each shape to be easily.

But before I could sketch my mouse, I needed to introduce `translate`. I did this so that the 0, 0 coordinate would be in the center of the page, making it easier for me to draw the mouse and to also work out the rotate later. After this, I drew my mouse. When my mouse was comeplete, I wanted to work on `rotate`.

I found help from these webpages:

p5 Pages:

`translate`: https://p5js.org/reference/p5/translate/ 

`rotate`: https://p5js.org/reference/p5/rotate/ 

Reddit Page I found Helpful:

https://www.reddit.com/r/learnjavascript/comments/r6h86t/how_do_i_rotate_shape_in_p5js/?rdt=53084

When rotaing, I was using it so that it would rotate the whole canvas and the entre mouse around my new `x` and `y` coordinates. To fix this, I needed to figure out how to re-draw everything but the head back into its origninal place so it would appear to be staying still. So in my function `mouseHead()`, I had to put in `rotate` at the start of the function, and also at the end to set this back into place. The rest I was just able to leave as the loop would re-draw it each time.

The code for my mouse clock:
```js
let mouseTilt = 180

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  setTimeout(startMouseClock, 2000);
  textAlign(CENTER,CENTER);
  text(`you're running late`, 200, 200)
 
}

function startMouseClock() { 
  mouseTilt = mouseTilt + second()*6;
  
  setInterval(()=>{  
  background(255, 238, 186);
  mouseBody(200, 230);
  mouseHead(200, 200, mouseTilt);
  clockNum();
  mouseTilt = mouseTilt + 6;
    
  },1000);
}

function mouseHead(x, y, angle){
  translate(x, y);
  rotate(angle);
  translate(0, 40);
  
  noStroke()
  fill(206, 227, 243);
  circle(0, -40, 80);
  circle(-55, -70, 70);
  circle(55, -70, 70);
  triangle(-39, -30, 39, -30, 0, 40);
  
  fill(255, 147, 196);
  circle(-55, -70, 45);
  circle(55, -70, 45);
  circle(0, 39, 15);
  
  fill(0);
  circle(-25, -20, 12);
  circle(25, -20, 12);
 
  stroke(0);
  strokeWeight(0.5)
  line(15, 10, 60, 20);
  line(-15, 10, -60, 20);
  line(9, 24, 50, 50);
  line(-9, 24, -50, 50);
  
  translate(0, -40)
  rotate(-angle);
  translate(-x, -y);
}

  function mouseBody(x, y){
  translate(x, y);
  
  noStroke();
  fill(255, 147, 196);
  triangle(30, 120, 60, 120, 150, 20)
  
  fill(190, 216, 237);
  triangle(0, -30, -65, 120, 65, 120);
    
  fill(220);
  circle(0, 82, 60,)
    
  fill(206, 227, 243);
  ellipse(-50, 120, 40, 25);
  ellipse(50, 120, 40, 25);
  
  translate(-x, -y);
  }

function clockNum(){
  textAlign(CENTER,CENTER);
  text('12',200, 25);
  text('3', 375, 200);
  text('9', 25, 200);
  text('6', 200, 375);
}
```

# Using `setInterval` and `setTimeout`

Atfter this, I then added `setInterval` to my code, which I added to a new function called `startMouseClock`. This just operated similarly to a draw function, but would allow me to do `setTimeout` after. 
I created this, which is called an 'anonymous function'. I used this because I knew I would only need to use it once, so it wouldnt need a name.

```js
setInterval(()=>{
```

Helpful source for this:
https://www.geeksforgeeks.org/javascript-anonymous-functions/ 

I had to figure out how to make the mouse head tick like the hand on a clock. I established the varible mouseTilt, and then calculated the tilt. To do this, I divided the circle (360 degrees) by the seconds in a minute (60), so I knew for the mouse head to tilt all the way around it would need to move at 6 degrees a second. I then added the variable `mouseTilt` to the parameters of the `mouseHead` (the parameters for `mouseHead` were `x` `y` and `angle`). However, this would just assign the current second to the corresponding angle on the clock. To make it actually tick, I had to increase the `mouseTilt` by 6 everytime the function `startMouseClock` was run, which would update the angle each time the second changed.

```js
mouseTilt = mouseTilt + second()*6;
  
  setInterval(()=>{  
  background(255, 238, 186);
  mouseBody(200, 230);
  mouseHead(200, 200, mouseTilt);
  clockNum();
  mouseTilt = mouseTilt + 6;
```

I then did some text to make the numbers. I added these to thier own function called `clockNum`, just so that the mouse wouldnt draw over them, as they would be re-drawn in each loop. Aftet this, I wanted to put in a screen timeout to make a little title page. To do this, I created this:

```js
setTimeout(startMouseClock, 2000);
textAlign(CENTER,CENTER);
text(`you're running late`, 200, 200)
```
Just wanted it to hold for 2 secconds.

Link to p5 for 'MOUSE RAN UP THE CLOCK (JAVA EDITION)': https://editor.p5js.org/siennabearbum/full/zjxM153De

I wanted to put this into my repository for this workshop, but by the time I had coded this, my swiss cheese had already been forked a couple of times so I figured I shouldn't change it.
 

