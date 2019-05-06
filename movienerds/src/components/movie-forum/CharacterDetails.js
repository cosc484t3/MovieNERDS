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
                        {currentMovie.characters.map(character => {
                            return(
                                <li>
                                    <img src={character.imageURL} alt={character.name} />
                                    <span class="overlay"></span>
                                    <span class="overlay-text">{character.name}</span>
                                </li>
                            )
                        })}
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