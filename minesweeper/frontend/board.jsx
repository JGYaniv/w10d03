import React from 'react'
import Tile from './tile'


class Board extends React.Component{
    constructor(props) {
        super(props)
        // we are getting the following two lines from our props declared in game.jsx
        this.board = props.board;
        this.updateGame = props.updateGame;
        this.restartGame = props.restartGame;
    }

    render(){
        const tileObjects = this.board.grid.flat();
        const tileComponents = tileObjects.map(
            (tile, index) => (
            <Tile key={index} 
                updateGame={this.updateGame} 
                board={this.board} 
                tile={tile} />)
        )

        return (
                <div className="board">
                    {tileComponents}
                </div>
        )
        // ANYWAYS, we got an error for uncaught variant becuase we were trying to render a POJO instead of
        // a REACT component;
    }
}

export default Board;