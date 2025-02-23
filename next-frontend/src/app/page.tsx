import { getMyWallet } from "@/my-app/services/wallets/wallet-service";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { AssetShow } from "../components/ssr/assets/asset-show";
import { WalletList } from "../components/ssr/wallet/wallet-list";
import Link from "next/link";
import { AssetsSync } from "../components/csr/asset/asset-sync";
import { AssetRow } from "../components/csr/asset/asset-row";

type MyWalletListType = {
  searchParams: Promise<{wallet_id: string}>
}

export default async function MyWalletListPage({
  searchParams
}: MyWalletListType) {

  const { wallet_id } = await searchParams;
  const myWallet = await getMyWallet(wallet_id);

  return (
    <div className="flex flex-col space-y-5">
      <article className="format">
        <h1>Minha Carteira</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {myWallet.assets.map((wAsset)=> (
              <AssetRow asset={wAsset.asset} walletId={wallet_id} key={wAsset.asset._id} />
            ))}
          </TableBody>
        </Table>
      </div>
      <AssetsSync 
        symbols={myWallet.assets.map(wa => wa.asset.symbol)}
      />
    </div>
  );
}
