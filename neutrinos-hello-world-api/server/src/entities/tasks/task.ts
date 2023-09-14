//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('task')
export class task {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({
    name: 'description',
    nullable: false,
    type: 'text',
    primary: false,
  })
  description: string;
  @Column({
    name: 'due_date',
    nullable: false,
    precision: 6,
    type: 'timestamp with time zone',
    primary: false,
  })
  due_date: Date;
  @Column({ name: 'priority', nullable: false, type: 'text', primary: false })
  priority: string;
  @Column({ name: 'status', nullable: false, type: 'text', primary: false })
  status: string;
}
