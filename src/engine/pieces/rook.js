import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = []
        for (let i=0; i<8; i++){
            if (i!==location.col){
                moves.push(
                    Square.at(location.row, i)
                )
            }
            if(i!==location.row){
                moves.push(
                    Square.at(i, location.col)
                )
            }
        }
        return moves
    }
}

// [1,2]
/* [
    [0,2],
    [2,2]

]
*/