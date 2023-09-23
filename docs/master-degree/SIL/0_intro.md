---
date: 2023-09-19 14:00
professor: Christiano Varin
---


# STATISTICAL INFERENCE AND LEARNING

[[toc]]

## METADATA

Just call this course STATISTICAL LEARNING.
His supervisor was one of the father of **R**. He learned R when he was 20.
There are more packages in R than in Python.

## EXAM

Writing and discussing a project (individual). Original analysis about a dataset.
Submit the project on moodle with your proposal:

- Indicate the data source
- What kind of scientific question?
- How is it different from already existing analysis on the web?

> We **must** use **R**
The project must be submitted to him one week before the oral examination.

- 02/01/24
- 18/01/24
- 14/01/24
- 28/01/24

## Materials

- Just read the slides.
- A lot of **R** Labs (not graded).
- Book: An introduction to statical learning with applications in R ([free](https://statlearning.com)) (bible)

### What is statistical learning?

A set of statistical tools for understanding and making sense of complex datasets.
Classified as:

- **supervised learning**: goal is to predict an output based on one or more inputs (response).
- ~~**unsupervised learning**: no outcome measure, goal is describe associations and patterns among a set of inputs.~~

> **Statical learning vs machine learning**
> Statical learning: more focused on models and interpretations of results
> Machine learning: more focused on accurate predictio, despite possible lack of clear interpretation.
> There is a lot of overlap between the two fields.

### Examples

- [MONEYBALL](https://en.wikipedia.org/wiki/Moneyball_(film)): movie (subermetrics method)
- [Queenpins](https://youtu.be/v90YxH6lR_8): movie
- <https://www.target.com/>

### Prerequesites

- probability and statistics
  1. Conditional probability, independence
  2. Random variables
  3. Expected value, variance, covariance, correlation
  4. Central limit theorem, Law of large numbers

- Statistical inference
  5. Point estimation
  6. Confidence intervals
  7. Hypothesis testing

Suggested reference to fill the gap: Baron (2014), Chapters 2-4 + 8-9 (available in library)

> We can go to his office to ask for help with no problems.
> At the beginning of the course but also in the middle if we get lost.

## Chapter 2 of the book

### Income data

A smotth line is better than a line that passes through all the points.

Target;
find a relationship (model) of type:
$Y = f(x_1+x_2)+e$
