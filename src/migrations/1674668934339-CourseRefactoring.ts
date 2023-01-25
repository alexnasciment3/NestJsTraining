import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1674668934339 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "title" TO "name"`,
    );
  }
}
// Command line to migration "npx typeorm-ts-node-commonjs -d .\src\data-source migration:run"
