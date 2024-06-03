import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://fluxform_owner:ax8CtfKDSs1Y@ep-floral-leaf-a5e3e6xq.us-east-2.aws.neon.tech/fluxform?sslmode=require',
  }
});