import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreatePost1596542806356 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // 写入数据库
    // queryRunner 语句执行期，创建 Table
    return await queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        {name: 'id', isGenerated: true, type: 'int', generationStrategy: 'increment', isPrimary: true},
        {name: 'title', type: 'varchar'},
        {name: 'content', type: 'text'},
        {name: 'author_id', type: 'int'}
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('posts');
  }

}
