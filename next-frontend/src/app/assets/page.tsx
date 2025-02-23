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
              <TableRow key={asset._id}>
                <TableCell>
                  <AssetShow asset={asset} />
                </TableCell>
                <TableCell>{asset.price}</TableCell>
                <TableCell><Button color="light">Comprar/Vender</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
