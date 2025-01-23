import { defineBackend } from "@aws-amplify/backend";
import { generateClient } from "aws-amplify/api";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import type { Schema } from "./data/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
	auth,
	data,
});

export const amplifyClient = generateClient<Schema>();
