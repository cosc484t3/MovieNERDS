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
- _bannerURL_ as a source for the image tag to display recent movies across the top of the screen
