import { OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { AssetsService } from './assets.service';
import {Server} from 'socket.io';
import { Logger } from '@nestjs/common';
import { AssetDailiesService } from './asset-dalies.service';

@WebSocketGateway({cors:true})
export class AssetsGateway implements OnGatewayInit{

  logger = new Logger(AssetsGateway.name);

  constructor(private assetService: AssetsService, private assetsDailiesService: AssetDailiesService){}

  afterInit(server: Server) {
    this.assetService.subscribeUpdatedPriceEvents().subscribe(asset => {
      server.to(asset.symbol).emit('assets/price-changed', asset);
    })

    this.assetsDailiesService
      .subscribeCreatedEvents()
      .subscribe((assetDaily) => {
        server
          .to(assetDaily.asset.symbol)
          .emit(
            'assets/daily-created',
            assetDaily,
          );
      });
  }

  @SubscribeMessage('joinAssets')
  handleJoinAssets(client:any, payload: {symbols: string[]}) {
    if(!payload.symbols?.length) return;

    payload.symbols.forEach((symbol) => client.join(symbol));
    this.logger.log(`Client ${client.id} joined asset: ${payload.symbols.join(', ')}`);
  }

  @SubscribeMessage('joinAsset')
  handleJoinAsset(client:any, payload: {symbol: string}) {
    client.join(payload.symbol);
    this.logger.log(`Client ${client.id} joined asset: ${payload.symbol}`);
  }

  @SubscribeMessage('leaveAssets')
  handleLeaveAssets(client:any, payload: {symbols: string[]}) {
    if(!payload.symbols?.length) return;

    payload.symbols.forEach((symbol) => client.leave(symbol));
    this.logger.log(`Client ${client.id} left asset: ${payload.symbols.join(', ')}`);
  }

  @SubscribeMessage('leaveAsset')
  handleLeaveAsset(client:any, payload: {symbol: string}) {
    client.leave(payload.symbol);
    this.logger.log(`Client ${client.id} left asset: ${payload.symbol}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
