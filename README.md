# Determine if it's Day or Night based on a sky picture

Link to this website : https://day-night-api.herokuapp.com

API & APP based on Brain.JS Neural Networks to determine if it's Day or Night based on a picture.

Disclaimer : API made for fun for my portfolio, the Training Data is not complete, therefore do not use for serious projects.

## How To Use

1) Find a picture on unsplash for example using the KeyWords "Sky Night" or "Sky Day" : https://unsplash.com/s/photos/sky-night or https://unsplash.com/s/photos/sky-day

2) Copy the image URL/Address, for example : https://images.unsplash.com/photo-1572191783453-62f99a6055ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60

3) Insert the url in :
  -  the url input directly on the website 
  -  the API url : http://day-night-api.herokuapp.com/api?ImageUrl=...

4) The result is displayed on the website.  
In the case you use the API, you'll get the following data :  
{  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "result":"Day" OR "Night" <- main result  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "percentage":"92%" <- percentage of certainty based on the Neural Network  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "ImageUrl":"..." <- ImageUrl given to the api  
}

## Tech Stack

Node.JS, Brain.JS, Express, EJS, Mocha, Chai

## Design Used

Designed & Developped.

## Icons, Images & Other Assets sources

Background Photo by Dominik Schröder on Unsplash : https://unsplash.com/photos/FIKD9t5_5zQ

