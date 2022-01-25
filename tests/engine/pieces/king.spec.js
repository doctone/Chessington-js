import 'chai/register-should';
import Board from '../../../src/engine/board';
import King from '../../../src/engine/pieces/king';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move one square in any direction', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(2, 5), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(2, 4),
            Square.at(2, 6),
            Square.at(1, 4),
            Square.at(1, 5),
            Square.at(1, 6),
            Square.at(3, 4),
            Square.at(3, 5),
            Square.at(3, 6),
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('caps the edge of the board', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(0, 5), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(0, 4), Square.at(0, 6),
            Square.at(1, 4), Square.at(1, 5), Square.at(1, 6),
        ]
        moves.should.deep.include.members(expectedMoves);
    })

});
