import { Field, ID, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class ContentModel extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column('text', { unique: true })
  name: string

  @Field()
  @Column('text', { unique: true })
  apiIdentifier: string

  @Field()
  @Column()
  description: string
}
