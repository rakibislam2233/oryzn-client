import { ProductCard } from "@/components/common/ProductCard";
import { ArrowRight, Headphones, Package, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

export function HomePage() {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="bg-muted/30 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-primary font-bold tracking-wider text-sm uppercase">Weekend Deal</span>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                                Fresh Fruit <br /> Collection
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                                Get up to 30% off on our latest arrival of organic, fresh, and hand-picked fruits.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <Link href="/shop" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all flex items-center gap-2">
                                    Shop Now <ArrowRight className="h-5 w-5" />
                                </Link>
                                <Link href="/about" className="px-8 py-4 bg-background text-foreground border rounded-full font-bold hover:bg-muted transition-all">
                                    View Menu
                                </Link>
                            </div>
                        </div>
                        {/* Visual / Image */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-90 mix-blend-multiply"></div>
                                {/* Circle Decorations */}
                                <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                                <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>
                            </div>
                            {/* Floating Cards */}
                            <div className="absolute -bottom-6 w-full flex justify-center">
                                <div className="bg-background/80 backdrop-blur border p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs">
                                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">🥝</div>
                                    <div>
                                        <p className="font-bold text-sm">Fresh Kiwi</p>
                                        <p className="text-xs text-muted-foreground">$2.99 / kg</p>
                                    </div>
                                    <button className="ml-auto h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Truck, title: "Free Shipping", desc: "On all orders over $50" },
                        { icon: Headphones, title: "24/7 Support", desc: "Get help when you need it" },
                        { icon: ShieldCheck, title: "100% Secure", desc: "Your payment is safe" },
                        { icon: Package, title: "Money Back", desc: "30 day guarantee" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 rounded-lg border hover:shadow-md transition-shadow bg-card">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold font-sans">Browse Categories</h2>
                    <Link href="/categories" className="text-primary font-medium flex items-center gap-1 hover:underline">
                        View All <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {["Vegetables", "Fresh Fruit", "River Fish", "Meat", "Water & Drinks", "Snacks"].map((cat, i) => (
                        <Link key={i} href={`/shop?category=${cat}`} className="group flex flex-col items-center gap-3 p-6 rounded-lg border bg-card hover:border-primary hover:shadow-lg transition-all text-center">
                            <div className="h-20 w-20 rounded-full bg-muted/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                {["🥦", "🍎", "🐟", "🥩", "🥤", "🍿"][i]}
                            </div>
                            <span className="font-medium group-hover:text-primary transition-colors">{cat}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Popular Products */}
            <section className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold font-sans">Popular Products</h2>
                    <div className="hidden md:flex gap-4">
                        <button className="px-4 py-1 rounded-full bg-primary text-primary-foreground font-medium">All</button>
                        <button className="px-4 py-1 rounded-full text-muted-foreground hover:text-foreground font-medium">Vegetables</button>
                        <button className="px-4 py-1 rounded-full text-muted-foreground hover:text-foreground font-medium">Fruits</button>
                        <button className="px-4 py-1 rounded-full text-muted-foreground hover:text-foreground font-medium">Meat</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ProductCard
                        name="Green Apple" price={14.99} originalPrice={20.99} rating={5}
                        image="/placeholder" category="Fruits" discount={50}
                    />
                    <ProductCard
                        name="Fresh Indian Malta" price={20.00} rating={4}
                        image="/placeholder" category="Fruits"
                    />
                    <ProductCard
                        name="Chinese Cabbage" price={12.00} rating={5}
                        image="/placeholder" category="Vegetables" isNew
                    />
                    <ProductCard
                        name="Green Lettuce" price={9.00} rating={4}
                        image="/placeholder" category="Vegetables"
                    />
                    <ProductCard
                        name="Eggplant" price={34.00} rating={5}
                        image="/placeholder" category="Vegetables"
                    />
                    <ProductCard
                        name="Big Potatoes" price={20.00} rating={3}
                        image="/placeholder" category="Vegetables"
                    />
                    <ProductCard
                        name="Corn" price={12.00} rating={4}
                        image="/placeholder" category="Vegetables"
                    />
                    <ProductCard
                        name="Fresh Cauliflower" price={12.00} rating={5}
                        image="/placeholder" category="Vegetables"
                    />
                </div>
            </section>

            {/* Banner */}
            <section className="container mx-auto px-4">
                <div className="rounded-2xl bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center h-[300px] flex items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    <div className="relative z-10 p-8 md:p-16 max-w-2xl text-white">
                        <span className="font-bold tracking-wider uppercase mb-2 block text-green-400">Summer Sale</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">100% Fresh Fruit <br /> & Vegetables</h2>
                        <div className="flex items-center gap-4">
                            <span className="text-lg font-medium opacity-90">Starting at only</span>
                            <span className="px-3 py-1 bg-orange-500 text-white font-bold rounded">$12.99</span>
                        </div>
                        <button className="mt-8 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2">
                            Shop Now <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
