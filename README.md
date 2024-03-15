
Code to randomly generate a password according to user input.



# password-generator

## Description

I built the project to gain a better understanding of JavaScript and nesting.

This app helps the user generate secure passwords.

I had many issues with this code, as I tried to create it without using the starter code (I kept it inside but commented out). Originally I wanted the user to be prompted on page load, instead of on button click; this created many scoping issues as I have nested the prompting functions inside conditional statements. The password variable's redefined value, from user input and randomised generation, made the variable's new value inaccessible, giving errors. Similarly to lengthInputIndex.

I have resorted to the user prompts being activated on button click, which removed the previous scoping issues.

I have added a <p> tag in the HTML to let the user know how to start the generation process.

Overall I learned about the limitation of scoping and difficulty in function nesting.

## Installation

You could either clone the repo on your local machine using "git clone <repo-link>" inside the terminal or access it on the deployed page. 



## Usage

Click on the 'Generate Button' to begin prompting.

![alt text](/challenge/assets/images/Screenshot%202024-03-15%20003544.png)

## Credits

https://github.com/DariaMS1 

## License

MIT License

Copyright (c) [2024] [Daria Sora]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
