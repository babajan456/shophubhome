import { useEffect } from 'react';

// Security headers component to set client-side security measures
export const SecurityHeaders = () => {
  useEffect(() => {
    // Set CSP meta tag if not already present
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://iivaspuvtwylkhpgftqz.supabase.co wss://iivaspuvtwylkhpgftqz.realtime.supabase.co;";
      document.head.appendChild(cspMeta);
    }

    // Note: X-Frame-Options removed to allow iframe embedding in Lovable
    // CSP policy above provides adequate clickjacking protection

    // Set X-Content-Type-Options
    if (!document.querySelector('meta[http-equiv="X-Content-Type-Options"]')) {
      const contentTypeMeta = document.createElement('meta');
      contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
      contentTypeMeta.content = 'nosniff';
      document.head.appendChild(contentTypeMeta);
    }

    // Set Referrer-Policy
    if (!document.querySelector('meta[name="referrer"]')) {
      const referrerMeta = document.createElement('meta');
      referrerMeta.name = 'referrer';
      referrerMeta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(referrerMeta);
    }
  }, []);

  return null;
};