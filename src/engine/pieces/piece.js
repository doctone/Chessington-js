export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    trimAvailableMoves(board){
        let availableMoves = this.getAvailableMoves(board)
        .filter(square => this.player !== board.getPiece(square).player);
        return availableMoves
    }
}
