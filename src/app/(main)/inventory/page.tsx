import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { products } from '@/lib/data'

function getStockStatus(stock: number): {
  text: string
  variant: 'default' | 'secondary' | 'destructive'
} {
  if (stock === 0) {
    return { text: 'Out of Stock', variant: 'destructive' }
  }
  if (stock < 50) {
    return { text: 'Low Stock', variant: 'secondary' }
  }
  return { text: 'In Stock', variant: 'default' }
}

export default function InventoryPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory</CardTitle>
        <CardDescription>
          Track and manage your product stock levels.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                ID
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => {
              const status = getStockStatus(product.stock)
              return (
                <TableRow key={product.id}>
                  <TableCell className="hidden sm:table-cell">
                    {product.id}
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="text-right">{product.stock}</TableCell>
                  <TableCell>
                    <Badge variant={status.variant} className="capitalize">
                      {status.text}
                    </Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
