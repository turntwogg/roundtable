import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    games: state.games,
  };
}

function Games({ games }) {
  return (
    <ul className="game-list">
      {games.data.map(game => (
        <li key={game.id}>
          <h3>{game.attributes.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: game.attributes.body.value }} />
          <a href={game.attributes.field_game_link.uri}>Visit site</a>
        </li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps)(Games);
