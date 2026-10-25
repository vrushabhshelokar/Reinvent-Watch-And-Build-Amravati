import { rawEventConfig, isPlaceholder } from "@/data/event";

/**
 * Returns the verified Luma URL if configured, or a fallback hash link if unconfigured
 */
export function getRegistrationUrl(): { url: string; isConfigured: boolean } {
  const isReady = !isPlaceholder(rawEventConfig.lumaUrl);
  return {
    url: isReady ? rawEventConfig.lumaUrl : "#register",
    isConfigured: isReady,
  };
}

/**
 * Validates whether an external link is an HTTPS URL
 */
export function isSecureExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}
