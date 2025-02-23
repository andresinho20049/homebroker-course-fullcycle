import { Asset } from "@/my-app/models/asset";
import Image from "next/image";

type AssetShowType = {
    asset: Asset
}

export const AssetShow = ({
    asset
}: AssetShowType) => {

    const {_id, name, image, price, symbol} = asset;

    return (
        <div className="flex space-x-1">
            <div className="content-center"><Image alt={symbol} src={image} height={30} width={30} /></div>
            <div className="flex flex-col">
                <span>{name}</span>
                <span>{symbol}</span>
            </div>
        </div>
    )
}