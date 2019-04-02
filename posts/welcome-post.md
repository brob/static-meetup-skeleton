---
title: 'Notes from March 26, 2019: SCSS Naming Conventions'
date: '2019-03-26'
---
![](/images/meetup-image.jpeg)

## Meeting Notes

Josh Bryant talked about SCSS naming conventions. [His slides are available here](https://docs.google.com/presentation/d/1qb00Wd_FsfnbM3lEvSTfJ-q0-alBCVT2oW1fFdKCJ_0/edit#slide=id.p).

### First up: BEM

[Block Element Modifier](http://getbem.com/) is a naming convention for writing modular CSS.

BEM is extrordinarly helpful for making modular CSS that is maintainable by yourself and future developers. BEM helps fight specificity in the CSS Cascade.

CONS of BEM: Different mental model for CSS. Sometimes these class names can be seriously long and convoluted.

### Second up: SMACSS

[Scalable Modular Architecture for CSS](https://smacss.com/) is a definite mental model for CSS. It involves Base, Layout, Module, State and Theme elements.

Module elements end up being about 80-85% of your CSS in a SMACSS mindset.

Pros:

* Easy to read
* Great for newcomers to SCSS
* Highly scalable

Cons:

* There can be specificity issues
* Deep level CSS
* Where should things live?

### Aesthetic SASS

[Aesthetic SASS](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization) allows you to break your code up logically into various folders and files to make updates easier. A 2000+ line file of CSS can be made up of many 20-30 line SCSS files.

[(Web Workers note: Did you know that we did a podcast about Aesthetic SASS?)](http://localhost:4000/podcast/)
