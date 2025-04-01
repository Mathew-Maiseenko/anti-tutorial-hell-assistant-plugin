type CanvasNode = {
	id: string;
	x: number;
	y: number;
	width: number;
	height: number;
	type: "text" | "group" | "file" | "link"; // возможные типы узлов в Obsidian Canvas
	label?: string; // для групп (type="group")
	text?: string; // для текстовых узлов (type="text")
	// Дополнительные поля, которые могут быть в других узлах:
	file?: string; // для type="file" (прикрепленный файл)
	url?: string; // для type="link" (внешняя ссылка)
	color?: string; // цвет узла (опционально)
};

type CanvasEdge = {
	id?: string;
	fromNode: string; // id узла-источника
	toNode: string; // id узла-цели
	fromSide?: "top" | "right" | "bottom" | "left"; // сторона исхода
	toSide?: "top" | "right" | "bottom" | "left"; // сторона назначения
	// Дополнительные свойства связи (если есть)
	label?: string;
	color?: string;
};

export interface CanvasStructure {
	nodes: CanvasNode[];
	edges: CanvasEdge[];
}
