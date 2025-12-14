'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Boxes,
  BrainCircuit,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
} from 'lucide-react'

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { Logo } from '@/components/icons'
import { Separator } from './ui/separator'

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/products', icon: Package, label: 'Products' },
  { href: '/inventory', icon: Boxes, label: 'Inventory' },
  { href: '/orders', icon: ShoppingCart, label: 'Orders' },
  { href: '/customers', icon: Users, label: 'Customers' },
  { href: '/trends', icon: BrainCircuit, label: 'Trend Analysis' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex h-12 items-center gap-2 px-2">
          <Logo className="text-primary" />
          <span className="font-headline text-lg font-semibold">
            Kata Sweet Shop
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <Separator className="my-2" />
        <div className="p-2 text-center text-xs text-muted-foreground">
          <p>&copy; 2024 Kata Sweet Shop. All rights reserved.</p>
        </div>
      </SidebarFooter>
    </>
  )
}
