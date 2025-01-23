import type { Schema } from "@/../amplify/data/resource";
import { generateClient } from "aws-amplify/api";
export const amplifyClient = generateClient<Schema>();

export default async function createTodo({ content }: { content: string }) {
	return await amplifyClient.models.Todo.create({ content, isDone: false });
}
