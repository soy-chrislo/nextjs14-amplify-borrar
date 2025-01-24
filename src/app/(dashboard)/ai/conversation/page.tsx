"use client";
import { AIConversation } from "@aws-amplify/ui-react-ai";
import { useAIConversation } from "../main";

export default function Page() {
	const [
		{
			data: { messages },
			isLoading,
		},
		handleSendMessage,
	] = useAIConversation("chat");
	// 'chat' is based on the key for the conversation route in your schema.

	return (
		<AIConversation
			messages={messages}
			isLoading={isLoading}
			handleSendMessage={handleSendMessage}
		/>
	);
}
