import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAll(): Board[] {
        return this.boards.sort((a, b) => {
            return a.id - b.id;
        });
    }

    getOne(id: number): Board {
        const board = this.boards.find(board => board.id === +id);
        if (!board) {
            throw new NotFoundException(`${id} 게시글은 없어`);
        }
        return board;
    }

    deleteOne(id: number) {
        this.getOne(id);
        this.boards = this.boards.filter(board => board.id !== id);
    }

    create(boardData: CreateBoardDto) {
        this.boards.push({
            id: this.boards.length + 1,
            ...boardData
        });
    }

    update(id: number, updateData: UpdateBoardDto) {
        const board = this.getOne(id);
        this.deleteOne(id);
        this.boards.push({ ...board, ...updateData });
    }
}
