import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = []
        for (let i=location.row+1; i<8; i++) { // vertically up
            if (board.getPiece(Square.at(i, location.col))===undefined) //can move only until it meet another piece
                availableMoves.push(Square.at(i, location.col));
            else {
                //if it met an opponent's piece, it can capture it
                if (!this.sameColour(board,Square.at(i, location.col)))
                    availableMoves.push(Square.at(i, location.col));
                break;
            }
        }
        for (let i=location.row-1; i>=0; i--) { // vertically down
            if (board.getPiece(Square.at(i, location.col))===undefined)
                availableMoves.push(Square.at(i, location.col));
            else {
                //if it met an opponent's piece, it can capture it
                if (!this.sameColour(board,Square.at(i, location.col)))
                    availableMoves.push(Square.at(i, location.col));
                break;
                }
        }
        for (let i=location.col+1; i<8; i++) { // horizontally right
            if (board.getPiece(Square.at(location.row, i))===undefined)
                availableMoves.push(Square.at(location.row, i));
            else {
                //if it met an opponent's piece, it can capture it
                if (!this.sameColour(board,Square.at(location.row, i)))
                    availableMoves.push(Square.at(location.row, i));
                break;
                }
        }
        for (let i=location.col-1; i>=0; i--) { // horizontally left
            if (board.getPiece(Square.at(location.row, i))===undefined)
                availableMoves.push(Square.at(location.row, i));
            else {
                //if it met an opponent's piece, it can capture it
                if (!this.sameColour(board,Square.at(location.row, i)))
                    availableMoves.push(Square.at(location.row, i));
                break;
                }
        }
        //console.log(availableMoves);
        return availableMoves;
    }
}
