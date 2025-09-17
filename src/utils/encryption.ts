// Cart data encryption utilities with dynamic key generation
import CryptoJS from 'crypto-js';

// Generate a session-based encryption key
const generateEncryptionKey = (): string => {
  // Use a combination of session storage and random data for key generation
  let sessionKey = sessionStorage.getItem('cart-session-key');
  if (!sessionKey) {
    sessionKey = CryptoJS.lib.WordArray.random(256/8).toString();
    sessionStorage.setItem('cart-session-key', sessionKey);
  }
  return sessionKey;
};

export const encryptData = (data: any): string => {
  try {
    const jsonString = JSON.stringify(data);
    const encryptionKey = generateEncryptionKey();
    const encrypted = CryptoJS.AES.encrypt(jsonString, encryptionKey).toString();
    return encrypted;
  } catch (error) {
    console.error('Encryption failed:', error);
    return '';
  }
};

export const decryptData = (encryptedData: string): any => {
  try {
    const encryptionKey = generateEncryptionKey();
    const decrypted = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Decryption failed:', error);
    return null;
  }
};