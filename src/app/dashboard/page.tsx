"use client";
import { TodoDialog } from "@/components/todo/form";
import { TodoList } from "@/components/todo/list";
import getAllTodos from "@/controllers/todo/getAll";
import React, { useEffect, useState } from "react";

function page() {
	const [todos, setTodos] = useState<
		{
			content: string | null;
			isDone: boolean | null;
			id: string;
			createdAt: string;
			updatedAt: string;
		}[]
	>([]);

	useEffect(() => {
		const fetchTodos = async () => {
			setTodos(await getAllTodos());
		};

		fetchTodos();
	}, []);

	return (
		<main>
			<div>Dashboard</div>
			<TodoDialog />
			<TodoList todos={todos} />
		</main>
	);
}

export default page;
