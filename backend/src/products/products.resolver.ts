import { Inject } from '@nestjs/common';
import { Product } from './products.entity';
import { ProductsService } from './products.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateProductDTO } from './dtos/create-product-input';
import { UpdateProductDTO } from './dtos/update-product-input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    @Inject(ProductsService) private productService: ProductsService,
  ) {}

  @Query(() => [Product])
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.getAll();
  }

  @Query(() => Product)
  async getOneProductById(@Args('id') id: number): Promise<Product> {
    return await this.productService.getById(id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductDTO') createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    return await this.productService.create(createProductDTO);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductDTO') updateProductDTO: UpdateProductDTO,
  ): Promise<Product> {
    return await this.productService.update(updateProductDTO);
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Args('id') id: number): Promise<boolean> {
    return await this.productService.delete(id);
  }
}
