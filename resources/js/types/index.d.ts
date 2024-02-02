import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    avatar?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export type PaginatedData<T extends Record<string, unknown>[]> = {
    data: T;
    current_page: number;
    first_page_url?: string;
    from: number;
    to: number;
    last_page: number;
    links: {
        active: boolean;
        label: string;
        url: string;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    total: number;
};

export type Boble = {
    id: string;
    user_id: number;
    title: string;
    text: string;
    tags?: Record<string, unknown>;
    updated_at: Date;
    created_at: Date;
    user?: User;
};

export type MessageThread = {
    id: string;
    boble_id: number;
    user_id: number;
    created_at: Date;
    updated_at: Date;
    user: User;
    boble: Boble;
};

export type Message = {
    id: number;
    message_thread_id: string;
    text: string;
    created_at: Date;
    updated_at: Date;
    user: User;
};
