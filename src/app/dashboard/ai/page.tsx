"use client";
import {
	Button,
	Flex,
	Heading,
	Loader,
	Text,
	TextAreaField,
	View,
} from "@aws-amplify/ui-react";
import React from "react";
import { useAIGeneration } from "./main";

export default function Page() {
	const [description, setDescription] = React.useState("");
	const [{ data, isLoading, hasError }, generateEnterpreneurIdeas] =
		useAIGeneration("generateEnterpreneurIdeas");

	const handleClick = () => {
		generateEnterpreneurIdeas({ prompt: description });
	};

	return (
		<Flex direction="column">
			<Flex direction="row">
				<TextAreaField
					autoResize
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					label="Description"
				/>
				<Button onClick={handleClick}>Generate ideas</Button>
			</Flex>
			{isLoading ? (
				<Loader variation="linear" />
			) : (
				<>
					<Heading level={2}>{data?.prompt}</Heading>
					<View as="ul">
						{data?.ideas?.map((idea) => (
							<Text as="li" key={idea}>
								{idea}
							</Text>
						))}
					</View>
					<Text>{data?.prompt}</Text>
				</>
			)}
		</Flex>
	);
}
