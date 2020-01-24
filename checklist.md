# Checklist

Before you submit the different parts of your lab, make sure that your project fulfils the tasks mentioned below.

## 00 Introduction

- [X] Install an IDE on your system

## 01 Git

- [X] Fork and clone the 1md034_students repository


## 02 HTML

- [ ] Ensure the website loads when opening http://localhost:3000/

Create an index.html file which contains:
- [ ] A title
- [ ] A main headline and two section headlines
- [ ] Semantic tags that correspond to the parts of your page
- [ ] A section to select burgers that contains at least three items. Each item has at least:
	- [ ] A name
	- [ ] An image
	- [ ] Information about allergies 
- [ ] A section to collect customer information:
	- [ ] First- and Last Name (in one field)
	- [ ] E-Mail Address
	- [ ] Street
	- [ ] House Number (only allowing numbers in this field)
	- [ ] Gender (male, female, do not wish to provide as radio buttons)
- [ ] A button to place the order

## 03 CSS

- [ ] Create style.css and link to it from index.html

Add the following style/behaviour to your website (mostly in style.css but also requiring changes in index.html):
- [ ] Define a base line font for your site by putting the style rule on "body"
- [ ] Define a larger base line font size
- [ ] A CSS rule to make the allergy information bold
- [ ] Define text and background color for one of your two sections (burger selection and customer information)
- [ ] Create an empty style definition for the section with unchanged text and background
- [ ] Change the cursor and background when hovering over the order button
- [ ] Define a table width and center it
- [ ] Add margins to the sections and the order button
- [ ] Add a border to the two sections
- [ ] Add an image after your headline and make it slightly transparent
- [ ] Place the image behind your headline to finalize your header
- [ ] Use a grid layout instead of tables for the burger selection section


## 04 JavaScript and Vue

- [ ] Create js_script.js and vue_script.js
- [ ] Link to js_script.js, vue_script.js as well as vue.js in index.html
- [ ] Add a menuItem constructor with relevant properties to js_script.js
- [ ] Also use your menuItem constructor to instantiate a total of five burgers in js_script.js
- [ ] Add the Vue instance example code to vue_script.js 
- [ ] Update js_script.js with your JSFiddle code and update vue_script.js with your Vue version
- [ ] Update js_script.js and vue_script.js again with your array + loop solutions
- [ ] Rewrite js_script.js and index.html to insert your five burgers dynamically to the burger selection section using JavaScript
- [ ] Rewrite vue_script.js and index.html to insert your five burgers dynamically to the burger selection section using Vue
- [ ] Create a menu.js file with an array containing your five burgers in JSON format
- [ ] Remove the menuItem constructor and the instantiation of your five burgers from js_script.js
- [ ] Update vue_script.js to get the burgers from menu.js instead
- [ ] Create an event listener in js_script.js connected to your order button
- [ ] Add a function to js_script.js connected to the order button in index.html that collects the user's input from the text boxes, the gender and all items on the order (that have the checkbox checked) into an array and also prints out the contents to your console 
- [ ] Comment out your previous event listener and use Vue's corresponding functionality in vue_script.js and index.html to react on button presses
- [ ] Use Vue's model binding to collect the user's input
- [ ] Use Vue to print out a summary of the user's input to the bottom of your page when the order button is pressed
- [ ] Add a checkbox to every burger on your menu when it is generated
- [ ] Include what burgers the user has checked in the order summary


## 05 Messaging

- [ ] Exchange the fields for the customer's address with the interactive map
- [ ] Copy the parts of deli-very.js that you need to make the map work into vue_script.js
- [ ] Check that your map works and adjust the coordinates if the dots don't show up in the right place.
- [ ] Separate addOrder into one function that controls what should happen when a user clicks in the map (displayOrder) and rewrite addOrder to control what should happen when the user clicks the order button
- [ ] Remove the socket.on bindings to "currentQueue" and "initialize", and temporarily fix getNext to assign locally generated orderId's when an order is sent
- [ ] Send the actual burgers with the order instead of Beans and Curry
- [ ] Send the customer's information from your input fields with the order
- [ ] Update the dispatcher view so that you see the following for every order:
    - [ ] The order's location on the map
    - [ ] The ordered burger(-s)
    - [ ] The customer's information
    
## Optional
- [ ] Set the orderID on the server side so that multiple customers can add orders
- [ ] Only allow the order to be sent if all necessary information is provided
- [ ] Display multiple orders on the customer page
- [ ] Allow the dispatcher to handle orders by providing buttons next to every order that can switch the order status to "in preparation" and "done"
- [ ] Display the order status to the customer and update it in the customer view if updated by the dispatcher
- [ ] Find a better visualization for what orders belong to which location on the map
