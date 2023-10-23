
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "./src/features/**/**/*.{ts,tsx}",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: []
    },
    "src/generated/types.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    }
  },
  verbose: true
};

export default config;
