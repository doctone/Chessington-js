import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let l = board.findPiece(this);
        let moves = [];
        for (let i=1; i<8; i++){
            if (Square.is_valid(l.row+i, l.col+i)) moves.push(Square.at(l.row+i, l.col+i))
            if (Square.is_valid(l.row-i, l.col+i)) moves.push(Square.at(l.row-i, l.col+i))
            if (Square.is_valid(l.row-i, l.col-i)) moves.push(Square.at(l.row-i, l.col-i));
            if (Square.is_valid(l.row+i, l.col-i)) moves.push(Square.at(l.row+i, l.col-i));
        }
        return moves;
    }

}