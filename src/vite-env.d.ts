/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 高德 Web 端 Key（控制台申请） */
  readonly VITE_AMAP_KEY?: string;
  /** 高德安全密钥，与 Key 配对使用（JS API 2.0） */
  readonly VITE_AMAP_SECURITY_JS_CODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
