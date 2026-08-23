export interface Product {
  id: string;
  name: string;
  shopId: string;
  shopName: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  unit: string;
  weight: string;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  category: string;
  isOrganic?: boolean;
  description?: string;
}

export interface Shop {
  id: string;
  name: string;
  logo: string;
  banner: string;
  rating: number;
  reviews: number;
  distance: string;
  deliveryTime: string;
  minOrder: number;
  deliveryCharge: number;
  isOpen: boolean;
  address: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Pending' | 'Confirmed' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  total: number;
  items: CartItem[];
  shopName: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  name: string;
  street: string;
  area: string;
  city: string;
  pincode: string;
  isDefault: boolean;
}
