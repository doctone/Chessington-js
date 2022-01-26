import Board from '../../../src/engine/board';
import Knight from '../../../src/engine/pieces/knight';

describe('Knight', () => {
    let board;
    beforeEach(() => board = new Board());

    it('can move in an L shape'), () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(2,5), queen);

        const expectedMoves = [];
        const moves = knight.getAvailableMoves(board);
        moves.should.deep.include(expectedMoves);
    }
});
