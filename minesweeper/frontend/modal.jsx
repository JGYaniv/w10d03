import React from 'react'

export default class Modal extends React.Component{
    constructor(props){
        super(props)
        this.board = props.board
        this.updateGame = props.updateGame
        this.restartGame = props.restartGame
    }

    render (){
        var modalClass = "hidden"
        var modalScreenClass = ""
        var modalFormClass = ""
        var gameOverText = this.board.won() ? "YOU WIN!" : "GAME OVER!"

        if (this.board.won() || this.board.lost()) {
            modalClass = "modal"
            modalScreenClass = "modal-screen"
            modalFormClass = "modal-form"
        }

        return(
            <div className={modalClass}>
                <div className={modalScreenClass}></div>
                <div className={modalFormClass}>
                    <h1>{gameOverText}</h1>
                    <h3 onClick={this.restartGame}>restart</h3>
                </div>
            </div>
        )
    }
}