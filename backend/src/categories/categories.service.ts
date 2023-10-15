import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDTO } from './dtos/create-category-input';
import { UpdateCategoryDTO } from './dtos/update-product-inputs';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async getById(categoryId: number): Promise<Category> {
    return await this.categoryRepository.findOne({ where: { id: categoryId } });
  }

  async create(createCategoryDTO: CreateCategoryDTO): Promise<Category> {
    const newCategory = this.categoryRepository.create(createCategoryDTO);
    return this.categoryRepository.save(newCategory).catch((errors) => {
      throw new Error(errors[0].toString());
    });
  }

  async update(updateCategoryDTO: UpdateCategoryDTO): Promise<Category> {
    await this.categoryRepository
      .update(updateCategoryDTO.id, {
        ...(updateCategoryDTO.name && { name: updateCategoryDTO.name }),
      })
      .catch((errors) => {
        throw new Error(errors[0].toString());
      });
    return this.categoryRepository.findOne({
      where: { id: updateCategoryDTO.id },
    });
  }

  async delete(categoryId: number): Promise<boolean> {
    await this.categoryRepository.delete(categoryId).catch((errors) => {
      throw new Error(errors[0].toString());
    });
    return true;
  }
}
