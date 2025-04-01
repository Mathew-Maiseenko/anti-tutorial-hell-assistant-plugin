import AntiTutorialHellAssistant from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

export class SampleSettingTab extends PluginSettingTab {
	plugin: AntiTutorialHellAssistant;

	constructor(app: App, plugin: AntiTutorialHellAssistant) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("Active board")
			.setDesc("Input paths to board where you want to see tutorial")
			.addSearch((cb) => {
				new FileSystemSuggest(this.app, cb.inputEl);
				cb.setPlaceholder("File paths")
					.setValue(this.plugin.settings.canvasFilePath)
					.onChange((newPath) => {
						this.plugin.settings.canvasFilePath = newPath;
						this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("Telegram-bot secret key")
			.setDesc("DO NOT SHOW THAT KEY TO ANYONE!!!")
			.addText((text) =>
				text
					.setPlaceholder("Enter paths")
					.setValue(this.plugin.settings.telegramBotPrivateKey)
					.onChange(async (value) => {
						this.plugin.settings.telegramBotPrivateKey = value;
						await this.plugin.saveSettings();
					})
			);
	}
}

class FileSystemSuggest {
	constructor(app: App, inputEl: HTMLInputElement) {
		inputEl.addEventListener("focus", () => {
			//Create list of file on focus
			const files = app.vault.getFiles();
			const datalist = document.createElement("datalist");
			datalist.id = "file-suggestions";

			files.forEach((file) => {
				const option = document.createElement("option");
				option.value = file.path;
				datalist.appendChild(option);
			});

			inputEl.setAttribute("list", "file-suggestions");
			inputEl.parentElement?.appendChild(datalist);
		});
	}
}
