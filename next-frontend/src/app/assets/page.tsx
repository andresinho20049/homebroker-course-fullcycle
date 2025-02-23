import { AssetsSync } from "@/my-app/components/csr/asset/asset-sync";
import { AssetRow } from "@/my-app/components/csr/asset/asset-row";
import { AssetShow } from "@/my-app/components/ssr/assets/asset-show";
import { getAssets } from "@/my-app/services/assets/asset-service";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

type MyWalletListType = {
  searchParams: Promise<{wallet_id: string}>
}

export default async function AssetsListPage({
  searchParams
}: MyWalletListType) {
  const assets = await getAssets();
  const {wallet_id} = await searchParams;

  return (
    <div className="flex flex-col space-y-5">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {assets.map((asset)=> (
              <AssetRow key={asset._id} asset={asset} walletId={wallet_id} />
            ))}
          </TableBody>
        </Table>
      </div>
      <AssetsSync symbols={assets.map(a => a.symbol)} />
    </div>
  );
}
