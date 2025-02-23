import { create } from "zustand";
import { Asset } from "../models/asset";


export type AssetStore = {
    assets: Asset[];
    addAsset: (asset: Asset) => void;
    changeAsset: (asset: Asset) => void;
    removeAsset: (asset: Asset) => void;
}

export const useAssetStore = create<AssetStore>((set) => ({
    assets: [],
    addAsset: (asset) => set((state) => ({assets: [...state.assets, asset]})),
    changeAsset: (asset) => set((state) => {
        const index = state.assets.findIndex(a => a._id === asset._id);
        if(index === -1) {
            state.assets = [...state.assets, asset];
        } else {
            state.assets[index] = asset;
        }

        return {
            assets: state.assets
        }

    }),
    removeAsset: (asset) => set((state) => ({
        assets: state.assets.filter(a => a._id !== asset._id)
    }))
}))