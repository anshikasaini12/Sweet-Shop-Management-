import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { products } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import Image from 'next/image'

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => {
        const placeholder = PlaceHolderImages.find(
          (p) => p.id === product.imageId
        )
        return (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="p-0">
              {placeholder && (
                <Image
                  src={placeholder.imageUrl}
                  alt={product.name}
                  width={600}
                  height={400}
                  data-ai-hint={placeholder.imageHint}
                  className="rounded-t-lg object-cover aspect-[3/2]"
                />
              )}
            </CardHeader>
            <div className="flex flex-1 flex-col p-6">
              <CardTitle className="font-headline text-lg">
                {product.name}
              </CardTitle>
              <CardDescription className="mt-2 flex-1 text-balance">
                {product.description}
              </CardDescription>
              <div className="mt-4 text-lg font-semibold">
                ₹{product.price.toFixed(2)}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
