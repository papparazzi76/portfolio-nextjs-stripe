// src/lib/actions/stripe.ts
'use server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession(priceId: string) {
  const origin = headers().get('origin') || 'http://localhost:3000';

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${origin}/pago-exitoso?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/servicios`,
  });

  if (session.url) {
    redirect(session.url);
  }
}
