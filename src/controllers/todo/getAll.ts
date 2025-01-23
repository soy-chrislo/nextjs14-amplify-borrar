import type { Schema } from "@/../amplify/data/resource";
import { generateClient } from "aws-amplify/api";
export const amplifyClient = generateClient<Schema>();

export default async function getAllTodos() {
	return (await amplifyClient.models.Todo.list()).data;
}
