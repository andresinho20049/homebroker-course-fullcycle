'use client';

import { useRef } from "react";
import { ChartComponent, ChartComponentRef } from "./chart-component";
import { AssetShow } from "../../ssr/assets/asset-show";
import { Asset } from "@/my-app/models/asset";

type AssetChartComponentType = {
    asset: Asset;
}

export const AssetChartComponent = ({
    asset
}:AssetChartComponentType) => {
    const chartRef = useRef<ChartComponentRef>(null);


    return <ChartComponent header={<AssetShow asset={asset} />} ref={chartRef} />
}