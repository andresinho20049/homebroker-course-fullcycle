import {
    Alert,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
} from "flowbite-react";
import Link from "next/link";
import { Wallet } from "@/my-app/models/wallet";
import { getListWallet } from "@/my-app/services/wallets/wallet-service";
  
export async function WalletList() {
  const wallets:Wallet[] = await getListWallet();
  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Carteiras existentes</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Acessar</TableHeadCell>
          </TableHead>
          <TableBody>
            {wallets.map((wallet) => (
              <TableRow key={wallet._id}>
                <TableCell>{wallet._id}</TableCell>
                <TableCell>
                  <Link href={`/?wallet_id=${wallet._id}`}>Acessar</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Alert className="absolute bottom-5" color="failure">Nenhuma wallet escolhida</Alert>
    </div>
  );
}