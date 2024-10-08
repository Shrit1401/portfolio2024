import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { news } from "./schemaTypes/news";
import { projects } from "./schemaTypes/project";
import { past } from "./schemaTypes/past";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, news, projects, past],
};
