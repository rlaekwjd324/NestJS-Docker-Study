import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entity/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './boards.repository';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: Repository<Board>
    ) { this.boardRepository = boardRepository }

    private boards: Board[] = [];

    getBoards(): Promise<Board[]> {
        return this.boardRepository.find();
    }

    getBoard(id: number): Promise<Board> {
        const board = this.boardRepository.findOneBy({ id: id });
        if (!board) {
            throw new NotFoundException(`${id} 게시글은 없어`);
        }
        return board;
    }

    async deleteBoard(id: number) {
        this.getBoard(id);
        await this.boardRepository.delete({ id: id });
    }

    async createBoard(boardData: CreateBoardDto): Promise<void> {
        await this.boardRepository.save(boardData);
    }

    async updateBoard(id: number, updateData: UpdateBoardDto): Promise<void> {
        this.getBoard(id);
        await this.boardRepository.update(
            id,
            updateData
        );
    }
}
