import { amplifyClient } from "../../../amplify/backend";

export default async function getAllTodos() {
	return (await amplifyClient.models.Todo.list()).data;
}
