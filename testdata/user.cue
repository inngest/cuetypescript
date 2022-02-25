// A contrived user example.

#Post: {
	id:        string
	slug:      string
	title:     string
	subtitle?: string
	rating:    float & <=5
	category:  "tech" | "finance" | "hr"
	tags: [...string]
	references: [...{
		slug:  string
		title: string
	}]
}
