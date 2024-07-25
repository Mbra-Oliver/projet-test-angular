// @ts-ignore
import * as crypto from 'crypto-js';

const SecretKey = `SECRET_ENCRYPT`;

/**
 * Encrypt data before storing it in the local storage
 * @param value
 * @constructor
 */
export function Encrypt(value: string): string {
  return crypto.AES.encrypt(
    value,
    SecretKey.trim().replaceAll(' ', '')
  ).toString();
}

/**
 * Decrypt data retrieved from local storage
 * @param textToDecrypt
 * @constructor
 */
export function Decrypt(textToDecrypt: string | null) {
  if (textToDecrypt) {
    try {
      return crypto.AES.decrypt(
        textToDecrypt,
        SecretKey.trim().replaceAll(' ', '')
      ).toString(crypto.enc.Utf8);
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
}
