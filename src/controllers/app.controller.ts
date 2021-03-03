import { Controller, Get } from '@nestjs/common';
import { Wallet, Chain } from 'src/models';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  satoshi = new Wallet();
  bob = new Wallet();
  alice = new Wallet();

  constructor(private readonly appService: AppService) {}

  @Get('/chain')
  getChain(): any {
    /*
    bob.sendMoney(23, alice.publicKey);
    alice.sendMoney(5, bob.publicKey);
*/
    return Chain.instance;
  }

  @Get('/add')
  test2(): any {
    this.satoshi.sendMoney(50, this.bob.publicKey);
    return Chain.instance;
  }
}
