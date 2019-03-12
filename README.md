# MovieNERDS

## How I defined a movie object:
When I created the movie component, all of its PropTypes are required, so a movie object has to have the following:
- id: number
- title: String
- year: number
- rating: String //(PG, PG-13, R, NR, MA)
- cast: String[]
- quotes: String[] //I just made each movie object have two quotes, so the length of the array is just 2
- genres: String[] //Whatver IMDB has as the genre for the movie is how I've categorized it
- description: String
- imageURL: String //source for the image tag to display movie poster thumbnail

**Things I'm going to add:**
- _bannerURL_ as a source for the image tag to display recent movies across the top of the screen (1280 x 720)

## How to start the API:
The API should have it's own folder in the app's folder called _MovieNerdsAPI_
In order to use it's data in the app, you have to start the API.
How do you do that? 
- Open your terminal in VS Code by clicking **Ctrl + \`**
- Run the command ```npm run dev```, and that'll get the API running on your localhost

In order to see the API running in the browser, type in http://localhost:4840 (I have it running on port 4840 becuase why not),
and you should see ```{"message":"Welcome to the Movie Nerds API! "}```. If you see that then boom, you got it running! If not, feel free to ask me for help!

The api uses different routes to get different information. So, if you're trying to use the movie data I hard coded, the route for that would be http://localhost:4840/movies. 
I have some more routes in there with different logic that can be implemented later. If you're trying to check out the different routes, dig in to the _movies.routes.js_ file in the _routes_ folder.

## How to start the React app:
So, I installed a handful of packages for react in order to make it a little smoother to code. Here are the packages you need followed by the script to install all of them:

- react-router-dom: This allows me to use react Links, Route, BrowserRouter, and Switch which all make it easier to link to different pages instead of using the standard html a tag as a link (I use these React features in the _AppRouter.js_ file)
  ```
  npm install --save-dev react-router-dom
  ```
- prop-types: In my Movie.js file, I used prop types which I'm using to define the shape of a movie object. So, a movie object has to have the things I listed above, and prop-types just let you know what properties are included in an object, and if those properties are required.
  
  ```
  npm install --save-dev prop-types
  ```
  
  After you install those two dependencies, all you have to do is run ```npm start``` and that'll get your react app running.
