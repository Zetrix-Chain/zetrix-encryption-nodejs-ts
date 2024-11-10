export class KeyPair {
  getEncPublicKey(encPrivateKey: string): string

  getAddress(encPublicKey: string): string

  parsePrivateKey(encPrivateKey: string): string

  parsePublicKey(encPublicKey: string): string

  getKeyPair(): any

  checkEncPrivateKey(encPrivateKey: string): boolean

  checkEncPublicKey(encPublicKey: string): boolean

  checkAddress(address: string): boolean
}

export class keystore {
  encrypt(encPrivateKey: string, password: string, callback: any): void

  decrypt(keystore: any, password: string, callback: any): string
}

export class signature {
  sign(message: string, encPrivateKey: string): string

  verify(message: any, signature: string, encPublicKey: any): boolean
}
