import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let l = board.findPiece(this)
        let moves = []
        if (this.player === Player.WHITE) {
            if (l.row !== 1){
                moves = [Square.at(l.row + 1, l.col)]
            } else {
                moves = [Square.at(l.row + 1, l.col), Square.at(l.row + 2, l.col)];
            }
        } else {
            if (l.row !== 6){
                moves = [Square.at(l.row - 1, l.col)]
            } else
            moves = [Square.at(l.row - 1, l.col), Square.at(l.row - 2, l.col)];
        }
        // check if pawn can capture

        if(this.player === Player.WHITE){
            let pieceUpAndRight = board.getPiece(Square.at(l.row+1, l.col+1));
            if (pieceUpAndRight){      
                if (pieceUpAndRight.player === Player.BLACK){
                    moves.push(Square.at(l.row+1, l.col+1));
                }
            }
            let PieceUpAndLeft = board.getPiece(Square.at(l.row+1, l.col-1));
            if (PieceUpAndLeft){
                if (PieceUpAndLeft.player === Player.BLACK){
                    moves.push(Square.at(l.row+1, l.col-1));
                }
            }
        } else {
            let pieceDownAndRight = board.getPiece(Square.at(l.row-1, l.col+1));
            if (pieceDownAndRight){      
                if (pieceDownAndRight.player === Player.WHITE){
                    moves.push(Square.at(l.row-1, l.col+1));
                }
            }
            let PieceDownAndLeft = board.getPiece(Square.at(l.row-1, l.col-1));
            if (PieceDownAndLeft){
                if (PieceDownAndLeft.player === Player.WHITE){
                    moves.push(Square.at(l.row-1, l.col-1));
                }
            }
        }

        return moves
    }
}