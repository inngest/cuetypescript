export const Status = {
  OPEN: "open",
  CLOSED: "closed",
} as const;
export type Status = typeof Status[keyof typeof Status];

export type StrFloat = string | number;

export interface Some {
  with: string;
};

export const Action = {
  PUSH: "push",
  PULL: "pull",
  REBASE: "rebase",
} as const;
export type Action = typeof Action[keyof typeof Action];

export const Heyy = {
  WHAT: "what",
  DO: "do",
} as const;
export type Heyy = typeof Heyy[keyof typeof Heyy];

export interface Event {
  name: string;
  data: {
    action: Action;
    status: Status;
    number: number;
    static: "lol this is content";
    optionalStatic?: "some opt content";
    staticNumber: 1;
    staticBool?: true;
    enabled: boolean;
    numeric: number;
    typeenum: string | number;
    nullable: string | number | null;
    typeints: string | 0;
    typestrs: "oh" | "hai" | string;
    friends: Array<{
      id: number;
      name: string;
    }>;
    nested: Array<{
      id: number;
      heyy: Heyy;
    }>;
  };
  allow: {
    with: string;
    included: boolean;
  };
  numberList: Array<number>;
  fixedNumber: Array<1 | 2 | 3.14159>;
};
