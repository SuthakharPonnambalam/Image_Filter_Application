# Image_Filter_Application
Created a image filter application (SPA) as part of Duke University's Online Course on Web Programming. 

The project was created with help of Duke Learn To Program(DLTP) Environment and it was part of the 5 course sepecialization from Coursera's "Java programming and Software Engineering Fundamentals" offered by Duke University . The application was built using HTML5, CSS3, and JS. 
1. Insert an image to the application using the upload option. 

2. The image gets rendered on the canvas. 

- 2.1. The four filters available are:

   - a. The first filter is the grey filter. The computation involved finding the RGB values in the image's pixels and converting all the pixels RGB values to be an average of it's RGB value. When all three pixels are equal it turns out to be grey. 
 
  - b. The second option is using red filter. In this function we find the RGB values of a pixel and reset the Red value to be 255 while making Blue and Green to be 0. 

  - c. This is a rainbow filter. Here the image is first divided into seven equal strips and the rainbow colours are applied. 

  - d. The final filter applied is the blur filter. Inorder to do this we first creating an empty canvas. For 50% of input instances(i.e) pixel values we copy the old pixel values and paste it int the new image. But the other 50% we do not take the current pixel but a random pixel value from the original image. When we do this we have to make sure that the reandom number generator does not take pixels that are outside the image range. In order to avoid this situation we find the nearest available pixel in such a case. Once we get this pixel we simply paste it int the image. Thus the blur filter is generated. 
