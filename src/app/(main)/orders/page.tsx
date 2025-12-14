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
import { orders } from '@/lib/data'

type OrderStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'

function getStatusVariant(
  status: OrderStatus
): 'default' | 'secondary' | 'outline' | 'destructive' {
  switch (status) {
    case 'Processing':
      return 'secondary'
    case 'Shipped':
      return 'default'
    case 'Delivered':
      return 'outline'
    case 'Cancelled':
      return 'destructive'
  }
}

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>
          A list of all recent orders in your shop.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div className="font-medium">{order.customerName}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {order.customerEmail}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {order.date}
                </TableCell>
                <TableCell className="text-right">
                  ₹{order.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
