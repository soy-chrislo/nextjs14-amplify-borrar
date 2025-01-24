import type { Schema } from "@/../amplify/data/resource";
import { generateClient } from "aws-amplify/api";
export const amplifyClient = generateClient<Schema>();

export default async function getAllTodos() {
	const { data: items } = await amplifyClient.models.Todo.list();
	return items;
}
