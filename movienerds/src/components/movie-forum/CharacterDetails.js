import React, { Component } from 'react'
import '../../layout/CharacterDetails.scss'
import { MOVIE_NERDS_API_URL } from '../common/App'

export class CharacterDetails extends Component {
    state = {
      movies: []
    }

    async componentDidMount(){
        try {
          const res = await fetch(`${MOVIE_NERDS_API_URL}/movies`)
          console.log(res)
          const movieData = await res.json();
          console.log(movieData)
          this.setState({ movies: movieData.movies})
          console.log("Newly set state: ", this.state)
        } catch(e) {
          console.log(e)
        }
    }

    render() {
        const { movies } = this.state

        if(!movies) return null;

        return(
            <div class="grid-container">
                <div class="grid">
                    <ul class="char-grid">
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 1</span>
                        </li>
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 2</span>
                        </li>
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 3</span>
                        </li>
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 4</span>
                        </li>
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 5</span>
                        </li>
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 6</span>
                        </li>
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 7</span>
                        </li>
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 8</span>
                        </li>
                        <li>
                            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" alt="test" />
                            <span class="overlay"></span>
                            <span class="overlay-text">Character 9</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}