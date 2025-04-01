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
			.addText((text) =>
				text
					.setPlaceholder("Enter paths")
					.setValue(this.plugin.settings.mySetting)
					.onChange(async (value) => {
						this.plugin.settings.mySetting = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Telegram-bot secret key")
			.setDesc("DO NOT SHOW THAT KEY TO ANYONE!!!")
			.addText((text) =>
				text
					.setPlaceholder("Enter paths")
					.setValue(this.plugin.settings.mySetting)
					.onChange(async (value) => {
						this.plugin.settings.mySetting = value;
						await this.plugin.saveSettings();
					})
			);
	}
}
