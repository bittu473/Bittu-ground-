import { Product, Shop, Category, Order, User } from '../types';

export const mockCategories: Category[] = [
  { id: 'c1', name: 'Vegetables', icon: 'Carrot' },
  { id: 'c2', name: 'Fruits', icon: 'Apple' },
  { id: 'c3', name: 'Grocery', icon: 'ShoppingBasket' },
  { id: 'c4', name: 'Dairy', icon: 'Milk' },
  { id: 'c5', name: 'Bakery', icon: 'Croissant' },
  { id: 'c6', name: 'Organic', icon: 'Leaf' },
  { id: 'c7', name: 'Household', icon: 'Home' },
  { id: 'c8', name: 'Beverages', icon: 'Coffee' },
];

export const mockShops: Shop[] = [
  {
    id: 's1',
    name: 'Fresh Fruits Hub',
    logo: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=150&h=150',
    banner: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 128,
    distance: '1.2 km',
    deliveryTime: '30-40 min',
    minOrder: 199,
    deliveryCharge: 0,
    isOpen: true,
    address: '123 Market St, Mumbai'
  },
  {
    id: 's2',
    name: 'Daily Needs Mart',
    logo: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=150&h=150',
    banner: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
    reviews: 342,
    distance: '1.8 km',
    deliveryTime: '20-30 min',
    minOrder: 149,
    deliveryCharge: 20,
    isOpen: true,
    address: '456 Main Rd, Mumbai'
  },
  {
    id: 's3',
    name: 'Green Organic Store',
    logo: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&q=80&w=150&h=150',
    banner: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 89,
    distance: '2.1 km',
    deliveryTime: '30-45 min',
    minOrder: 199,
    deliveryCharge: 0,
    isOpen: false,
    address: '789 Park Ave, Mumbai'
  }
];

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Cauliflower',
    shopId: 's1',
    shopName: 'Fresh Fruits Hub',
    price: 25,
    originalPrice: 35,
    discountPercentage: 29,
    unit: '1kg',
    weight: '1kg',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=300',
    rating: 4.5,
    reviews: 45,
    stock: 50,
    category: 'Vegetables',
    isOrganic: true,
    description: 'Fresh and farm-picked cauliflower.'
  },
  {
    id: 'p2',
    name: 'Apple Premium',
    shopId: 's1',
    shopName: 'Fresh Fruits Hub',
    price: 120,
    originalPrice: 150,
    discountPercentage: 20,
    unit: '1kg',
    weight: '1kg',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&q=80&w=300',
    rating: 4.8,
    reviews: 120,
    stock: 30,
    category: 'Fruits',
    description: 'Crisp and sweet premium apples.'
  },
  {
    id: 'p3',
    name: 'Amul Milk',
    shopId: 's2',
    shopName: 'Daily Needs Mart',
    price: 52,
    originalPrice: 60,
    discountPercentage: 13,
    unit: '1L',
    weight: '1L',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300',
    rating: 4.6,
    reviews: 320,
    stock: 100,
    category: 'Dairy',
    description: 'Pure and fresh homogenized milk.'
  },
  {
    id: 'p4',
    name: 'Eggs (Farm)',
    shopId: 's2',
    shopName: 'Daily Needs Mart',
    price: 36,
    originalPrice: 45,
    discountPercentage: 20,
    unit: '6 pcs',
    weight: '6 pcs',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=300',
    rating: 4.4,
    reviews: 85,
    stock: 40,
    category: 'Dairy',
    isOrganic: true
  },
  {
    id: 'p5',
    name: 'Basmati Rice',
    shopId: 's3',
    shopName: 'Green Organic Store',
    price: 110,
    originalPrice: 140,
    discountPercentage: 21,
    unit: '1kg',
    weight: '1kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300',
    rating: 4.7,
    reviews: 210,
    stock: 200,
    category: 'Grocery'
  },
  {
    id: 'p6',
    name: 'Banana',
    shopId: 's1',
    shopName: 'Fresh Fruits Hub',
    price: 40,
    originalPrice: 50,
    discountPercentage: 20,
    unit: 'dozen',
    weight: 'dozen',
    image: 'https://images.unsplash.com/photo-1571501478200-7206b0dcc522?auto=format&fit=crop&q=80&w=300',
    rating: 4.6,
    reviews: 128,
    stock: 60,
    category: 'Fruits',
    description: 'Fresh and ripe banana. Naturally sweet and best quality fruits handpicked for you.'
  }
];

export const mockUser: User = {
  id: 'u1',
  name: 'Bittu Kumar',
  email: 'bittukumarparewa91029@gmail.com',
  phone: '+91 9876543210',
  addresses: [
    {
      id: 'a1',
      type: 'Home',
      name: 'Bittu Kumar',
      street: '123, Shanti Nagar, Near School',
      area: 'Mumbai, Maharashtra',
      city: 'Mumbai',
      pincode: '400001',
      isDefault: true
    }
  ]
};

export const mockOrders: Order[] = [
  {
    id: '#FL12345',
    date: '12 May 2024',
    status: 'Delivered',
    total: 359.00,
    shopName: 'Fresh Fruits Hub',
    items: [
      { product: mockProducts[5], quantity: 2 },
      { product: mockProducts[1], quantity: 1 }
    ]
  },
  {
    id: '#FL12346',
    date: '12 May 2024',
    status: 'Processing',
    total: 245.00,
    shopName: 'Daily Needs Mart',
    items: [
      { product: mockProducts[2], quantity: 3 }
    ]
  }
];
