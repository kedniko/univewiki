---
date: 2023-09-18 13:55
professor: Filippo Bergamasco
---

# GEOMETRIC AND 3D COMPUTER VISION

[[toc]]

## METADATA

We can study from the slides.

We will not use AI in this course.
This is a pratical course. Image processing (no image understading). Image, geometry, classical algorithms.
He work on 3d reconstruction, camera calibration, ego-motion estimantion, photogrammetry, ...
He will teach us what is studies.

Office (in front of prof. Focardi): **Z.B08**
Office hours: no (just write him an email <filippo.bergamasco@unive.it>)

He will publish the slides at the end of every topic.
At the end of this course we will have the basic building blocks to solve the final project.

## EXAM

Project (oral exam on his office, show the source code and discuss it).
The final rating are generally pretty good.
No assignments this year.
Project developed individually.
Report is not required. Just submit the source code on moodle 1 week before the exam.
We all will have the same project (there are multiple ways to solve the same problem: i.e.: pipeline: filter -> extract -> colors).
We will use Python + OpenCV project + NumPy (notebooks are ok!)

## Programme

Programme 1 (low level vision):

- introduction
- image formation process
- intensify transformations
- spatial filtering
- filtering in frequesncy domain (Furier theory)
  - image -> convert to filters -> process the filters -> go back to image
- color vision (video effects)
- morphological image processing
- edge detection

Programme 2:

- fitting of curves
- detection and matching of point features
- tracking

Programme 3:

- elements of analytical euclidean geometry
- geometric primitives
- 2d and 3d projective transformations
- affine and projective cameras
- intrinsic calibration
- camera pose estimation (useful for augmented reality)
- epipolar geometry

### Materials

The slides are enough.

- Gonzalez, Digital Image Processing
- Szeliski, Computer Vision Algorithms and Applications (more general purpose)
- Forsyth, Computer Vision. A modern Approach (difficult)
- Trucco, Introductory Techniques for 3D Computer Vision
- Hartley, Multiple View Geometry in Computer Vision (bible of projective geometry)

## What is comuter vision?

> A set of computational techniques aiming at estimating or making explicit the geometric and dynamics properties of the 3d world from digital images.
> Computer vision is about building an automatic system that "sees".

Difficult to give a concise definition since the area spans multiple different problems.

### 3 levels of vision

1. Low level vision (image processing): image -> image (draw edges of image)
   - image restoraion
   - contrast enhancement
   - noise reduction
   - edge detection
1. Medium: image -> shapes, regions (ie detect street lines)
   - segmentation
   - shape recognition
1. High: image/shapes/regions -> concepts (ie recognize dog in scene using)
   - scene understanding (using machine learning/deep learning: doing so with an classic algorithm is too difficult even today)

## Fooling the AI

Deep neural networks (DNNs) are brilliant at image recognition but they can be easily hacked. Even today these techniques are not perfect.

### Human vision

Our brain makes a lot of assumptions base on previous knowledge (optical illusions: ie Muller-Lyer).

### Computer vision vs computer graphics

Computer graphics: 3d -> 2d (is much more advanced than computer vision, ie Unreal Engine)
Computer vision: 2d -> 3d models

- models developed by physics, computer graphics, machine learning, ...

### Common Applications

- OCR (Optical Character Recognition)
- Machine inspection (ie check quality in assembly line)
- Face detection and recognition
- Medical image analysis
- Driving assistance
- Smart advertising (ie replace ads in football match in different countries: augmented reality)
