# Frontend Mentor - Interactive Rating Component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![](./images/screenshot.png)
![](./images/screenshot-thanks.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/juancaorg/interactive-rating-component)
- Live Site URL: [interactiveratingcomponent.juanca.dev](https://interactiveratingcomponent.juanca.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learned how to style radio buttons to look more like regular buttons (that's new for me) and how to manipulate the class list for DOM elements using [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).

### Continued development

Excited for the upcoming frontendmentor.io projects which add more JavaScript into the mix!

## Author

- Website - [juanca.org](https://www.juanca.org)
- Frontend Mentor - [@juancaorg](https://www.frontendmentor.io/profile/juancaorg)
- Twitter - [@juancaorg](https://twitter.com/juancaorg)

## Acknowledgments

Huge thanks to [@elaineleung](https://github.com/elaineleung) and [@Orodan](https://github.com/Orodan) for their [respective](https://github.com/elaineleung/frontendmentor/tree/main/interactiveratingcomponent) [solutions](https://github.com/Orodan/interactive-rating-component-main/).

Without reading a little bit of both, this solution wouldn't exist.

I implemented @elaineleung's radio buttons styling and how to interact with the radio buttons and card form in my script.

And I used @Orodan's idea to add the raw HTML thanks card to my `index.html`, and hiding the corresponding card using a `hidden` class (using `display: none`) and `Element.classList.add()` and `Element.classList.remove()` in my script to toggle the `hidden` class.
