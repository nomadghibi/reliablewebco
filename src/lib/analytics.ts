export type AnalyticsEventName =
  | 'cta_primary_click'
  | 'cta_call_click'
  | 'pricing_view'
  | 'package_select'
  | 'form_start'
  | 'form_submit'
  | 'outbound_stripe_click'
  | 'outbound_calendar_click';

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
    return;
  }

  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}
