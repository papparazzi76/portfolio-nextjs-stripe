// src/components/molecules/ServiceCard.tsx
'use client';
import { createCheckoutSession } from '@/lib/actions/stripe';

type ServiceCardProps = {
  name: string;
  description: string;
  price: number;
  stripePriceId: string;
};

export const ServiceCard = ({ name, description, price, stripePriceId }: ServiceCardProps) => {
  const handleBuy = async () => {
    await createCheckoutSession(stripePriceId);
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-gray-800 text-center">
      <h3 className="text-2xl font-bold text-white">{name}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <p className="text-4xl font-extrabold text-white my-4">${price}</p>
      <form action={() => handleBuy()}>
        <button
          type="submit"
          className="w-full px-6 py-3 font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
        >
          Contratar Ahora
        </button>
      </form>
    </div>
  );
};
