/**
 * Utility functions for safely accessing browser storage (localStorage/sessionStorage)
 * Handles both server-side rendering safety and error catching
 */

/**
 * Safely get an item from sessionStorage
 * @param key The key to get from sessionStorage
 * @returns The value or null if not found or if an error occurs
 */
export function safeGetSessionItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(key);
  } catch (e) {
    console.warn("Could not access sessionStorage:", e);
    return null;
  }
}

/**
 * Safely set an item in sessionStorage
 * @param key The key to set in sessionStorage
 * @param value The value to set
 */
export function safeSetSessionItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {
    console.warn("Could not access sessionStorage:", e);
  }
}

/**
 * Safely remove an item from sessionStorage
 * @param key The key to remove from sessionStorage
 */
export function safeRemoveSessionItem(key: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    console.warn("Could not access sessionStorage:", e);
  }
}

/**
 * Safely get an item from localStorage
 * @param key The key to get from localStorage
 * @returns The value or null if not found or if an error occurs
 */
export function safeGetLocalItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn("Could not access localStorage:", e);
    return null;
  }
}

/**
 * Safely set an item in localStorage
 * @param key The key to set in localStorage
 * @param value The value to set
 */
export function safeSetLocalItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("Could not access localStorage:", e);
  }
}

/**
 * Safely remove an item from localStorage
 * @param key The key to remove from localStorage
 */
export function safeRemoveLocalItem(key: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn("Could not access localStorage:", e);
  }
}

/**
 * Safely check if an item exists in storage (either sessionStorage or localStorage)
 * @param key The key to check
 * @param storageType The type of storage to check ('session' or 'local')
 * @returns true if the item exists, false otherwise
 */
export function safeHasStorageItem(key: string, storageType: 'session' | 'local' = 'session'): boolean {
  const value = storageType === 'session' 
    ? safeGetSessionItem(key) 
    : safeGetLocalItem(key);
  return value !== null;
} 