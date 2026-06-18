import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class CUSTOMER {
  @PrimaryColumn({ length: 20 })
  CustomerId: string;

  @Column({ length: 50 })
  Name: string;

  @Column({ length: 100 })
  Email: string;

  @Column({ length: 20 })
  Phone: string;

  @Column({ length: 200 })
  Address: string;
}
