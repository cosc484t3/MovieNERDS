# MovieNERDS

## How we defined a movie object:
When I created the movie component, all of its PropTypes are required, so a movie object has to have the following:
- id: number
- title: String
- year: number
- rating: String //(PG, PG-13, R, NR, MA)
- cast: Object[] //each object in the array has an **actorName** and **characterName** property
- quotes: String[] //I just made each movie object have two quotes, so the length of the array is just 2
- genres: String[] //Whatver IMDB has as the genre for the movie is how I've categorized it
- synopsis: String //tweeked a bit but meant for more of a sematic meaning than anything
- imageURL: String //source for the image tag to display movie poster thumbnail (1000 x 1500)
- bannerURL: String //source for the image tag to display recent movies across the top of the screen (1280 x 720)
- commentId: number, //unique property to iterate over
- comments: Array //holds all of the comment objects
  - comment: Object
    - name: String //username of person who leaves the comment
    - body: text //the comment text

## How to start the API:
The API should have it's own folder in the app's folder called _MovieNerdsAPI_
In order to use it's data in the app, you have to start the API.
How do you do that? 
- Open your terminal in VS Code by clicking **Ctrl + \`**
- cd .\movienerds\MovieNerdsAPI
- ```npm install``` (Only do this if you're pulling this repo for the first time)
- Run the command ```npm run dev```, and that'll get the API running on your localhost

In order to see the API running in the browser, type in http://localhost:4840 (I have it running on port 4840 becuase why not),
and you should see ```{"message":"Welcome to the Movie Nerds API! "}```. If you see that then boom, you got it running! If not, feel free to ask me for help!

The api uses different routes to get different information. So, if you're trying to use the movie data I hard coded, the route for that would be http://localhost:4840/movies. 
I have some more routes in there with different logic that can be implemented later. If you're trying to check out the different routes, dig in to the _movies.routes.js_ file in the _routes_ folder.

## How to start the React app:
So, I installed a handful of packages for react in order to make it a little smoother to code. Here are the packages you need followed by the script to install all of them:
- cd .\movienerds
-  ```npm install``` (Only do this if you're pulling this repo for the first time)
- react-router-dom: This allows me to use react Links, Route, BrowserRouter, and Switch which all make it easier to link to different pages instead of using the standard html a tag as a link (I use these React features in the _AppRouter.js_ file)
  ```
  npm install --save-dev react-router-dom
  ```
  
  After you install those two dependencies, all you have to do is run ```npm start``` and that'll get your react app running.
  
## How to navigate and use the API and major features:
-Navigation
  Our homepage has gateway portals to the designated pages we decided to implement and those include our Homepage, our Comment Forum,     and our Charatcer Details page.
  Navigation is user friedly and that is via the homepage. In order to access the comment forum you must click on the desired movie in     which you want to navigate through. Via the comment forum there is a designated button that allows you access to the character details   page.
-Homepage
  The API provides a homepage that inclides an Image Slider that includes movies that have been recently uploaded into the databse and     are displayed so. Underneathour slider we includes a section that displays famous movie lines for you to observe and interact with. We   then have movie images that are clickable and contain the title with a small descpription for the viewer.
-Comment Forum
  For our forum we decidied to provide an image banner for the intended specific movie that includes movie scenes, the movies             description aswell as links to youtube videos that contain iconic scenes. Comments will be able to be featured and shown on the side     bars where anyone can leave a comment.
-Character Details 
  The character details page includes the movie title and character list for the viewer and displays the characters in a diamond format.   When the viewer hovers over the character diamond it displays the role and character name. 
