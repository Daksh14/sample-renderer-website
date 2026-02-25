import { fetchAllCustomSchemaFields, saveZodSchemaCode } from "cms-renderer/lib/custom-schemas";
import path from "path";

const config = {
  cmsUrl: "https://cms.dev.tryprofound.com",
  apiKey: "sk_NW1mZ9cD9bExJpTPkodLw3rk0sISAwuLHxgod55wG0lPeX",
  websiteId: "79539651-e362-4f54-ba15-608dd267f883",
};

const outputPath = path.resolve(import.meta.dirname, "../app/generated/schemas.ts");

const schemas = await fetchAllCustomSchemaFields(config);
await saveZodSchemaCode(schemas, outputPath);

console.log(`Generated ${schemas.length} schema(s) → ${outputPath}`);
