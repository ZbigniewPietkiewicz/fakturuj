
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  generates: {
    "src/app/graphql/graphql-schema.json": {
      plugins: ["introspection"]
    },
    "src/__generated__/":
    {
      preset: "client",
      presetConfig:{
        gqlTagName: "gql"
      }
      // plugins: ["typescript", "typescript-operations"],
      // config: {
      //   declarationKind: {
      //     union: "type",
      //     type: "interface",
      //     input: "interface",
      //     scalar: "interface",
      //     arguments: "interface",
      //     interface: "interface"
      //   },
      //   enumAsTypes: true,
      //   includeDirectives: true,
      //   commentDescriptions: true,
      //   avoidOptionals: {
      //     field: false,
      //     object: false,
      //     inputValue: false,
      //   }
      // }
    }
  }
};

export default config;
