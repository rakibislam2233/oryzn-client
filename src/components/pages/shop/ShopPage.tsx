import ProductCard from '@/components/common/ProductCard';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { Product } from '@/components/shared/BrowseCategories';
import Pagination from '@/components/shared/Pagination';
import { ChevronDown, LayoutGrid, List } from 'lucide-react';

// Mock data
const shopProducts: Product[] = [
    {
        id: '1',
        category: 'Electronics',
        name: 'Premium Noise Cancelling Wireless Headphones',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtP22_w-C3_a9b_7vR8o1WfJ5q2xY3z4e5r6t7y8u9i0o1p2a3s4d5f6g7h8j9k0l1',
        rating: 4.5,
        price: 299.00,
        originalPrice: 350.00,
        badge: { text: '-15%', colorClass: 'bg-red-500' }
    },
    {
        id: '2',
        category: 'Wearables',
        name: 'Series 7 Smart Watch with Health Tracking',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqW12_e4r5_t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m7,',
        rating: 4.8,
        price: 399.00,
        badge: { text: 'NEW', colorClass: 'bg-primary' }
    },
    {
        id: '3',
        category: 'Wearables',
        name: 'Ultra Fit Pro Smart Band',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsD12_f3g4_h5j6k7l8z9x0c1v2b3n4m5,',
        rating: 4.2,
        price: 49.00
    },
    {
        id: '4',
        category: 'Audio',
        name: 'Portable Bass Bluetooth Speaker',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m',
        rating: 4.6,
        price: 89.00,
        originalPrice: 120.00
    },
    {
        id: '5',
        category: 'Mobile',
        name: 'Pro Max 13 - 256GB Midnight Green',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_1b2n3m4,',
        rating: 4.9,
        price: 999.00
    },
    {
        id: '6',
        category: 'Gaming',
        name: 'Virtual Reality Headset Pro',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_7h8j9k0',
        rating: 4.4,
        price: 349.00,
        badge: { text: 'TRENDING', colorClass: 'bg-purple-500' }
    },
    // Duplicates for grid filling
    {
        id: '7',
        category: 'Electronics',
        name: '4K Ultra HD Action Camera',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtP22_w-C3_a9b_7vR8o1WfJ5q2xY3z4e5r6t7y8u9i0o1p2a3s4d5f6g7h8j9k0l1', // Reused image
        rating: 4.3,
        price: 199.00
    },
    {
        id: '8',
        category: 'Accessories',
        name: 'Wireless Charging Pad',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqW12_e4r5_t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m7,', // Reused
        rating: 4.1,
        price: 29.99
    },
    {
        id: '9',
        category: 'Audio',
        name: 'Pro Studio Monitor Headphones',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsD12_f3g4_h5j6k7l8z9x0c1v2b3n4m5,', // Reused
        rating: 4.7,
        price: 149.00
    }
];

const ShopPage = () => {
    return (
        <div className="w-full">
            <Breadcrumb items={[{ label: 'Shop', href: '/shop' }, { label: 'Electronics' }]} />

            {/* Banner */}
            <div className="w-full h-48 md:h-64 rounded-xl relative overflow-hidden mb-8 shadow-card group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDun76H8K_kKSNVjUY5MP7ceY4uqHg42YPEAjYkPW4hiPqm2BGle7EbMKjDd-E2jI3HEQzzA94QmAMzb4K6NJsQxzG1c0Aku3rFa2k-UMJ0WuFEJ2Dv1gTTGZq7O1qrTqZKBCABtJfQ3hUsRH77BgYFNzYInjZOI6OM5EjHJ6S988qzYLYEaCD65Zx473JJnWeKCbqHBiHdgH6w1A-wIsaFeJDNsnVVaiVqjQ7GcgiIVviRLCxJAM90KC6_Evc-2_7MrYC8isotGVhZ')" }} // Using existing image URL
                ></div>
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Electronics</h1>
                    <p className="text-white/80 text-lg max-w-lg">Browse our latest collection of premium electronic devices and accessories.</p>
                </div>
            </div>

            {/* Sort Bar */}
            <div className="bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-lg p-3 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-text-muted">Showing 1–9 of 120 results</p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="flex items-center gap-2 text-sm font-medium mr-auto sm:mr-0">
                        <span className="text-text-muted">Sort by:</span>
                        <div className="relative group cursor-pointer flex items-center gap-1 text-text-main dark:text-white">
                            Most Popular <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-3">
                        <button className="p-2 bg-primary/10 text-primary rounded-md">
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-text-muted hover:text-text-main transition-colors">
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <Pagination />
        </div>
    );
};

export default ShopPage;
