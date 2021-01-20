# D&D 5th edition site<br/>

## Description<br/>

I want to build a D&D search database using the D&D api. Essentially where you can search everything about a class/attack/monster and pull the relevant information from the api. This way during games you can quickly reference the site to find out an attack or what a spell does. As well as a dice page so you can roll a random number in case someone forgot a die of some kind. To do this I had to break down a large API into the smallest parts possible, a task that proved to be incredibly dificult. I decided to create a component to pull out and return the information needed. That way I can pass in the base url for the category and render the parts from that call to the page. <br/>

## Finished page layout
### Homepage <br/>
![Screenshot from 2021-01-19 22-33-52](https://user-images.githubusercontent.com/74937340/105127493-a6890280-5aa6-11eb-992b-4bc95049d560.png)<br/>
### Results <br/>
![Screenshot from 2021-01-19 22-34-41](https://user-images.githubusercontent.com/74937340/105127516-b1dc2e00-5aa6-11eb-89fc-b198803b787c.png)<br/>

## Wireframe <br/>
![Screenshot from 2021-01-13 01-11-28](https://user-images.githubusercontent.com/74937340/105126406-45f8c600-5aa4-11eb-98db-f508ee0f1606.png)

## Tech used <br/>
The wole site was created in React, with a bit of CSS and html sprinkled in when necessary. I am aslo using the Rakkas font from google fonts for all the text on the page.  <br/>

## Instalation instructions <br/>
The API used is completely public, so no api key is needed to pull from it. <br/>

## Contribution guidelines <br/>
Feel free to offer ideas on improvements that I can make through the issues tab. As this was my first time working with such a large API, and I am sure that it can be improved a lot.<br/>

### User Stories <br/>

As a beginner I want to be able to not be overwhelmed with information and for it be easily sorted and categorized. <br/>

As an intermediate player I want a reference for monsters and spells that I encounter, with ways to keep track of them for future reference.<br/>

As an experienced player I want to be able to keep track of my character stats and information.<br/>

As a dungeon master I want to be able to search through monsters and save them for future plans. <br/>
### API used <br/>
http://www.dnd5eapi.co/<br/>

### API example<br/>
https://www.dnd5eapi.co/api/classes/bard <br/>

## Component hierarchy <br/>
![Screenshot from 2021-01-13 02-17-50](https://user-images.githubusercontent.com/74937340/105126457-632d9480-5aa4-11eb-9d34-5fe89bd9cb4e.png)
