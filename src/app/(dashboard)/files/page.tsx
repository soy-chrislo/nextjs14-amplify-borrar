"use client";
import { FileUploader } from "@aws-amplify/ui-react-storage";
const dictionary = {
	// use default strings for english
	en: null,
	es: {
		getFilesUploadedText(count: number) {
			return `${count} ${
				count === 1 ? "archivo cargado" : "archivos cargados"
			}`;
		},
		getFileSizeErrorText(sizeText: string) {
			return `El tamaño del archivo debe ser menor a ${sizeText}`;
		},
		getRemainingFilesText(count: number) {
			return `${count} ${count === 1 ? "archivo" : "archivos"} subiendo`;
		},
		getUploadingText(percentage: number) {
			return `Subiendo${percentage > 0 ? `: ${percentage}%` : ""}`;
		},
		getUploadButtonText(count: number) {
			return `Cargar ${count} ${count === 1 ? "archivo" : "archivos"}`;
		},
		getMaxFilesErrorText(count: number) {
			return `No se pueden seleccionar más de ${count} ${
				count === 1 ? "archivo" : "archivos"
			}. Elimine archivos antes de actualizar.`;
		},
		getErrorText(message: string) {
			return message;
		},
		doneButtonText: "Listo",
		clearAllButtonText: "Limpiar todo",
		extensionNotAllowedText: "Extensión no permitida",
		browseFilesText: "Buscar archivos",
		dropFilesText: "Arrastre los archivos aquí",
		pauseButtonText: "Pausa",
		resumeButtonText: "Reanudar",
		uploadSuccessfulText: "Carga exitosa",
		getPausedText(percentage: number) {
			return `Pausado: ${percentage}%`;
		},
	},
};

function Page() {
	return (
		<main>
			<div>Files Page</div>
			<FileUploader
				acceptedFileTypes={["image/*"]}
				path={"public-files/"}
				maxFileCount={1}
				isResumable
				displayText={dictionary.es}
			/>
		</main>
	);
}

export default Page;
