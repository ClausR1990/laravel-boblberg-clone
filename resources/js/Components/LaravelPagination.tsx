import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shadcn/ui/pagination";
import { PaginatedData } from "@/types";

const LaravelPagination = ({
    links,
}: {
    links: PaginatedData<[]>["links"];
}) => {
    return (
        <Pagination>
            <PaginationContent className="gap-2">
                {links.map((link, index) => {
                    if (index === 0) {
                        return (
                            <PaginationItem key={link.url ?? index}>
                                <PaginationPrevious href={link.url ?? "#"} />
                            </PaginationItem>
                        );
                    }
                    if (links.length === index + 1) {
                        return (
                            <PaginationItem key={link.url ?? index}>
                                <PaginationNext href={link.url} />
                            </PaginationItem>
                        );
                    }
                    return (
                        <PaginationItem key={link.url ?? index}>
                            <PaginationLink
                                href={link.url ?? "#"}
                                isActive={link.active}
                            >
                                {link.label}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
            </PaginationContent>
        </Pagination>
    );
};

export default LaravelPagination;
