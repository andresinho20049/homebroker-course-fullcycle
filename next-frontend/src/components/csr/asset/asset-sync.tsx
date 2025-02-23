"use client";

import { useAssetStore } from "@/my-app/hooks/asset-store";
import { Asset } from "@/my-app/models/asset";
import { socket } from "@/my-app/services/nest-api-base";
import { useEffect } from "react";

type AssetsSyncType = {
    symbols: string[];
}

export function AssetsSync({
    symbols
}:AssetsSyncType) {

  const changeAsset = useAssetStore((state) => state.changeAsset);

  useEffect(() => {
    socket.connect();

    console.log(symbols)

    socket.emit("joinAssets", { symbols: symbols });
    socket.on("assets/price-changed", (asset: Asset) => {
      console.log(asset);
      changeAsset(asset);
    });

    return () => {
      socket.emit("leaveAssets", { symbols: symbols });
      socket.off("assets/price-changed");
    };
  }, [symbols]);

  return null;
}