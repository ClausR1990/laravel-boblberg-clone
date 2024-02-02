import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Boble, PageProps, PaginatedData, User } from "@/types";
import BobleCard from "@/Components/BobleCard";
import LaravelPagination from "@/Components/LaravelPagination";
import Search from "@/Components/Search";

export default function Index({
    auth,
    bobler,
}: PageProps<{ bobler: PaginatedData<Boble[]> }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-bold text-4xl text-primary leading-tight">
                    Bobler
                </h2>
            }
        >
            <Head title="Bobler" />
            <div className="container max-w-4xl py-12">
                <Search url="/bobler" />
                <div className="flex flex-col space-y-3 mt-6">
                    {bobler.data.map((boble) => (
                        <BobleCard key={`boble-card-${boble.id}`} {...boble} />
                    ))}
                </div>
            </div>
            <div className="py-14 bg-white border-t border-b border-primary sticky bottom-0 w-full">
                <LaravelPagination links={bobler.links} />
            </div>
        </AuthenticatedLayout>
    );
}
