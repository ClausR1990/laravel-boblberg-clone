import { Input } from "@/shadcn/ui/input";
import { router } from "@inertiajs/react";
import React, { ElementRef, useEffect, useRef } from "react";

type SearchProps = {
    url: string;
};

const Search: React.FC<SearchProps> = ({ url }) => {
    const ref = useRef<ElementRef<"input">>(null);
    const params = new URLSearchParams(window.location.search);
    const query = params.get("soeg");
    const [searchQuery, setSearchQuery] = React.useState<string>(query ?? "");

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchQuery(value);
        router.visit(url, {
            data: {
                soeg: value,
            },
        });
    };

    useEffect(() => {
        if (query?.length === 0) {
            router.visit(url);
        }
        ref.current?.focus();
    }, [query]);

    return (
        <Input
            ref={ref}
            onChange={onChangeHandle}
            value={searchQuery}
            type="search"
            placeholder="Søg..."
        />
    );
};

export default Search;
