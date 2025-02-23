'use client'

import { Button, TableCell, TableRow } from "flowbite-react";
import { AssetShow } from "../../ssr/assets/asset-show";
import { Asset } from "@/my-app/models/asset";
import Link from "next/link";
import { useAssetStore } from "@/my-app/hooks/asset-store";
import { useShallow } from "zustand/shallow";

type AssetRowType = {
    asset: Asset;
    walletId: string;
}

export const AssetRow = ({
    asset,
    walletId
}:AssetRowType) => {

    const assetFound = useAssetStore(
        useShallow((state) => state
            .assets.find(a => a._id === asset._id)
        ));

    const assetCurrent = assetFound || asset;

return (
    <TableRow>
        <TableCell>
            <AssetShow asset={assetCurrent} />
        </TableCell>
        <TableCell>{assetCurrent.price}</TableCell>
        <TableCell>
            <Button
                className="w-fit no-underline"
                color="light"
                as={Link}
                href={`/assets/${assetCurrent.symbol}?wallet_id=${walletId}`}
            >
                Comprar/vender
            </Button>
        </TableCell>
    </TableRow>
)}