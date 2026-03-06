/// <reference types="vite/client" />

interface Window {
  hbspt?: {
    meetings?: {
      create: (selector: string) => void
    }
  }
}
