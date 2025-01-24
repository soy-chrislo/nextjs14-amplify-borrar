import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
	name: "nextjs-app-files",
	access: (allow) => ({
		"/private-files/{entity_id}/*": [
			allow.guest.to(["read"]),
			allow.entity("identity").to(["read", "write", "delete"]),
		],
		"/public-files/*": [
			allow.authenticated.to(["read", "write"]),
			allow.guest.to(["read", "write"]),
		],
	}),
});
