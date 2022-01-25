import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let l = board.findPiece(this);
        let moves = [];
        for (let i=1; i<7; i++){
            // towards top right corner
                moves.push(
                    Square.at(l.row+i, l.col+i),
                    Square.at(l.row-i, l.col+i),
                    Square.at(l.row-i, l.col-i),
                    Square.at(l.row+i, l.col-i)
                )
            }
            return moves;
        }

    }

/*
[
    [2,5]
    [0,]
]
*/