declare module 'vanilla-tilt' {
  export interface VanillaTiltOptions {
    max?: number;
    speed?: number;
    glare?: boolean;
    "max-glare"?: number;
    scale?: number;
    transition?: boolean;
    gyroscope?: boolean;
    [key: string]: any;
  }

  export interface VanillaTilt {
    init: (element: HTMLElement | null, options?: VanillaTiltOptions) => void;
  }

  const vanillaTilt: VanillaTilt;
  export default vanillaTilt;
}