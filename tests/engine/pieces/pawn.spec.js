import 'chai/register-should';
import Pawn from '../../../src/engine/pieces/pawn';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Pawn', () => {

    describe('white pawns', () => {

        let board;
        beforeEach(() => {
            board = new Board()
        });    
        
        it('can only move one square up if they have already moved', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 0), pawn);
            pawn.moveTo(board, Square.at(2, 0));

            const moves = pawn.getAvailableMoves(board);
            
            moves.should.have.length(1);
            moves.should.deep.include(Square.at(3, 0));
        });

        it('can move one or two squares up on their first move', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);
        });

        it('can caputure diagonally', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 5), pawn);
            const blackPawn = new Pawn(Player.BLACK);
            const blackPawn2 = new Pawn(Player.BLACK);
            board.setPiece(Square.at(2, 6), blackPawn);
            board.setPiece(Square.at(2, 4), blackPawn2);

            const moves = pawn.getAvailableMoves(board);

            const expectedMoves = [
                Square.at(2, 6),
                Square.at(2, 4),
                Square.at(2, 5),
                Square.at(3, 5)
            ]

            moves.should.deep.include.members(expectedMoves);
        })

    });

    describe('black pawns', () => {

        let board;
        beforeEach(() => board = new Board(Player.BLACK));    
        
        it('can only move one square down if they have already moved', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 0), pawn);
            pawn.moveTo(board, Square.at(5, 0));

            const moves = pawn.getAvailableMoves(board);
            
            moves.should.have.length(1);
            moves.should.deep.include(Square.at(4, 0));
        });

        it('can move one or two squares down on their first move', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(4, 7), Square.at(5, 7)]);
        });

        it('can caputure diagonally', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 5), pawn);
            const whitePawn = new Pawn(Player.WHITE);
            const whitePawn2 = new Pawn(Player.WHITE);
            board.setPiece(Square.at(5, 6), whitePawn);
            board.setPiece(Square.at(5, 4), whitePawn2);

            const moves = pawn.getAvailableMoves(board);

            const expectedMoves = [
                Square.at(5, 6),
                Square.at(5, 4),
                Square.at(5, 5),
                Square.at(4, 5)
            ]

            moves.should.deep.include.members(expectedMoves);
        })

    });

});
