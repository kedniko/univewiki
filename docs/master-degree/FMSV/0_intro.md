---
date: 2023-09-18 10:35
---


# FORMAL METHODS FOR SYSTEM VERIFICATION

[[toc]]

## Metadata

We can ask for additional material with no problem

## Introduction

## Key notions

To construct a model of a sytem and use is it as a tool.

> - A model can be constructed to represent some aspects pf the **dynamic behaviour** of a system
> - once constructed, such a model becomes a **tool** with which we can investigate the behaviuor of the system

## Descrete event systems

A system whose state changes based upon the occurence of diiscrete events.

> - In this course we will focus on **discrete event systems**.
> - What is a discrete event system?

## ~~Time driven~~ vs descrete event drivens

### Time driven

- Time driven (deterministic system): (i.e. Bouncing ball)
  - the state of the system dependent on time and physical parameters
    >
    > - i can predict the trajectory of the ball
    >
### Descrete driven (aka Event driven)

- Event driven (non-deterministic system) (i.e. Barber shop)
  - the state of the system does not change unless an event occurs:
    >
    > - a customer enters the shop
    > - a customer leaves the shop
    > - a barber becomes available

    > We want to sudy Event Driven systems

    - Characterized by

      - variables which take distinct values and which change by descrete events

      > Example: communication network
      >
      > - variable n counts the nodes waiting to send a message
      > - not waiting node generates a message -> n = n+1
      > - waiting node sends a message -> n = n-1

- **Discrete time** vs **Continuous time**

  - **Discrete time**: analyzes the system at a predetermined moments in time (i.e. every 5 minutes)
  - **Continuous time**: analyzes the system at time of each event
    - this type of models are generally appropriate for computer and communication systems

### Performance modelling (Modelling computer systems)

Understanding, analysis and optimization of the dynamic behaviour of computer and communication systems.

Examples

- **Capacity planning** (client-server systems): how many clients can the existing server support and mantain reasonable response times? We can study this using a formal model.
  > The model we will use in this course is not exactly the model taht big tech companies like Google uses, but the underling principles are the same.
- **System configuration**: how many frequencies do you need to keep blocking probabilities low?
- **System tuning**: what speed of conveyor (trasportatore) robot idle time and maximize throughput whilst (mentre) avoiding lost widgets?
- **Sustainable energy planning**: which is the minimum transmission radius to ensure connectivity while optimizing energy consumption?
- **Prediction**: which is the expected transaction consolidation time (time for mining in the blockchain) with respect to the offered fee (reward for miners)? Analysis are needed to know is this platform works well or not..

### Conflicts of interests

- **Users**: wants optimise external measurements of the dynamics such as
  - response time
  - throughput
  - blocking probability
- **System managers**: wants to optimise internal measurements of the dynamics such as
  - CPU/memory/disk/network utilization
  - idle times
  - failure rates

> Used in computer  systems since the mid 1960s and in communication systems since the early 20th century.

We are now interest in models for distributed systems: these king of systems are very complex so we need a formal method.
Every millisecond counts in distributed systems.
> Example: Amazon lost 1% of sales for every 100ms of delay in page loading in their e-commerce.

### Challenges

- **Time**: physical distance: need to represent time (network latency)
- **Randomness**: partial failures: randomness and probability (server/routers may be down)
- **Probability**: how can we have probabilities in the model without uncertainty in the result?
- **Scale**: need to quantify population sizes (workload characterisation). How can web escape the state-space explosion problem?
- **Percentages**: resource sharing: need to express percentages (network contention (contesa di rete), cpu load)

> **Examples**
>
> - **Quality of service issues**: can the server maitain reasonable response time?
> - **Scalability issues**: how many times do we have to replicate this service to support all of the subscribers? (Netflix, Youtube...)
> - **Robusteness and scalability issues**: will the server withstand a distributed denial of service attack?
> - **Service-level agreements**: what percentage of downloads do complete within the time we advertised? (100MBps connection in fibra? is this true?)
> - **Scalability issues**: which is the optimanl router allocation?
> - **Trade-off cost and response times**: (in blockchain)
>

### Qualitative modelling

When systems are modelled to verify their functional behaviuor (correctness). all defined values are abstracted away

### Performance modelling (quantitative modelling)

We must take in account explicit values for **time** (latency, service time, etc..) and **probability** (choices, aternative outcomes, mixed workload, ..)
Abstraction representation or **model** of the system is used to capture the essential characteristics of the system so that its  performance can be reproduced.
Typical models are **queueing networks** and **stochastic Petrinets** which are both based on stochastic models
> In many cases the underlying stochastic models are assumed to be **Markov process**.
> We need to design a program that calculate such probabilities.

### Process Algebras (Process calculus)

The formal method that we will use to design our program.
Mathematical theories which model concurrent systems
We will study **PEPA** _(Edimburg 1991)_: Performance Evaluation Process Algebra
A system characterized by its active components and the interactions or communications between them.

Functional and performance properties.
**Examples**
> Qualitative modelling: we can remove one router from a group of them and the network will still work for all the nodes (benefit: reduce costs).
>
> - quantitative modelling: less routers
> - qualitative modelling: the network will still work as expected
>
Big system formed by small components the interact with each other to solve the big problem: compositional reasoing (similar to Divide-et-impera in programming).

### Resources

<http://www.dcs.ed.ac.uk/pepa/>
<http://www.dcs.ed.ac.uk/pepa/papers/>

### In the next lesson

Theory of probability

### The exam

- Project or writtent exam

- A project early in november because we need time. She will give us a paper of a system (Process algebra).
alone or in groups (max 3 persons)
  - Reading the paer
  - Analsising the system
  - modify the modification, add specification, give presentaion in class

- Alternatively we can do the written exam in session (no project)
