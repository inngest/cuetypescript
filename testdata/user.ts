export const Category = {
  TECH: "tech",
  FINANCE: "finance",
  HR: "hr",
} as const;
export type Category = typeof Category[keyof typeof Category];

export interface Post {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  rating: number;
  category: Category;
  tags: Array<string>;
  references: Array<{
    slug: string;
    title: string;
  }>;
};
