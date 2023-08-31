/**
 * @packageDocumentation
 * @module api.functional.bbs.$package.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { IBbsArticle } from "./../../../../structures/IBbsArticle";
import type { IPage } from "./../../../../structures/IPage";

/**
 * Paginate entire articles.
 * 
 * @param section Section code
 * @param input Page request info
 * @returns Paginated articles with summarized info
 * 
 * @controller BbsPackageArticlesController.index()
 * @path PATCH /bbs/package/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    section: null | string,
    input: index.Input,
): Promise<index.Output> {
    return PlainFetcher.fetch(
        {
            ...connection,
            headers: {
                ...(connection.headers ?? {}),
                "Content-Type": "application/json",
            },
        },
        {
            ...index.METADATA,
            path: index.path(section),
        } as const,
        input,
    );
}
export namespace index {
    export type Input = Primitive<IPage.IRequest>;
    export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

    export const METADATA = {
        method: "PATCH",
        path: "/bbs/package/:section/articles",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: null | string): string => {
        return `/bbs/package/${encodeURIComponent(section ?? "null")}/articles`;
    }
}

/**
 * Paginate entire articles (query ver.).
 * 
 * @param section Section code
 * @param input Page request info
 * @returns Paginated articles with summarized info
 * 
 * @controller BbsPackageArticlesController.catch()
 * @path GET /bbs/package/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $catch(
    connection: IConnection,
    section: null | string,
    input: $catch.Query,
): Promise<$catch.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...$catch.METADATA,
            path: $catch.path(section, input),
        } as const,
    );
}
export namespace $catch {
    export type Query = Primitive<IPage.IRequest>;
    export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

    export const METADATA = {
        method: "GET",
        path: "/bbs/package/:section/articles",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: null | string, input: $catch.Query): string => {
        const variables: Record<any, any> = input as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/bbs/package/${encodeURIComponent(section ?? "null")}/articles${encoded.length ? `?${encoded}` : ""}`;;
    }
}

/**
 * Read an article.
 * 
 * @param section Section code
 * @param id Target article ID
 * @returns Detailed article info
 * 
 * @controller BbsPackageArticlesController.at()
 * @path GET /bbs/package/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    section: string,
    id: null | string,
): Promise<at.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...at.METADATA,
            path: at.path(section, id),
        } as const,
    );
}
export namespace at {
    export type Output = Primitive<IBbsArticle>;

    export const METADATA = {
        method: "GET",
        path: "/bbs/package/:section/articles/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string, id: null | string): string => {
        return `/bbs/package/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
    }
}

/**
 * Get new article of a day.
 * 
 * @param section Section code
 * @param date Target data
 * @returns The new article info
 * 
 * @controller BbsPackageArticlesController.new()
 * @path GET /bbs/package/:section/articles/new/:date
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $new(
    connection: IConnection,
    section: string,
    date: string,
): Promise<$new.Output> {
    return PlainFetcher.fetch(
        connection,
        {
            ...$new.METADATA,
            path: $new.path(section, date),
        } as const,
    );
}
export namespace $new {
    export type Output = Primitive<IBbsArticle>;

    export const METADATA = {
        method: "GET",
        path: "/bbs/package/:section/articles/new/:date",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string, date: string): string => {
        return `/bbs/package/${encodeURIComponent(section ?? "null")}/articles/new/${encodeURIComponent(date ?? "null")}`;
    }
}

/**
 * Store a new article.
 * 
 * @param section Section code
 * @param input Content to store
 * @returns Newly archived article
 * 
 * @controller BbsPackageArticlesController.store()
 * @path POST /bbs/package/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection,
    section: string,
    input: store.Input,
): Promise<store.Output> {
    return PlainFetcher.fetch(
        {
            ...connection,
            headers: {
                ...(connection.headers ?? {}),
                "Content-Type": "application/json",
            },
        },
        {
            ...store.METADATA,
            path: store.path(section),
        } as const,
        input,
    );
}
export namespace store {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METADATA = {
        method: "POST",
        path: "/bbs/package/:section/articles",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string): string => {
        return `/bbs/package/${encodeURIComponent(section ?? "null")}/articles`;
    }
}

/**
 * Update an article.
 * 
 * @param section Section code
 * @param id Target article ID
 * @param input Content to update
 * @returns Updated content
 * 
 * @controller BbsPackageArticlesController.update()
 * @path PUT /bbs/package/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    section: string,
    id: string,
    input: update.Input,
): Promise<update.Output> {
    return PlainFetcher.fetch(
        {
            ...connection,
            headers: {
                ...(connection.headers ?? {}),
                "Content-Type": "application/json",
            },
        },
        {
            ...update.METADATA,
            path: update.path(section, id),
        } as const,
        input,
    );
}
export namespace update {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METADATA = {
        method: "PUT",
        path: "/bbs/package/:section/articles/:id",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string, id: string): string => {
        return `/bbs/package/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
    }
}

/**
 * Delete an article.
 * 
 * @param section Section code
 * @param id Target article ID
 * 
 * @controller BbsPackageArticlesController.delete()
 * @path DELETE /bbs/package/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $$delete(
    connection: IConnection,
    section: string,
    id: string,
): Promise<void> {
    return PlainFetcher.fetch(
        connection,
        {
            ...$$delete.METADATA,
            path: $$delete.path(section, id),
        } as const,
    );
}
export namespace $$delete {

    export const METADATA = {
        method: "DELETE",
        path: "/bbs/package/:section/articles/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string, id: string): string => {
        return `/bbs/package/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
    }
}

/**
 * Remove every articles in a section.
 * 
 * @param section Section code
 * @internal
 * 
 * @controller BbsPackageArticlesController.$delete()
 * @path DELETE /bbs/package/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $delete(
    connection: IConnection,
    section: string,
): Promise<void> {
    return PlainFetcher.fetch(
        connection,
        {
            ...$delete.METADATA,
            path: $delete.path(section),
        } as const,
    );
}
export namespace $delete {

    export const METADATA = {
        method: "DELETE",
        path: "/bbs/package/:section/articles",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string): string => {
        return `/bbs/package/${encodeURIComponent(section ?? "null")}/articles`;
    }
}