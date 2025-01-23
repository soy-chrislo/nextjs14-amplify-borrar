import { amplifyClient } from "../../../amplify/backend";

export default async function createTodo({ content }: { content: string }) {
	return await amplifyClient.models.Todo.create({ content, isDone: false });
}
