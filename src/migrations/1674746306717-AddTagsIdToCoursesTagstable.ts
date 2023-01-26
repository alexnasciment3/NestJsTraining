import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddTagsIdToCoursesTagstable1674746306717
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add new column in table "courses_tags"
    await queryRunner.addColumn(
      'courses_tags',
      new TableColumn({
        name: 'tagsId',
        type: 'uuid',
        isNullable: true,
      }),
    );

    // Create foreignkey between table "courses_tag" and "courses"
    await queryRunner.createForeignKey(
      'courses_tags',
      new TableForeignKey({
        name: 'courses_tags_tags',
        columnNames: ['tagsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tags',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('courses_tags', 'courses_tags_tags');

    await queryRunner.dropColumn('courses_tags', 'tagsId');
  }
}
