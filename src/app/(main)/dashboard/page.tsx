import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { IndianRupee, Package, ShoppingCart, Users } from 'lucide-react'
import { salesData, orders, customers, products } from '@/lib/data'
import SalesChart from './sales-chart'

const kpiData = [
  {
    title: 'Total Revenue',
    value: '₹45,231.89',
    change: '+20.1% from last month',
    icon: IndianRupee,
  },
  {
    title: 'Active Orders',
    value: `+${orders.filter((o) => o.status === 'Processing' || o.status === 'Shipped').length}`,
    change: 'View all orders',
    icon: ShoppingCart,
  },
  {
    title: 'New Customers',
    value: `+${customers.length}`,
    change: '+180.1% from last month',
    icon: Users,
  },
  {
    title: 'Products in Stock',
    value: `${products.reduce((acc, p) => acc + p.stock, 0)}`,
    change: 'Manage inventory',
    icon: Package,
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground">{kpi.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
          <CardDescription>
            An overview of your shop's sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <SalesChart data={salesData} />
        </CardContent>
      </Card>
    </div>
  )
}
