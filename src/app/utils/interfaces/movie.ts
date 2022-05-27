export interface Movie {
	id?: number;
	title?: string;
	description?: string;
	score?: number;
	count?: number;
	image?: string;
}

export interface MoviePage {
	content?: Movie[];
	last?: boolean;
	totalPages?: number;
	size?: number;
	number?: number;
	first?: boolean;
	numberOfElements?: number;
	empty?: boolean;
}
