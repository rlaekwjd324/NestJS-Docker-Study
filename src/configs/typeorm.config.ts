import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'test1234',
    database: 'TestDB',
    entities: [],
    synchronize: true, // ture : 실행할때마다 테이블 Drop
};