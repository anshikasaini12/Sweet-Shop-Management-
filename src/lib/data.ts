import type { Product, Customer, Order, SalesData } from './types'

export const products: Product[] = [
  {
    id: 'PROD001',
    name: 'Gourmet Gummy Bears',
    description: 'A vibrant assortment of artisanal gummy bears in various fruit flavors.',
    price: 5.99,
    stock: 150,
    imageId: '1',
  },
  {
    id: 'PROD002',
    name: 'Chocolate Truffle Box',
    description: 'Hand-crafted gourmet chocolate truffles with a dusting of cocoa powder.',
    price: 19.99,
    stock: 45,
    imageId: '2',
  },
  {
    id: 'PROD003',
    name: 'Rainbow Swirl Lollipops',
    description: 'Classic rainbow-swirled lollipops, a nostalgic and colorful treat.',
    price: 2.49,
    stock: 200,
    imageId: '3',
  },
  {
    id: 'PROD004',
    name: 'Creamy Caramel Squares',
    description: 'Rich and creamy caramel squares, individually wrapped for freshness.',
    price: 8.99,
    stock: 80,
    imageId: '4',
  },
  {
    id: 'PROD005',
    name: 'Super Sour Candies',
    description: 'A selection of sour patch candies, coated in tangy sugar crystals.',
    price: 4.99,
    stock: 120,
    imageId: '5',
  },
  {
    id: 'PROD006',
    name: 'Almond Sea Salt Bar',
    description: 'Decadent dark chocolate bar with almonds and sea salt.',
    price: 3.99,
    stock: 75,
    imageId: '6',
  },
  {
    id: 'PROD007',
    name: 'Exotic Jelly Beans',
    description: 'Colorful jelly beans in a mix of classic and exotic flavors.',
    price: 6.49,
    stock: 90,
    imageId: '7',
  },
  {
    id: 'PROD008',
    name: 'Saltwater Taffy Mix',
    description: 'Soft and chewy saltwater taffy in a variety of pastel colors.',
    price: 7.99,
    stock: 110,
    imageId: '8',
  },
]

export const customers: Customer[] = [
  {
    id: 'CUST001',
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    phone: '555-0101',
    totalSpent: 450.75,
    joinDate: '2023-01-15',
  },
  {
    id: 'CUST002',
    name: 'Bob Williams',
    email: 'bob.w@example.com',
    phone: '555-0102',
    totalSpent: 210.5,
    joinDate: '2023-02-20',
  },
  {
    id: 'CUST003',
    name: 'Charlie Brown',
    email: 'charlie.b@example.com',
    phone: '555-0103',
    totalSpent: 89.9,
    joinDate: '2023-03-10',
  },
  {
    id: 'CUST004',
    name: 'Diana Prince',
    email: 'diana.p@example.com',
    phone: '555-0104',
    totalSpent: 620.0,
    joinDate: '2023-04-05',
  },
  {
    id: 'CUST005',
    name: 'Ethan Hunt',
    email: 'ethan.h@example.com',
    phone: '555-0105',
    totalSpent: 125.4,
    joinDate: '2023-05-21',
  },
]

export const orders: Order[] = [
  {
    id: 'ORD-2024-001',
    customerName: 'Diana Prince',
    customerEmail: 'diana.p@example.com',
    date: '2024-07-20',
    amount: 45.96,
    status: 'Delivered',
  },
  {
    id: 'ORD-2024-002',
    customerName: 'Alice Johnson',
    customerEmail: 'alice.j@example.com',
    date: '2024-07-21',
    amount: 19.99,
    status: 'Shipped',
  },
  {
    id: 'ORD-2024-003',
    customerName: 'Bob Williams',
    customerEmail: 'bob.w@example.com',
    date: '2024-07-22',
    amount: 7.47,
    status: 'Processing',
  },
  {
    id: 'ORD-2024-004',
    customerName: 'Ethan Hunt',
    customerEmail: 'ethan.h@example.com',
    date: '2024-07-22',
    amount: 17.98,
    status: 'Processing',
  },
  {
    id: 'ORD-2024-005',
    customerName: 'Charlie Brown',
    customerEmail: 'charlie.b@example.com',
    date: '2024-07-18',
    amount: 25.47,
    status: 'Cancelled',
  },
]

export const salesData: SalesData[] = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
  { month: 'Jul', sales: 7000 },
]

export const inventoryDataForAI = JSON.stringify(products.map(p => ({ name: p.name, stock: p.stock })));

export const salesDataForAI = JSON.stringify([
  { productName: 'Gourmet Gummy Bears', quantity: 50, region: 'North America' },
  { productName: 'Chocolate Truffle Box', quantity: 120, region: 'Europe' },
  { productName: 'Rainbow Swirl Lollipops', quantity: 200, region: 'North America' },
  { productName: 'Super Sour Candies', quantity: 80, region: 'Asia' },
  { productName: 'Almond Sea Salt Bar', quantity: 150, region: 'Europe' },
  { productName: 'Gourmet Gummy Bears', quantity: 30, region: 'Asia' },
]);
