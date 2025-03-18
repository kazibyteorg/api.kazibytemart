import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './common/order/order.module';
import { CartModule } from './common/cart/cart.module';
import { InventoryModule } from './common/inventory/inventory.module';
import { ProductModule } from './common/product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotificationModule } from './common/notification/notification.module';
import { PaymentMethodModule } from './common/payment-method/payment-method.module';
import { AddressModule } from './common/address/address.module';
import { SessionTokenModule } from './common/session-token/session-token.module';
import { LoginHistoryModule } from './common/login-history/login-history.module';
import { VerificationCodeModule } from './common/verification-code/verification-code.module';
import { PasswordResetModule } from './common/password-reset/password-reset.module';
import { CategoryModule } from './common/category/category.module';
import { SubcategoryModule } from './common/subcategory/subcategory.module';
import { BrandModule } from './common/brand/brand.module';
import { ReviewModule } from './common/review/review.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    OrderModule,
    CartModule,
    InventoryModule,
    ProductModule,
    PrismaModule,
    NotificationModule,
    PaymentMethodModule,
    AddressModule,
    SessionTokenModule,
    LoginHistoryModule,
    VerificationCodeModule,
    PasswordResetModule,
    CategoryModule,
    SubcategoryModule,
    BrandModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
