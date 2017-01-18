import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    games: state.games,
  };
}

function MainNav({ games }) {
  return (
    <nav className="site-nav">
      {games.data.map(game => (
        <Link key={game.id} to={`/game/${game.attributes.field_game_slug}`}>
          {game.attributes.title}
        </Link>
      ))}
    </nav>
  );
}

export default connect(mapStateToProps)(MainNav);
