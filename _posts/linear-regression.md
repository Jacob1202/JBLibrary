---
title: 'Linear regression'
excerpt: 'Introduction to regression'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2023-09-16T05:35:07.322Z'
author:
  name: Jakub Biniek
  picture: '/assets/blog/authors/profile.png'
---

## Introduction to Linear regression

Linear regression is an linear approach to describing a relationship between a dependent and independent variables. I'll get to the meaning of dependence and independence a bit later. 
The simplest one equation model would be a linear model with one dependent variable X. In the mentioned model if we call y<sub>i</sub> as the i-th observation of our dependent variable Y and x<sub>i</sub> as the i-th observation of the independent variable X then our linear model would look like this

![Yi = B0 + B1*X1 + eps](/assets/blog/images/linearregression1.png "Linear model")

Where accordingly *Beta0* and *Beta1* are unknown structural parameters of the model. *Epsilon* however is used to describe the error variable that is included in the model in order to describe a randomness of some events and add "noise". 
Normally we can classify regression models based on

   - number of equations in a model
   - number of dependent variables 
   - analytical shape
   - the role of time in a model

In the above mentioned model the structural parameters are not known and can be modeled based on a sample of n-elements (x<sub>i</sub>, y<sub>i</sub>), *i=1,2,3,...n*. Estimators of these structural parameters are functions of observations of dependent and independent variables. However in most cases, in regression models we use certain estimates given by symbols 
*b1* and *b2*. Values of the dependent variable calculated from the model are called theoretical values of the dependent variable and can be denoted as y<sub>i</sub> with a ^ symbol above. Theoretical values can be calcuted as such 

![^yi = b0 + b1*X1 + eps](/assets/blog/images/linearregression2.png "Estimated model")

The difference between the empirical value and the theoretical is called a *residual* and can be calculated from an equation

![ei = yi - ^yi, i=1,2,..n](/assets/blog/images/linearregression3.png "Residual")

## The Least Squares Method

The most commonly used method for estimating structural parametrs of the equation is the method of least squares.
The main idea behind the method is to find such estimates *b1*, *b2* of structural parameters *Beta1* and *Beta2* that the sum of squares of residual values is minimal.
In other words we want to minimaze the difference between our empirical dependent variable y<sub>i</sub> and variable ^y<sub>i</sub> calculated from our model. It can be written as such

![Sum(yi - b0 - b1x1) -> min](/assets/blog/images/linearregression4.png "Least squares")

With given values of y<sub>i</sub> and x<sub>i</sub>, the sum of squares of residuals is a function of *b0* and *b1*. A necessary condition for the function *S(b0, b1)* is that the first partial derivative due to *b0* and *b1* is equal to 0.

![Normal equations](/assets/blog/images/linearregression5.png "Least squares")

The above transformation leads to a system of equations called normal equations, whose solution is the Ordinary Least Squares estimator of the regression coefficient *b0*.
After certain transformations we get the equations for the estimates *b0* and *b1* that are as follows

![Normal equations](/assets/blog/images/linearregression6.png "Least squares")

In the estimated model, estimate *b1* informs us by what amount the mean value of the dependent variable increases (given that *b1* is > 0) or decreases (when *b1* < 0). Given that explanation the estimate *b1* is a derivative of a linear function *f(x) = b<sub>0</sub>+b<sub>1</sub>x* due to x. 

Other materials regarding linear regression with my recomendation are [here](https://www.youtube.com/watch?v=P8hT5nDai6A&t=780s&ab_channel=TheOrganicChemistryTutor) or overall on the Internet. 