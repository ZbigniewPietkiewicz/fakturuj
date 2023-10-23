import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';
import { Inject } from '@nestjs/common';
import { CreateCategoryDTO } from './dtos/create-category-input';
import { UpdateCategoryDTO } from './dtos/update-product-inputs';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    @Inject(CategoriesService) private categoryService: CategoriesService,
  ) {}

  @Query(() => [Category])
  async getAllCategories(): Promise<Category[]> {
    return await this.categoryService.getAll();
  }

  @Query(() => Category)
  async getOneCategoryById(@Args('id') id: number): Promise<Category> {
    return await this.categoryService.getById(id);
  }

  @Mutation(() => Category)
  async createCategory(
    @Args('createCategoryDTO') createCategoryDTO: CreateCategoryDTO,
  ): Promise<Category> {
    return await this.categoryService.create(createCategoryDTO);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args('updateCategoryDTO') updateCategoryDTO: UpdateCategoryDTO,
  ): Promise<Category> {
    return await this.categoryService.update(updateCategoryDTO);
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Args('id') id: number): Promise<boolean> {
    return await this.categoryService.delete(id);
  }
}
