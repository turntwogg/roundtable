import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './MainNav.css';

function mapStateToProps(state) {
  return {
    games: state.games,
  };
}

function MainNav({ games }) {
  return (
    <nav className="main-nav">
      {games.data.filter(game => game.attributes.field_main_menu).map(game => (
        <Link
          className="main-nav-link"
          key={game.id}
          to={`/game/${game.attributes.field_game_slug}`}
        >
          {game.attributes.title}
        </Link>
      ))}
    </nav>
  );
}

export default connect(mapStateToProps)(MainNav);
