# Landing Page Project

## Table of Contents

* [Introduction](#Introduction)
* [Instructions](#instructions)
* [How](#How)


## Introduction

This is my first project in udacity using javascript and some CSS every comment is appreciated


## Instructions

Download the whole project folder and run the index.html in any browser

## How

This is a simple Landing page of website which consists of any number of sections, each section link is dynamically added to the navigation on the top.
to check how this works, check `js/app.js`.
I've used a simple method, I added all sections to an array called "sections" and iterated over it
for each section there, an <a> item is appeneded to a <li> and so in turn appened to the <nav> bar
for each <a> created, an attribute ("href: #"+ "section ID") is used to scroll down to the targeted section, and another attribute 
("id: "+"navEl"+sectionNumber) to check if that section is in the viewpoint and set the nav bar element as active.

A function "elementInViewport(section)" is used to check whether the section is in the viewpoint or not
