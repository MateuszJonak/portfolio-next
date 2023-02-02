/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  fragment Asset on Asset {\n    title\n    description\n    contentType\n    fileName\n    size\n    url\n    width\n    height\n  }\n": types.AssetFragmentDoc,
    "\n  fragment Card on Card {\n    name\n    avatar {\n      ...Asset\n    }\n    role\n    cv {\n      sys {\n        id\n      }\n    }\n  }\n  \n": types.CardFragmentDoc,
    "\n  query GetCards($limit: Int, $preview: Boolean) {\n    cardCollection(limit: $limit, preview: $preview) {\n      items {\n        ...Card\n      }\n    }\n  }\n  \n": types.GetCardsDocument,
    "\n  fragment CV on Cv {\n    name\n    role\n    photo {\n      ...Asset\n    }\n    dateOfBirth\n    age\n    gender\n  }\n  \n": types.CvFragmentDoc,
    "\n  query GetCV($id: String!, $preview: Boolean) {\n    cv(id: $id, preview: $preview) {\n      ...CV\n    }\n  }\n  \n": types.GetCvDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Asset on Asset {\n    title\n    description\n    contentType\n    fileName\n    size\n    url\n    width\n    height\n  }\n"): (typeof documents)["\n  fragment Asset on Asset {\n    title\n    description\n    contentType\n    fileName\n    size\n    url\n    width\n    height\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Card on Card {\n    name\n    avatar {\n      ...Asset\n    }\n    role\n    cv {\n      sys {\n        id\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  fragment Card on Card {\n    name\n    avatar {\n      ...Asset\n    }\n    role\n    cv {\n      sys {\n        id\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCards($limit: Int, $preview: Boolean) {\n    cardCollection(limit: $limit, preview: $preview) {\n      items {\n        ...Card\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query GetCards($limit: Int, $preview: Boolean) {\n    cardCollection(limit: $limit, preview: $preview) {\n      items {\n        ...Card\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CV on Cv {\n    name\n    role\n    photo {\n      ...Asset\n    }\n    dateOfBirth\n    age\n    gender\n  }\n  \n"): (typeof documents)["\n  fragment CV on Cv {\n    name\n    role\n    photo {\n      ...Asset\n    }\n    dateOfBirth\n    age\n    gender\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCV($id: String!, $preview: Boolean) {\n    cv(id: $id, preview: $preview) {\n      ...CV\n    }\n  }\n  \n"): (typeof documents)["\n  query GetCV($id: String!, $preview: Boolean) {\n    cv(id: $id, preview: $preview) {\n      ...CV\n    }\n  }\n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;