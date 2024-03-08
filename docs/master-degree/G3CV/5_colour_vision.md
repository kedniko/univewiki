# Colour vision

We as human can not distinguis the difference between a true yello color and a combination of green and red that produce the same yellow.

We can not represent every single color by just mixing red, green and blue. We have to add some negative amount of red (possible by addding red to the target color).
To overcom the problem of mixing negative amount of red light, CIE Standard defined a new color space created by the combination of 3 virtual colors (not pure): X, Y, Z.

::: tip
This is not particular useful for this exam but it will be useful if you need to measure colors.
:::

Popular color models:

- RGB: Works as our eyes. It is an additive color model. It is used in computer graphics.
- CMYK: Subtractive syntesis.
- HSI: Hue, Saturation, Intensity. Point as distance in triangle.
- YUV: Intensity (luminance), Hue and Saturation. Point in a squared plane. (a smart hack used in television)

## Color transformation

What is the best color space to use? It depends on the operation i want to perform on the image (brightness, contrast, hue). Every color space has its own algorithm.

## Histogram equalization

It is good for color spaces that separates Hue and Intensity (HSI, YUV).
