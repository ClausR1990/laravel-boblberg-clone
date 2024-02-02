import BobleCard from "@/Components/BobleCard";
import LaravelPagination from "@/Components/LaravelPagination";
import MessageCard from "@/Components/MessageCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/shadcn/ui/button";
import { MessageThread, PageProps, PaginatedData, User } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Index({
    auth,
    messages,
}: PageProps<{ messages: PaginatedData<MessageThread[]> }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-bold text-4xl text-primary leading-tight">
                    Beskeder
                </h2>
            }
        >
            <Head title="Beskeder" />
            <div className="container max-w-4xl py-12">
                {/* <pre className="whitespace-pre-wrap">
                    {JSON.stringify(messages, null, 2)}
                </pre> */}
                {messages.data.length > 0 ? (
                    <div className="flex flex-col space-y-3 mt-6">
                        {messages.data.map((message) => (
                            <MessageCard
                                key={`message-card-${message.id}`}
                                {...message}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center space-y-10">
                        <h2 className="text-3xl font-medium">
                            Du har ingen beskeder endnu
                        </h2>
                        <p className="text-8xl">🥹</p>
                        <Button size="lg" asChild>
                            <Link href={route("bobler.index")}>
                                Gå til bobler
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
            <div className="py-14 bg-white border-t border-b border-primary sticky bottom-0 w-full">
                <LaravelPagination links={messages.links} />
            </div>
        </AuthenticatedLayout>
    );
}
