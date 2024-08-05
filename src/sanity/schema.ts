import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { news } from "./schemaTypes/news";
import { project } from "./schemaTypes/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, news, project],
};
