import React, { Component } from 'react'
import '../../layout/CharacterDetails.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'

class CharacterDetails extends Component {

    async componentDidMount(){
        const { actions } = this.props
        let movieID = this.props.match.params.id
        actions.updateCurrentMovie(movieID)
    }

    render() {
        const { currentMovie } = this.props

        if(!currentMovie) return null;

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

const mapStateToProps = store => {
    return {
        currentMovie: store.currentMovie
    }
}

const mapDispatchToProps = dispatch => {
    return{
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails)