import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let l = board.findPiece(this);
        let moves = [
            Square.at(l.row+1, l.col-1), Square.at(l.row+1, l.col), Square.at(l.row+1, l.col+1),
                Square.at(l.row, l.col-1), Square.at(l.row, l.col+1),
            Square.at(l.row-1, l.col-1), Square.at(l.row-1, l.col), Square.at(l.row-1, l.col+1)
        ]
        return moves;
    }
}
