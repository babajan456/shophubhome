import { Review } from "@/types";

export const reviews: Review[] = [
  // Reviews for Wireless Bluetooth Headphones (id: "1")
  {
    id: "1",
    userId: "user-1",
    productId: "1",
    userName: "Sarah Johnson",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Exceptional sound quality!",
    comment: "These headphones exceeded my expectations. The noise cancellation is incredible and the battery life is exactly as advertised. Perfect for long flights and daily commuting.",
    helpful: 24,
    verified: true,
    createdAt: new Date("2024-01-15")
  },
  {
    id: "2",
    userId: "user-2",
    productId: "1",
    userName: "Mike Chen",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Great value for money",
    comment: "Solid build quality and great sound. Only minor complaint is they can get a bit warm during extended use.",
    helpful: 12,
    verified: true,
    createdAt: new Date("2024-01-20")
  },
  
  // Reviews for iPhone 15 Pro (id: "10")
  {
    id: "3",
    userId: "user-3",
    productId: "10",
    userName: "Emily Rodriguez",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "The camera system is phenomenal",
    comment: "The titanium build feels premium and the camera quality is outstanding. The A17 Pro chip makes everything incredibly smooth. Worth the upgrade!",
    helpful: 45,
    verified: true,
    createdAt: new Date("2024-02-01")
  },
  {
    id: "4",
    userId: "user-4",
    productId: "10",
    userName: "David Kim",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Solid upgrade from iPhone 14",
    comment: "Noticeable improvements in camera and performance. Battery life is excellent. The only downside is the price, but you get what you pay for.",
    helpful: 18,
    verified: true,
    createdAt: new Date("2024-02-05")
  },

  // Reviews for MacBook Air M2 (id: "9")
  {
    id: "5",
    userId: "user-5",
    productId: "9",
    userName: "Jessica Lee",
    userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Perfect for developers",
    comment: "The M2 chip is incredibly fast for coding and development work. The battery easily lasts a full work day, and the display is gorgeous. Highly recommended for professionals.",
    helpful: 33,
    verified: true,
    createdAt: new Date("2024-01-25")
  },
  
  // Reviews for Premium Running Shoes (id: "7")
  {
    id: "6",
    userId: "user-6",
    productId: "7",
    userName: "Alex Thompson",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Best running shoes I've owned",
    comment: "Incredible cushioning and support. I've run over 200 miles in these and they still feel great. The breathable mesh keeps my feet cool during long runs.",
    helpful: 19,
    verified: true,
    createdAt: new Date("2024-01-18")
  },
  
  // Reviews for Gaming Mechanical Keyboard (id: "13")
  {
    id: "7",
    userId: "user-7",
    productId: "13",
    userName: "Ryan Parker",
    userAvatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Excellent for gaming",
    comment: "The Cherry MX Red switches feel amazing for gaming. RGB lighting is customizable and looks great. Build quality is solid, though it's a bit loud for office use.",
    helpful: 15,
    verified: true,
    createdAt: new Date("2024-02-10")
  },
  
  // Reviews for Luxury Watch (id: "12")
  {
    id: "8",
    userId: "user-8",
    productId: "12",
    userName: "Robert Wilson",
    userAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Exceptional craftsmanship",
    comment: "This watch is absolutely beautiful. The automatic movement is smooth and precise. The sapphire crystal is scratch-resistant and the leather strap is very comfortable. A true luxury piece.",
    helpful: 27,
    verified: true,
    createdAt: new Date("2024-01-30")
  },
  
  // Reviews for Smart Fitness Tracker (id: "19")
  {
    id: "9",
    userId: "user-9",
    productId: "19",
    userName: "Lisa Zhang",
    userAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    title: "Great fitness tracking features",
    comment: "Love the heart rate monitoring and GPS accuracy. The 7-day battery life is very convenient. The only issue is the sleep tracking could be more detailed.",
    helpful: 21,
    verified: true,
    createdAt: new Date("2024-02-08")
  },
  
  // Reviews for Designer Leather Jacket (id: "11")
  {
    id: "10",
    userId: "user-10",
    productId: "11",
    userName: "Maria Garcia",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    title: "Premium quality leather",
    comment: "The leather quality is outstanding and the fit is perfect. It's been my go-to jacket for months and it just keeps getting better with age. Worth every penny!",
    helpful: 16,
    verified: true,
    createdAt: new Date("2024-01-22")
  }
];

export const getReviewsForProduct = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};

export const getAverageRating = (productId: string): number => {
  const productReviews = getReviewsForProduct(productId);
  if (productReviews.length === 0) return 0;
  
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / productReviews.length;
};