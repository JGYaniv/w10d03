import React from 'react'
import * as Minesweeper from './minesweeper'
import Board from './board'
import Modal from './modal'

class Game extends React.Component {
    constructor(props){
        super(props);
        const board = new Minesweeper.Board(8, 8);
        this.state = { board: board};
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(updatedBoardObject){
        this.setState({ board: updatedBoardObject})
    }

    restartGame(){
        let newBoard = new Minesweeper.Board(8, 8);
        this.setState({ board: newBoard })
        console.log("restarting...")
    }
// send zip when possible!! :)
// why do ghost tags not work here??? GOtit!
    render(){
        return(
            <div>
                <Modal board={this.state.board} updateGame={this.updateGame} restartGame={this.restartGame} />
                <Board board={this.state.board} updateGame={this.updateGame} restartGame={this.restartGame}/>
                <h3 onClick={this.restartGame}>restart... please...</h3>
            </div>
        )
    }
}

export default Game;