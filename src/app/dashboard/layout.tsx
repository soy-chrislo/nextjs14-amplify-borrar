"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import type { ReactNode } from "react";
import "@aws-amplify/ui-react/styles.css";

import outputs from "@/../amplify_outputs.json";
import { translations } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { I18n } from "aws-amplify/utils";
I18n.putVocabularies(translations);
I18n.setLanguage("es");
Amplify.configure(outputs);

function Layout({ children }: { children: ReactNode }) {
	return (
		<Authenticator className="h-screen flex flex-col items-center justify-center">
			{children}
		</Authenticator>
	);
}

export default Layout;
