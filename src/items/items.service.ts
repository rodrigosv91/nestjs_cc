import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '32424234',
      name: 'Item one',
      qty: 100,
      description: 'Item one description',
    },
    {
      id: '5566544',
      name: 'Item two',
      qty: 200,
      description: 'Item two description',
    },
  ];
}
