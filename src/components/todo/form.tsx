"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import createTodo from "@/controllers/todo/create";
import { X } from "lucide-react";
import { useState } from "react";

export function TodoDialog() {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Handle save logic here

		await createTodo({ content });

		setOpen(false);
		setContent("");
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">Add Todo</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="flex justify-between">
						Add New Todo
						<Button
							variant="ghost"
							size="icon"
							className="h-6 w-6 p-0"
							onClick={() => setOpen(false)}
						>
							<X className="h-4 w-4" />
						</Button>
					</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<Input
						placeholder="Enter todo content..."
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<div className="flex justify-end space-x-2">
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button type="submit">Save</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
