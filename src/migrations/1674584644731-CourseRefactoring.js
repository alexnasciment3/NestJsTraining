const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CourseRefactoring1674584644731 {

    async up(queryRunner) {
        await queryRunner.query(
            `ALTER TABLE "post" RENAME COLUMN "name" TO "title"`,
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `ALTER TABLE "post" RENAME COLUMN "title" TO "name"`,
        ) // reverts things made in "up" method
    }

}
