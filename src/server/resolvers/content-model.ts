import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { ContentModel } from '../entities/content-model'

@Resolver()
export class ContentModelResolver {
  @Query(() => [ContentModel])
  async allContentModels() {
    return ContentModel.find()
  }

  @Mutation(() => ContentModel)
  async createContentModel(
    @Arg('name') name: string,
    @Arg('apiIdentifier') apiIdentifier: string,
    @Arg('description') description: string
  ) {
    const contentModel = ContentModel.create({
      name,
      apiIdentifier,
      description
    }).save()

    return contentModel
  }
}
