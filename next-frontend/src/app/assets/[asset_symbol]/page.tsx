import { AssetChartComponent } from "@/my-app/components/csr/chart/asset-chart-component";
import { AssetShow } from "@/my-app/components/ssr/assets/asset-show";
import { OrderForm } from "@/my-app/components/csr/orders/order-form";
import { OrderType } from "@/my-app/models/order";
import { getAssetBySymbol, getAssetDailies } from "@/my-app/services/assets/asset-service";
import { Card, TabItem, Tabs } from "flowbite-react";
import { Time } from "lightweight-charts";


type AssetDashboardType = {
    params: Promise<{asset_symbol: string}>;
    searchParams: Promise<{wallet_id: string}>;
}

export default async function AssetDashboardPage({
    params,
    searchParams
}:AssetDashboardType) {
    const { wallet_id } = await searchParams;
    const {asset_symbol} = await params;

    const asset = await getAssetBySymbol(asset_symbol);
    const assetDailies = await getAssetDailies(asset_symbol);
    const chartData = assetDailies.map((assetDaily) => ({
      time: (Date.parse(assetDaily.date) / 1000) as Time,
      value: assetDaily.price,
    }));

    return (
        <div className="flex flex-col space-y-5 flex-grow">
            <div className="flex flex-col space-y-2">
                <AssetShow asset={asset} />
                <div className="ml-2 font-bold text-2xl">R$ {asset.price}</div>
            </div>
            <div className="grid grid-cols-5 flex-grow gap-2">
                <div className="col-span-2">
                    <Card>
                        <Tabs>
                            <TabItem active title={<span className="text-buy">Comrpar</span>}>
                                <OrderForm asset={asset} walletId={wallet_id} type={OrderType.BUY} />
                            </TabItem>
                            <TabItem active title={<span className="text-sell">Venda</span>}>
                                <OrderForm asset={asset} walletId={wallet_id} type={OrderType.SELL} />
                            </TabItem>
                        </Tabs>
                    </Card>
                </div>
                <div className="col-span-3 flex flex-grow">
                    <AssetChartComponent asset={asset} data={chartData}/>
                </div>
            </div>
        </div>
    )
}