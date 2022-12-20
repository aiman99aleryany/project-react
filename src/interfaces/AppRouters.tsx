import { ReactElement } from 'react';

interface SimpleRouter {
    path: string;
    element: ReactElement;
}

interface NestedRouter {
    path: string;
    element: ReactElement;
    children?: SimpleRouter[];
}

type NestedRouters = NestedRouter[];

export type { SimpleRouter, NestedRouter, NestedRouters };
