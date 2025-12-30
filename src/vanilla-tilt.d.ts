// src/vanilla-tilt.d.ts
interface VanillaTiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
  scale?: number;
  transition?: boolean;
  gyroscope?: boolean;
  [key: string]: any;
}

interface VanillaTilt {
  init: (element: HTMLElement | null, options?: VanillaTiltOptions) => void;
}

declare global {
  interface Window {
    VanillaTilt?: VanillaTilt;
  }
}

export {};