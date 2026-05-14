/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENWEATHER_KEY: string
  readonly VITE_OPENTRIPMAP_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}