import React from 'react';
import '../index.css';

const CharacterCard = props => {
	return (
		<div className="card-wrapper">
			<img src={props.character.image} alt="A Rick and Morty character" />
		</div>
	)
}

export default CharacterCard;