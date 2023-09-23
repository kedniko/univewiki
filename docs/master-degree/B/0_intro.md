---
date: 2023-09-19 12:30
professor: Simeoni Marta
---


# BIOINFORMATICS

## METADATA

The teacher is not a biologist, but a computer scientist.

|               |                              |
| ------------- | :--------------------------: |
| **Professor** | {{ $frontmatter.professor }} |
| Rate          |             9/10             |


## EXAM

Written and oral (if you pass the written part) or 2 partials.

- Written part (core of the exam): Open questions and exercises.
- (15 minutes, 3 points, i.e. 1 week of work) oral part **or** assignment to present in class (group in 2/3 people)
  - depends on the teacher (probably it will be an assingment), we will know this a mid course (november)

In short:
Or:

- Written part -> oral
- Presentation + Written part
- written part + presentation

## Materials

There is no a textbook to buy.

- Introduction to algorithms (Cormen)
- Algorithms on strings (Gusfield)
- Biologicalsequence analysis, probabilistic models and nucleic acids (Durbin)
- Bioinformatics-sequence and genome analysis (Mount)

### Intro

### Important to remember

- Bioinformatics applications generally have to deal with:
  - enormous amount of data
  - data which contains redunadncy and errors
  - imcomplete information
  - rules with many exceptions
  - heuristic solutions
- It is nevessary to have a deep knowledge of the biological problem to be solved.
- It is necessary to work together with biologists, statisticians, ...
- It is a difficult process beacause we don't speak the same language.

### Bioinformatics syllabus

- Introduction to molecualr biolagy
  - DNA, RNA, Proteins
- **Exact** sequence search
  - pattern preprocessing (FA algorithm, KMP algorithm)
  - text preprocessing (suffix trees, suffix array)
- **Approximate** sequence search
  - **Pair alignment** (heuristics, scores, exact methods for global and local alignment)
  - **Multiple alignment**
- Genome sequencing
  - Techlogies and techniques (encode some partes of molecules in strings)
- Protein structure determination
  - introduction
- Phylogenetic trees
  - characteristics and inference methods (compare genes of different species)
- Sequence modelling
  - HMM for modelling biological data
- Systems biology
  - general introduction and examples

## Biological background

### Outline

- DNA and genome
- Proteins

## Metaphor: DNA as software

- Software -> a component specialized to contain data and commands to interpret then (DNA)
- Hardware -> a component able to interpret it and to traslate it iinto actions (cell).

## DNA

DNA (Deoxyribose Nucleic Acid) is the nucleic acid which encodes the genetic program of both prokaryotes (bacteria and archea) and eukaryotes (animales and plant)

### Trasforming principle

Experiment:

- non patogenous bacteria -> mouse -> alive
- patogenous bacteria -> mouse -> dead
- killed patogenous bacteria with heat -> mouse -> alive
- killed patogenous bacteria with heat + non patogenous bacteria  -> mouse -> dead

> This experiment showed that the transforming principle is the DNA.
> Previuosly they believed that proteins were responsible for carrying the genetic information.

Dna is a long polymer made from repeating units called nucleotides or bases 4 (loong chain of billion bases):

DNA/RNA bases:

- A: Adenine
- C: Cytosine
- G: Guanine
- T: Thymine (only in DNA)
- U: Uracil (only in RNA)

The DNA is a bounded by two strands of nucleotides which form a double helix. The bases are in the middle of the helix and they are bounded by hydrogen bonds. The hydrogen can be broken easily.
**Strands**:  are antiparallel. They are made by a sugar-phosphate backbone.

Pairs:
A-T
C-G

This means if we know one helix we can know the other one.

### DNA replication

DNA polymerase is the enzyme which is responsible for the replication of DNA. It is able to read a DNA strand and to create a new one which is complementary to the original one.
