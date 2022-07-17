import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity({ name: 'Board' })
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200, comment: '게시판의 제목' })
    title: string;

    @Column({ type: 'varchar', length: 1000, comment: '게시판의 내용' })
    description: string;

    @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deletedAt', comment: '삭제일' })
    deletedAt?: Date | null;
}