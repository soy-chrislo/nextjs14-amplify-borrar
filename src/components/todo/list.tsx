import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Schema } from "../../../amplify/data/resource";

type Todo = Schema["Todo"]["type"];

interface TodoListProps {
	todos: Todo[];
	onToggleDone?: (id: string, isDone: boolean) => void;
}

export function TodoList({ todos, onToggleDone }: TodoListProps) {
	return (
		<div className="space-y-4">
			{todos.map((todo) => (
				<Card key={todo.id}>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							<div className="flex items-center space-x-2">
								<Checkbox
									checked={todo.isDone || false}
									onCheckedChange={(checked) =>
										onToggleDone?.(todo.id, checked as boolean)
									}
								/>
								<span
									className={todo.isDone ? "line-through text-gray-500" : ""}
								>
									{todo.content}
								</span>
							</div>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-xs text-gray-500 space-y-1">
							<p>
								Creado:{" "}
								{format(new Date(todo.createdAt), "PP p", { locale: es })}
							</p>
							<p>
								Actualizado:{" "}
								{format(new Date(todo.updatedAt), "PP p", { locale: es })}
							</p>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
