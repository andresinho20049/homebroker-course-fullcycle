import { Asset } from "./asset";

export type Wallet = {
    _id: string;
    assets: WalletAsset[];
}

export type WalletAsset = {
    _id: string;
    asset: Asset;
    shares: number;
}