import Piece from './piece';
import Rook from '../../../src/engine/pieces/rook';
import Bishop from '../../../src/engine/pieces/bishop';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Board from '../board';


export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let bishop;
        let rook;

        bishop = this.player == Player.WHITE 
        ? new Bishop(Player.WHITE) : new Bishop(Player.BLACK);
        rook = this.player == Player.WHITE 
        ? new Rook(Player.WHITE) : new Rook(Player.BLACK);

        let l = board.findPiece(this);

        // put bishop on the same square and get its moves
        let board1 = new Board(this.player);
        board1.setPiece(Square.at(l.row, l.col), bishop);
        let BishopMoves = bishop.getAvailableMoves(board1);
        // put rook on the same square and get its moves
        board1.setPiece(Square.at(l.row, l.col), rook);
        let RookMoves = rook.getAvailableMoves(board1);

        //combine moves
        let moves = RookMoves.concat(BishopMoves);
        return moves; 
    }
}
