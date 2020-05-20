import React from 'react';

//how to construct with destructuring assignment?
class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.index = props.index
        this.updateGame = props.updateGame
        this.board = props.board
        this.tile = props.tile

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e){
        e.preventDefault();

        switch(e.button){
            case 0:
                this.tile.explore();
                break;
            case 2:
                console.log("right click")
                this.tile.toggleFlag();
                break;
        }

        this.updateGame(this.board)
        //this.board.grid[pos[0]][pos[1]].revealed = true// why does this not work? But the above does?
    }

    render (){
        var bombCount = ""
        const tileClasses = ["tile"]
        //if explored then we also want a class of "reveal"
        if (this.tile.bombed && this.tile.explored) {
            tileClasses.push("reveal bomb")
        } else if (this.tile.explored){
            tileClasses.push("reveal")
            bombCount = this.tile.adjacentBombCount()
        } else if (this.tile.flagged){
            tileClasses.push("flag")
        } 
         
        return(
            <li onClick={this.clickHandler} 
                onContextMenu={this.clickHandler} 
                className={tileClasses.join(" ")} 
                key={this.index}>
                    <p>{bombCount > 0 ? bombCount : ""}</p>
            </li>
        )
    }
}


export default Tile;