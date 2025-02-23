'use client';

import { useEffect, useRef } from "react";
import { ChartComponent, ChartComponentRef } from "./chart-component";
import { AssetShow } from "../../ssr/assets/asset-show";
import { Asset } from "@/my-app/models/asset";
import { AreaData, Time } from "lightweight-charts";
import { socket } from "@/my-app/services/nest-api-base";

type AssetChartComponentType = {
    asset: Asset;
    data?: AreaData<Time>[]
}

export const AssetChartComponent = ({
    asset,
    data
}:AssetChartComponentType) => {
    const chartRef = useRef<ChartComponentRef>(null);

    useEffect(() => {
        socket.connect();

        socket.emit("joinAsset", {symbol: asset.symbol})

        socket.on('assets/daily-created', (assetDaily) => {
            console.log(assetDaily);
            chartRef.current?.update({
                time: (Date.parse(assetDaily.date) / 1000) as Time,
                value: assetDaily.price,
            })
        })

        return () => {
          socket.emit("leaveAssets", { symbols: asset.symbol });
          socket.off("assets/daily-created");
        };
    }, [])


    return <ChartComponent header={<AssetShow asset={asset} />} ref={chartRef} data={data} />
}