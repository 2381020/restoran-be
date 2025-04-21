import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialTables1681994400000 implements MigrationInterface {
  name = 'CreateInitialTables1681994400000'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" SERIAL PRIMARY KEY,
        "username" VARCHAR NOT NULL,
        "email" VARCHAR NOT NULL UNIQUE,
        "password" VARCHAR NOT NULL
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "menu" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "description" TEXT,
        "price" INTEGER NOT NULL,
        "image" VARCHAR
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "cart" (
        "id" SERIAL PRIMARY KEY,
        "userId" INTEGER NOT NULL,
        "menuId" INTEGER NOT NULL,
        "quantity" INTEGER NOT NULL
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "order" (
        "id" SERIAL PRIMARY KEY,
        "userId" INTEGER NOT NULL,
        "totalPrice" INTEGER NOT NULL,
        "status" VARCHAR NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "order"`);
    await queryRunner.query(`DROP TABLE "cart"`);
    await queryRunner.query(`DROP TABLE "menu"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
