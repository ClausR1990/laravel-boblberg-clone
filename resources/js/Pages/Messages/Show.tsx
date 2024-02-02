import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { cn } from "@/shadcn";
import { Message, MessageThread, PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function Show({
    auth,
    thread,
    messages,
}: PageProps<{ thread: MessageThread; messages: Message[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-bold text-4xl text-primary leading-tight">
                    Besked
                </h2>
            }
        >
            <Head title="Besked" />
            <div className="container max-w-4xl py-14 space-y-5">
                <Link
                    className="flex gap-2 items-center text-lg font-semibold text-primary"
                    href={route("beskeder.index")}
                >
                    <ArrowLeft className="w-6 h-6" />
                    Tilbage
                </Link>
                <div className="flex flex-col space-y-6">
                    {messages.map((message) => {
                        const isUser = message.user.id === auth.user.id;
                        return (
                            <div
                                key={`message-${message.id}`}
                                className="grid grid-cols-2 gap-6"
                            >
                                <div
                                    className={cn(
                                        "p-6 rounded-lg border border-primary",
                                        isUser
                                            ? "col-start-2 bg-primary text-primary-foreground"
                                            : "col-start-1"
                                    )}
                                >
                                    {message.text}
                                    <span className="block mt-5 font-bold italic">
                                        {isUser ? "Dig" : message.user.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
