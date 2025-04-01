import { App, TFile } from "obsidian";
import { CanvasStructure } from "../types";

export async function readCanvasFile(app: App, filePath: string) {
	try {
		const file = app.vault.getAbstractFileByPath(filePath);

		if (!file) {
			console.error("404:", filePath);
			return null;
		}

		if (!(file instanceof TFile)) {
			console.error("Root is bad:", filePath);
			return null;
		}

		const content = await app.vault.read(file);

		const canvasData = JSON.parse(content) as CanvasStructure;

		return canvasData;
	} catch (error) {
		console.error("Error while reading Canvas file:", error);
		return null;
	}
}
