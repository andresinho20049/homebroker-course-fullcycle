export type Asset = {
    _id: string;
    name: string;
    symbol: string;
    price: number;
    image: string;
}

export type AssetDaily = {
    _id: string;
    asset: Asset;
    date: string;
    price: number;
  }