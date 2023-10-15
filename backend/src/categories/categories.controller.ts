import { Controller, Inject } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    @Inject(CategoriesService) private categoryService: CategoriesService,
  ) {}
}
