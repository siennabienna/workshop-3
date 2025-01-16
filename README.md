# workshop_2
Website: https://siennabienna.github.io/workshop_2/ 

### For the workshop tasks in workshop 3, I installed VScode. I then uploaded my Swiss Cheese Randomiser and had a go at changing some of the code on there. I had a plan to create my own function that I wanted to try with the cheese. The function would allow me to generate multiple slices of cheese at once using a randomiser for the holes.

## I created the function 'CheeseArtist' which would allow me to draw cheese easily. I made the variables of this function SliceX (where the slice is on the x), SliceY (where the slice is on the Y), size, and holecount. 

![image](https://github.com/user-attachments/assets/4bd1260b-26e4-41b5-afcd-7ffcf1962e28)

## I then kept the 'for' loop from my last cheese that would allow me to generate the holes. 

![image](https://github.com/user-attachments/assets/909017b8-21df-420c-81a8-05e0470f87ff)

## I then had to change the variables in random, so that the holes would generate on top of the slices of cheese. For this, I did  let x = random(sliceX, sliceX + size); let y = random(sliceY, sliceY + size);. This is so that it would find the top left corner of the cheese slice, and then add slice onto it so that it would find the full area of the cheese.

![image](https://github.com/user-attachments/assets/bb04d6fc-dd62-4d3e-b4c1-795ae299351b)

## Then, to actually use the funtion CheeseArtist that I set up, I created 4 pieces of cheese and entered the variables in for each one.

![image](https://github.com/user-attachments/assets/e7f6fffe-fbd4-413d-a57e-171670158f24)
