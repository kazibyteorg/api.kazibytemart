import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductCouponService } from './product-coupon.service';
import { CreateProductCouponDto } from './dto/create-product-coupon.dto';
import { UpdateProductCouponDto } from './dto/update-product-coupon.dto';

@Controller('product-coupon')
export class ProductCouponController {
  constructor(private readonly productCouponService: ProductCouponService) {}

  @Post()
  create(@Body() createProductCouponDto: CreateProductCouponDto) {
    return this.productCouponService.create(createProductCouponDto);
  }

  @Get()
  findAll() {
    return this.productCouponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productCouponService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductCouponDto: UpdateProductCouponDto) {
    return this.productCouponService.update(+id, updateProductCouponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCouponService.remove(+id);
  }
}
