import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  if (!process.env.VITE_FRONTEND_URL) {
    throw new Error(
      "VITE_FRONTEND_URL is not defined, please check your env configuration"
    );
  }

  return defineConfig({
    plugins: [react()],

    server: {
      port: parseInt(process.env.VITE_FRONTEND_PORT),
    },
  });
};
