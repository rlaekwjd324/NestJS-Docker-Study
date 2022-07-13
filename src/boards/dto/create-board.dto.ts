import { IsString, IsOptional } from 'class-validator';

export class CreateBoardDto {

    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString({ each: true })
    readonly description: string;
}