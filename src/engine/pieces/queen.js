import Piece from './piece';
import Rook from '../../../src/engine/pieces/rook';
import Bishop from '../../../src/engine/pieces/bishop';
import Player from '../../../src/engine/player';


export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const bishop = new Bishop(Player.WHITE);
        const rook = new Rook(Player.WHITE);
        let l = board.findPiece(this);
        let BishopMoves = bishop.getAvailableMoves(board);
        let RookMoves = rook.getAvailableMoves(board);
        return RookMoves.push(...BishopMoves);
    }
}
