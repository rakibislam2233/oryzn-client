import { Eye, Heart, ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    category: string;
    isNew?: boolean;
    discount?: number;
}

export function ProductCard({ name, price, originalPrice, rating, image, category, isNew, discount }: ProductCardProps) {
    return (
        <div className="group relative border rounded-lg bg-card p-4 transition-all hover:shadow-lg hover:border-primary/50">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {discount && (
                    <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                        -{discount}%
                    </span>
                )}
                {isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                    </span>
                )}
            </div>

            {/* Actions (Hover) */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="h-8 w-8 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                    <Heart className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                    <Eye className="h-4 w-4" />
                </button>
            </div>

            {/* Image */}
            <div className="relative aspect-square mb-4 overflow-hidden rounded-md bg-muted/20">
                {/* Using a colorful placeholder div since we don't have real images yet, 
             but typically would be <Image src={image} ... /> */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl">🍎</span>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{category}</span>
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < rating ? "fill-current" : "text-gray-300"}`} />
                        ))}
                    </div>
                </div>

                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                    {name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">${price.toFixed(2)}</span>
                        {originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
                        )}
                    </div>
                    <button className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                        <ShoppingCart className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
