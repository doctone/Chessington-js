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
            // towards top right corner
            if (l.row+i <= 7 && l.col+i <= 7) moves.push(Square.at(l.row+i, l.col+i))
            if (l.row-i >= 0 && l.col+i <= 7) moves.push(Square.at(l.row-i, l.col+i))
            if (l.row-i >= 0 && l.row-i >= 0) moves.push(Square.at(l.row-i, l.col-i));
            if (l.row+i <= 7 && l.col-i >= 0) moves.push(Square.at(l.row+i, l.col-i));
        }
        return moves;
    }

}