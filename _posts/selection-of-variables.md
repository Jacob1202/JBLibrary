---
title: 'Variable selection'
excerpt: 'Selecting the right variables'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2023-10-01T05:35:07.322Z'
author:
  name: Jakub Biniek
  picture: '/assets/blog/authors/profile.png'
---

## Introduction

Selection of variables in a model can be tricky and picking the right variables can have a huge influence on quality of the model and possible predictions done with it. There are certain rules and methods that you follow whenever picking variables. In this blog post I go over the simplest ways to pick variables in a model.

## Quasi constans variables 

Probably the simplest and the quickest way to check whether a variable is appropriate to be put in a model is to check if that variable is a quasi constant. This method relies on calculating a variation coefficient for every independent variable X and comparing it to a critical value. The variation coefficient can be calculated as a quotient of standard devation of the variable divided by the mean of the variable. The critical value is mostly arbitrarily assigned or a just a value between 10% and 15%. If the variantion coefficient for a variable doesn't exceed the critical value then that variable is a quasi constant and should't be included in the model

## Analysis of the correlation coefficient matrix

This method relies on constructing a R0 vector containing correlation coefficients between the dependent variable Y and indepdent variables X1, X2 ... Xn and a matrix R containing correlation coefficients between indepdent variables X1,X2 ... Xn. The matrix is of size k x k where k is the quantity of variables that potentially could be included in the model. It's a symetrical matrix with values of 1 on it's diagonal line. The correlation coefficient between the dependent variable Y and the independent variable Xi is makred by rj and the coefficient between independent variables as rij and can be calculated from the following formula

![correlation coefficient formula](/assets/blog/images/variableselection1.png "Variable selection")

where n is the quantity of observations, x with a dash is a mean value of x and y dash is a mean value of y.
With our vector R0 and matrix R ready the next step is to calculate the critical value from the formula

![critical value formula](/assets/blog/images/variableselection2.png "Variable selection")

where value t is a value read from statistical tables for the Student's t-distribution with n-2 degrees of freedom and alfa statiscial significance. The first step in the analysis is to compare the absolute value of vector R0 with the critical value and discarding those variables which do not exceed the critical value and therefore are losely correlated with the dependent variable Y. In the next step we compare how strongly our just added variable is correlated with other independet variables and if any values exceed the critical value, we discard them from the group of variables that could be included in the model. After eliminating the variables we check which one is the most correlated with the Y variable and we add that variable to the model. After adding the variable we once again compare coefficients repeating the last step for as long as there are variables in the set of potential variables to be added to the model.

## The graphs method

A graphical solution to the problem of picking the right variables is the graphs method which relies on constructing a matrix of correlation coefficients R, the same way it was constructed in the previous method and picking the correct variables based on a graphical interpretation. We calculate the critical value of r*, in the same way it was mentioned previously and compare it to every absolute value of any element in our matrix R. If any values turn out to be lesser than the critical value we substitute that value for a 0. In the next step we create a graph by connecting points corresponding to the independent variables where values are different from 0 in the modified R matrix. A graph created in such a way many times has a couple of sub-graphs or lone points. The variables that enter our model are going to be the ones with the most connections in out graph. In a case where variables have the same amount of connections we pick the one with the highest correlation to the dependent variable Y to enter our model.

Other methods worthy of mention are forward stepwise regression, backwards stepwise regression or Hellwig's method.