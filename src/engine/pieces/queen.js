import Piece from './piece';
import Rook from '../../../src/engine/pieces/rook';
import Bishop from '../../../src/engine/pieces/bishop';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const bishop = new Bishop(Player.WHITE);
        const rook = new Rook(Player.WHITE);
        let l = board.findPiece(this);

        // put bishop on the same square and get its moves
        board.setPiece(Square.at(l.row, l.col), bishop);
        let BishopMoves = bishop.getAvailableMoves(board);
        // put rook on the same square and get its moves
        board.setPiece(Square.at(l.row, l.col), rook);
        let RookMoves = rook.getAvailableMoves(board);

        //combine moves
        let moves = RookMoves.concat(BishopMoves);
        return moves;
    }
}
