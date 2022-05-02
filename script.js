// JavaScript handles the behavior of a website and is also capable of changing the content to be unique for each user

// Part of the reason why JavaScript is so powerful is because of something called the Document Object Model (DOM)
// https://www.amazon.com/gp/product/1118907442/ref=dbs_a_def_rwt_bibl_vppi_i4
// From the book "JavaScript and jQuery" by Jon Ducket, page 183:

// The Document Object Model (DOM) specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.

//The DOM is neither part of HTML, nor part of JavaScript; it is a separate set of rules. It is implemented by all major browser makers, and covers two primary areas: (1) making a model of the HTML page and (2) accessing and changing the HTML page.

// MAKING A MODEL OF THE HTML PAGE
// When the browser loads a web page, it creates a model of the page in memory.
// The DOM specifies the way in which the browser should structure this model using a DOM tree.
// The DOM is called an object model because the model (the DOM tree) is made of objects.
// Each object represents a different part of the page loaded in the browser window.

// ACCESSING AND CHANGING THE HTML PAGE
// The DOM also defines methods and properties to access and update each object in this model, which in turn updates what the user sees in the browser.
// You will hear people call the DOM an Application Programming Interface (API). User interfaces let humans interact with programs; APIs let programs (and scripts) talk to each other. The DOM states what your script can ask the browser about the current page, and how to tell the browser to update what is being shown to the user.

// Summarized from pages 186-187
// The DOM tree consists of four main types of nodes: the document node, element nodes, attribute nodes, and text nodes. Each node is an object with methods and properties. Scripts access and update this DOM tree (not the source HTML file). Any changes made to the DOM tree are reflected in the browser.

const panels = document.querySelectorAll('.panel')
// This line of code creates a variable that will go and grab all elements with the class "panel" inside of the document so that the javascript can do something with those specific elements.

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // tells the browser to "listen" for a specific event (i.e., a click) on each panel and then to run a specific set of actions when that event happens
        removeActiveClasses()
        // removes the class active from any panel other than the one clicked that currently has it
        panel.classList.add('active')
        // adds the active class to the panel that was clicked
        // this works because the functions are executed in order. in other words, the class won't be added only to be removed before the next click because the removal function is run before the adding function
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        // checks each panel for the active class and if present removes it
        panel.classList.remove('active')
    })
}
