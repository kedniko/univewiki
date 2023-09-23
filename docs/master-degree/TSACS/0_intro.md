---
date: 2023-09-18 12:14
professor: Carlo Gaetan
---


# TIME SERIES ANALYSIS FOR COMPUTER SCIENCE

## Metadata

Office hours
thursday
10:30 - 12:30
Send email message

### Exam

Discussion of project (on topic of our choice) and oral examination of notions learned in the course.

- propoposal by the end of week 7
- progress report by the end of week 10
- final report and presentation (15 minutes) one week before the oral examination
>
> - these dates depends on the number of students
> The prof will also asks about something that is not on our report

#### Moodle

- Online lessons are available
- Slides: he publish slides the day before of the moodle page
- Labs: code
- Datasets
- Additional readings

## Table of contents of the course

- Introduction to statistical methods for temporal data
- Focus on ideas and intuition (no proof)
- Descritive methods
- Prediction methods: few models
- Minimum Level of technical details
  - ...but a full understanding of the statistical methods discussed in this course requires a lot of technical details
- Several **practicals** with **R**
- Bring your laptop: we will play with real data

## Syllabus

- Exploring time series data
- Statistical Basics fro time series analysis
- ARMA: ARIMA and Seasonsal Models
- Time series regression
- Multivariate time series
- Deep neural network-based time series models

### Books

- Woodward (2022), Time series for data science Analysis and forecasting
- Shumway, Time series analysis and its applications (2017) (free to download!)
- Moodle

### R vs Python

- R is more useful for time series methods
- Python is more useful for data scientists

# Introduction

## Time series

Sequence of data points organized in time order.

- The sequence captures data at equally spaced points in time
- Data collected irregurarly is not considered a time series.

### Many fields of applications

- Economy: graph earnings per share, bitcoin value over time
- Climate: global temperature deviations (currentValue - minValue) in degress centigrade.
- Speech recognition
- Finance: daily value weighted returns market from year A to year B (after an event, i.e. a crash, the pattern could change)
- Medicin: fMRI (Functional Magnetic REsonance Imaging) datafrom various locations in the cortex
- Geology: Arrival phases from an earthquake (top) and explosion (bottom) at 40 points per second.

In some series there is a regularity and in some there is not. I have to recognize the pattern and model the components. Probably they follow a stochastic model (usefull to predict future values).

### Motivation for using time series

Time-series methods are used to do the following:

- understand the generative process underlying the observed data
- fit a model in order to monitor or forecast (predict) a process

Examples:

- Demand forecasting: used to predict demand, both overall and at more granular levels (i.e. used by Amazon, link for full story on Moodle).
- Air pollution prediction
- Anomaly detection: used to detect defects and target preventive maintenance (i.e. industries, server requests, etc..)

## Type of time series

- discrete: observation is recorded in a discrete time interval
  - notation: (ti, yi)
    - i = 1...n
    - ti = time of the observation i,
    - xt = observed value
- ~~continuous~~: observation is recorded continuously (temperature/humidity)
  - notation: y(t) t € I
  - can be continues regardless of the nature of the observed variable

> I can visualize the time series in a plot (time on x-axis, value on y-axis).

Things that are not time series

- **Point processes** (we will not study this) are a little similar to but are not time series
  - the time between two events must be always fix! (i.e. every 1 sec, every minute). If one event is missing, the time series is not a time series anymore.
   > Obviously: we can derive multiple time series from point process grouped by missing data.

## Types of variation

1. Seasonal variation: tourism data are typically "low" in winter and "high" in summer
1. Cyclic variation: daily variation in temperature "high" at moon, "low" at night
1. Economic (no fixed period but predictable to some extent): data are affected by business cycles
1. Trend (long term relative to the number of observations): climate variables exhibit cyclic variation over long periods.
1. Irregular fluctuation: after trend and cyclic variations have been removed, a series of residual may or may not be "random"
   - any cyclic variation is still left
   - probability models such as moving average (MA) or autoregressive (AR)
1. Stationary time series: if there is no systematic change in the mean (no trend) and no periodic variation
   - we will be able to recognize a pattern even if we don't see a pattern with our eyes immediately

### Components of time series

t = time 1, 2, 3, ...n
yt = value in time t

I can decompose the time series in 3 components:
**yt = mt + st + et**

- mt = trend: long term behavior
- st = seasonality: short term behavior
- et = remainder, short period oscillations, irregular fluctuation (delta, i dont see the pattern)

The components can interact in different ways:
> I can split the function in 3 components: infinite ways to decompose them.
> So i have to fix 2 of them and then i can find the third one.
> Example: 24=22+7-5 or 24=20-3+7 and so on...

1. Additive: model yt=mt+st+et
   - > Example: Monthly average of the temperature data in Amsterdam

1. Multiplicative model yt=mt\*st\*et (all 3 components must positive values)
   - > Example: Total number of room nights occupied
1. Multiplicative with additive irregular components (just hint)

### Deseasonalising

The idea of deseasonalising is to remove the predictable periodic component. The seasonable component is obvious and not very interesting. However the seasonal component can be so large in value to hide other interesting aspects of the data.

### Smoothing

Time series are typically of the form:
yt=ft+et
ft= smooth function of time
et= stationary process

> yt=(mt+st)+et is a special case of this
> **see above

Popular methods:

- regression methods
- moving averages
- kernel smoothing
- nearest neighbor smoothing
- smoothing splines

These are all special case of **filters**.
