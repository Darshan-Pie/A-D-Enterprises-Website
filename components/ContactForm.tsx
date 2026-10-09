'use client';

import { type FormEvent, useState } from 'react';
import { generalEnquiryProduct, products } from '@/lib/content';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm({ initialProduct = '' }: { initialProduct?: string }) {
  const [productSlug, setProductSlug] = useState(initialProduct || generalEnquiryProduct.slug);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setMessage('');
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const selectedProduct = products.find((product) => product.slug === productSlug);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send enquiry. Please try again.');

      setStatus('success');
      setMessage(
        selectedProduct
          ? `Thank you. Your enquiry about ${selectedProduct.name} has been received.`
          : 'Thank you. Your enquiry has been received.',
      );
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please call us directly.');
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-busy={status === 'loading'}>
      <label>
        Product of interest
        <select
          name="product"
          value={productSlug}
          onChange={(event) => setProductSlug(event.target.value)}
          required
        >
          <option value={generalEnquiryProduct.slug}>{generalEnquiryProduct.name}</option>
          {products.map((product) => (
            <option value={product.slug} key={product.slug}>{product.name}</option>
          ))}
        </select>
      </label>

      <div className="form-grid">
        <label>Name<input name="name" required maxLength={80} placeholder="Your name" /></label>
        <label>Company<input name="company" maxLength={120} placeholder="Company name" /></label>
        <label>Email<input name="email" type="email" required maxLength={160} placeholder="you@company.com" /></label>
        <label>Phone<input name="phone" required maxLength={30} placeholder="+91 ..." /></label>
      </div>
      <label>
        Requirements
        <textarea name="message" required maxLength={3000} rows={7} placeholder="Tell us about your panel / bus-duct requirement, rating, configuration or project timeline." />
      </label>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-actions">
        <button className="button button-primary" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
        </button>
        <span className={`form-status ${status}`} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">
          {message}
        </span>
      </div>
    </form>
  );
}
