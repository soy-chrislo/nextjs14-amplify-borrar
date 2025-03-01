"use client";
import { TodoDialog } from "@/components/todo/form";
import { TodoList } from "@/components/todo/list";
import getAllTodos from "@/controllers/todo/getAll";
import { generateClient } from "aws-amplify/api";
import React, { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";

const amplifyClient = generateClient<Schema>();

function page() {
	const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);
	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		const fetchTodos = async () => {
			setTodos(await getAllTodos());
			const { data: messageData } = await amplifyClient.queries.sayHello({
				name: "Amplify",
			});
			setMessage(messageData);
		};

		fetchTodos();
	}, []);

	return (
		<main>
			<div>Dashboard</div>
			<TodoDialog />
			<TodoList todos={todos} />
			{message && <div>{message}</div>}
		</main>
	);
}

export default page;
