import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [AuthModule, UserModule, OrderModule, CartModule, InventoryModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
