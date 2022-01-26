import 'chai/register-should';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import { expect } from 'chai';

describe('Bishop', () => {
    
    let board;
    beforeEach(() => board = new Board());
    const bishop = new Bishop(Player.WHITE);

    it('can move diagonally', () => {
        board.setPiece(Square.at(2, 5), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(3, 6),
            Square.at(4, 7),
            Square.at(1, 6),
            Square.at(0, 7),
            Square.at(0, 3),
            Square.at(1, 4),
            Square.at(7, 0),
            Square.at(6, 1),
            Square.at(5, 2),
            Square.at(4, 3),
            Square.at(3, 4),
        ]
        moves.should.deep.include.members(expectedMoves);

    });

    it('cannot make any other moves', () => {
        board.setPiece(Square.at(2, 5), bishop);

        const moves = bishop.getAvailableMoves(board);

        moves.should.have.length(11);
    });

    it('works in the corner of the board', () => {
        board.setPiece(Square.at(0,0), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(1, 1),
            Square.at(2, 2),
            Square.at(3, 3),
            Square.at(4, 4),
            Square.at(5, 5),
            Square.at(6, 6),
            Square.at(7, 7),
        ];

        moves.should.deep.include.members(expectedMoves);
    });

});
