import Link from 'next/link';

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product list</h1>
      <h2>
        <Link href="/products/1">Product first</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product second</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          Product third
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}
