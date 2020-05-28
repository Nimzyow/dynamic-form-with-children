# Dynamic Forms

I recently came across the concept of creating dynamic forms. Up until now, I created forms as and when I needed them. Typically this would involve me creating a serperate Login and Register form. Getting my head around passing children as props from parents to the form component was a bit of a mind twist at first. After all, I'm creating the form in the parent component but state management was being done in the Form component. How could I make the state of Form dynamic so that I could send a dropdown, checkbox or a normal input form and still submit it on the Form component with the correct information being sent?

I had a lot of conversations with a very good friend of mine as she is the one who brought this to my attention. I owe much of this learning to her as she was patient with me while I performed mental gymnastics to get to grips with it. Needless to say, much coffee was required.

You'll see tests being done for the forms. I followed a TDD approach to creating the form and this really helped solidify this concept to me. The point in which this whole thing clicked is when I created tests and then created the code to get them passing.

So not much going on in this repo in terms of quantity of code but I learnt a heck of a lot! :)

![learning](https://newintrigue.files.wordpress.com/2018/04/learningforlife1.png)

## Table of content

- [Installation](#installation)
- [Testing](#testing)
- [Tech stack](#tech-stack)
- [Extra notes](#extra-notes)

## Installation

Follow these steps to install required dependencies:

1. In the root of the project type the following in your terminal:

```
$ npm install
```

DONE!

## Testing

Follow these steps to run tests:

1. In the root of the project, type the following in your terminal:

```
$ npm test
```

You should see the tests in the terminal.

## Tech stack

- JavaScript
- React (hooks)
- Jest and Enzyme
- prettier

## Extra notes

This project made me realise there's always something exciting to learn, even if you feel confident!
