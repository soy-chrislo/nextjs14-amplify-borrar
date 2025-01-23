"use client";
import { useAuthenticator } from "@aws-amplify/ui-react";
import React from "react";

function page() {
	const { user } = useAuthenticator((context) => [context.user]);

	return (
		<div className="p-6 max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold mb-6">Settings</h1>

			<div className="space-y-6">
				<section className="bg-gray-50 p-4 rounded-lg">
					<h2 className="text-xl font-semibold mb-4">User Details</h2>
					<ul className="space-y-2">
						{Object.entries(user || {}).map(([key, value]) => (
							<li key={key} className="flex">
								<span className="font-medium w-32">{key}:</span>
								<span>
									{typeof value === "object"
										? JSON.stringify(value)
										: String(value)}
								</span>
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}

export default page;
