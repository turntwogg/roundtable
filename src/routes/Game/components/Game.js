import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    activeGame: state.activeGame,
  };
}

function Game({ activeGame }) {
  return (
    <div>
      {(activeGame.isFetching) ?
        (<div>Loading...</div>) :
        (
          <div>
            <h1>{activeGame.attributes.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: activeGame.attributes.body.value }}
            />
            <a href={activeGame.attributes.field_game_link.uri}>Visit site</a>
          </div>
        )}
    </div>
  );
}

module.exports = connect(mapStateToProps)(Game);
