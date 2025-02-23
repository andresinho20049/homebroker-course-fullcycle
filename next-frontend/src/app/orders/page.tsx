import { AssetShow } from "@/my-app/components/ssr/assets/asset-show";
import { OrderStatusBadge } from "@/my-app/components/ssr/orders/order-status-badge";
import { OrderTypeBadge } from "@/my-app/components/ssr/orders/order-type-badge";
import { getOrders } from "@/my-app/services/orders/order-service";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

type MyWalletListType = {
  searchParams: Promise<{wallet_id: string}>
}

export default async function AssetsListPage({
  searchParams
}: MyWalletListType) {

  const { wallet_id } = await searchParams;
  const orders = await getOrders(wallet_id);

  return (
    <div className="flex flex-col space-y-5">
      <article className="format">
        <h1>Minhas Ordens</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Preço</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Tipo</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableHead>
          <TableBody>
            {orders.map((order)=> (
              <TableRow key={order._id}>
                <TableCell>
                  <AssetShow asset={order.asset} />
                </TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.shares}</TableCell>
                <TableCell><OrderTypeBadge type={order.type} /></TableCell>
                <TableCell><OrderStatusBadge status={order.status} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
