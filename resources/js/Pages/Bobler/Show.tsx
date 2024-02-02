import { Boble, MessageThread, PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { MessageSquareText, ArrowLeft, CircleUserRound } from "lucide-react";
import { Button } from "@/shadcn/ui/button";

export default function Show({
    auth,
    boble,
    thread,
}: PageProps<{ boble: Boble; thread: MessageThread }>) {
    console.log("🙏", thread);
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
            <div className="container max-w-4xl py-32 space-y-5">
                <Link
                    className="flex gap-2 items-center text-lg font-semibold text-primary"
                    href={route("bobler.index")}
                >
                    <ArrowLeft className="w-6 h-6" />
                    Tilbage
                </Link>
                <div className="bg-white shadow-2xl p-9 rounded-xl text-center space-y-5">
                    <div className="aspect-square rounded-full overflow-hidden relative w-56 border-4 border-blue-100 mx-auto -mt-40">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 500"
                            className="absolute fill-white"
                        >
                            <path
                                d="m123.6,240.97c-9.26.05-16.8-7.42-16.85-16.67,0-1.15.11-2.29.33-3.42,11.68-57.21,56.33-101.95,113.52-113.73,9.07-1.86,17.94,3.99,19.79,13.07,1.86,9.07-3.99,17.94-13.07,19.79-44.06,8.96-78.46,43.44-87.34,87.51-1.58,7.81-8.43,13.42-16.4,13.45Z"
                                transform="translate(-7.75 -7.75)"
                                className="fill-white"
                                fillOpacity="0.4"
                            />
                            <circle
                                cx="250"
                                cy="250"
                                r="250"
                                fillOpacity="0.1"
                            />
                        </svg>
                        <img
                            className="w-full h-full object-cover aspect-square"
                            src={boble.user?.avatar}
                        />
                    </div>
                    <span className="flex items-center justify-center gap-2">
                        <CircleUserRound className="text-primary w-5 h-5" />
                        {boble.user?.name}
                    </span>
                    <h2 className="font-semibold text-2xl">{boble.title}</h2>
                    <p>{boble.text}</p>
                    {thread ? (
                        <Button asChild>
                            <Link
                                href={route("beskeder.show", { id: thread.id })}
                            >
                                <MessageSquareText />
                                Fortsæt samtalen
                            </Link>
                        </Button>
                    ) : (
                        <Button asChild>
                            <Link href="">
                                <MessageSquareText />
                                Send besked
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
