'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Place your order');
    router.push('/');
  };
  return (
    <>
      <h1>Order product page</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
