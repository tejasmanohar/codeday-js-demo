// DOM Interaction

// step aside from "JavaScript" but "browser js" instead

// easiest way to find HTML elements in the DOM is by using the element id
document.getElementById()

// find all HTML elements with the same class name
document.getElementsByClassName("intro");

// finds all <p> elements
document.getElementsByTagName('p');

// alternative way gives more flexibility -> takes in .class, #id, <tag>
document.querySelector('.class')


// examples

// loop thru all elements
var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
  console.log(all[i])
}

// get all html on page
document.documentElement.innerHTML

// display the domain name of the server that loaded the document
document.domain

// get current url
document.href

// get page title
document.title

// replace document
document.open('text/html','replace');
document.write('<h2>Learning about the HTML DOM is fun!</h2>');
document.close();

// hide element
document.getElementById('p1').style.visibility='hidden'

// repalce text of element
document.getElementById('unique').innerHTML = 'new text';

// use jQuery to make life simpler! let's go to a website and play around...
