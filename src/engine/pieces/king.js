import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let l = board.findPiece(this);
        // if (7 > l.row > 0 && 7 > l.col > 0){
            return [
                Square.at(l.row+1, l.col-1), Square.at(l.row+1, l.col), Square.at(l.row+1, l.col+1),
                    Square.at(l.row, l.col-1), Square.at(l.row, l.col+1),
                Square.at(l.row-1, l.col-1), Square.at(l.row-1, l.col), Square.at(l.row-1, l.col+1)
            ]
        // }
    }
}
