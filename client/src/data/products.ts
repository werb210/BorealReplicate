export type Product = {
  slug: string;
  name: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "line-of-credit",
    name: "Line of Credit",
    image: "/images/products/loc.jpg",
    description: "Flexible revolving capital for working capital needs.",
  },
  {
    slug: "term-loan",
    name: "Term Loan",
    image: "/images/products/term-loan.jpg",
    description: "Structured financing with predictable repayment.",
  },
  {
    slug: "factoring",
    name: "Invoice Factoring",
    image: "/images/products/factoring.jpg",
    description: "Unlock capital tied up in receivables.",
  },
  {
    slug: "po-financing",
    name: "Purchase Order Financing",
    image: "/images/products/po.jpg",
    description: "Fund supplier orders before delivery.",
  },
  {
    slug: "asset-based-lending",
    name: "Asset Based Lending",
    image: "/images/products/abl.jpg",
    description: "Leverage assets to increase borrowing capacity.",
  },
];

export default products;
