Status: "open" | "closed"

StrFloat: string | float

#Some: {
	with: string
	...
}

#Event: {
	name: string
	data: {
		action:          "push" | "pull" | "rebase"
		another_enum:    "pending" | "in_progress" | "done"
		status:          Status
		number:          uint & <=10
		static:          "lol this is content"
		optionalStatic?: "some opt content"
		staticNumber:    1
		staticBool?:     true
		enabled:         bool
		numeric:         number
		typeenum:        string | int
		nullable:        string | float | null
		typeints:        string | 0
		typestrs:        "oh" | "hai" | string
		friends: [...{
			id:   int
			name: string
		}]
		nested: [...{
			id:   int
			heyy: "what" | "do"
		}]
	}
	allow: #Some & {
		included: bool
	}
	numberList: [...(int | float)]
	fixedNumber: [1, 2, 3.14159]
}
