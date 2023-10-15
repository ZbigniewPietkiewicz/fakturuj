import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dtos/create-product-input';
import { UpdateProductDTO } from './dtos/update-product-input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getById(productId: number): Promise<Product> {
    return await this.productRepository.findOne({ where: { id: productId } });
  }

  async create(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDTO);
    return this.productRepository.save(newProduct).catch((errors) => {
      throw new Error(errors[0].toString());
    });
  }

  async update(updateProductDTO: UpdateProductDTO): Promise<Product> {
    await this.productRepository
      .update(updateProductDTO.id, {
        ...(updateProductDTO.name && { name: updateProductDTO.name }),
        ...(updateProductDTO.price && { price: updateProductDTO.price }),
        ...(updateProductDTO.amount && { amount: updateProductDTO.amount }),
        ...(updateProductDTO.currencyCode && {
          currencyCode: updateProductDTO.currencyCode,
        }),
        ...(updateProductDTO.productionDate && {
          productionDate: updateProductDTO.productionDate,
        }),
        ...(updateProductDTO.categoryId && {
          categoryId: updateProductDTO.categoryId,
        }),
        ...(updateProductDTO.description && {
          description: updateProductDTO.description,
        }),
      })
      .catch((errors) => {
        throw new Error(errors[0].toString());
      });
    return this.productRepository.findOne({
      where: { id: updateProductDTO.categoryId },
    });
  }

  async delete(productId: number): Promise<boolean> {
    await this.productRepository.delete(productId).catch((errors) => {
      throw new Error(errors[0].toString());
    });
    return true;
  }
}
