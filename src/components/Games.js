import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
          <h3><Link to={`/game/${game.attributes.field_game_slug}`}>{game.attributes.title}</Link></h3>
          <div
            dangerouslySetInnerHTML={{ __html: game.attributes.body.value }}
          />
        </li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps)(Games);
