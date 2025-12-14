export type Product = {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imageId: string
}

export type Order = {
  id: string
  customerName: string
  customerEmail: string
  date: string
  amount: number
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
}

export type Customer = {
  id: string
  name: string
  email: string
  phone: string
  totalSpent: number
  joinDate: string
}

export type SalesData = {
  month: string
  sales: number
}
