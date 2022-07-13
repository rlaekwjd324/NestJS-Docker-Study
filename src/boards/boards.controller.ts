import { Controller, Get, Param, Patch, Post, Delete, Body, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    @Get()
    getAll() {
        return this.boardsService.getAll();
    }

    @Get(":id")
    getOne(@Param('id') boardId: number) {
        return this.boardsService.getOne(boardId);
    }

    @Post()
    create(@Body() boardData: CreateBoardDto) {
        return this.boardsService.create(boardData);
    }

    @Delete(":id")
    remove(@Param('id') boardId: number) {
        return this.boardsService.deleteOne(boardId);
    }

    @Patch(':id')
    patch(@Param('id') boardId: number, @Body() updateData: UpdateBoardDto) {
        return this.boardsService.update(boardId, updateData);
    }
}
