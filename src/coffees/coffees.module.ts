import { Injectable, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entitiy';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';

class ConfigService {}

@Injectable({ scope: Scope.REQUEST })
export class CoffeeBrandsFactory {
  create() {
    /* ... do something ... */
    return ['buddy brew', 'nescafe'];
  }
}
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: ConfigService,
      useFactory: () => ['buddy brew', 'nescafe'],
    },
    {
      provide: COFFEE_BRANDS,
      scope: Scope.TRANSIENT,
      useFactory: async (connection: Connection): Promise<string[]> => {
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        console.log('Factory');
        return coffeeBrands;
      },
      inject: [Connection],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
