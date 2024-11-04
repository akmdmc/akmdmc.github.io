declare module 'globalValue' {
  export const age: number;
  export interface animal {
    age: number;
    kind: 'dog' | 'cat';
    makeNoise: () => void;
  }
}
