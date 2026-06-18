import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('orders') 
export class ORDER {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  user_id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total_price: number;

  @Column({ length: 50, default: 'pending' })
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
