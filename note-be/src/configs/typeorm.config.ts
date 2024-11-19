import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMDevConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: true,
  logging: true,
};

export const typeORMTestConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.TEST_DB_HOST,
  port: Number(process.env.TEST_DB_PORT),
  username: process.env.TEST_DB_USER,
  password: process.env.TEST_DB_PASS,
  database: process.env.TEST_DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  dropSchema: true,
};

export const typeORMProdConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
};
