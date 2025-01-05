import { createClient } from "microcms-js-sdk";

export const microcmsClient = createClient({
    serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});
