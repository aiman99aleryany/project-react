interface Quote {
    id: string;
    timeStamp: number;
    content: string;
    isEdited: boolean;
}

type Quotes = Quote[];

export type { Quote, Quotes };
