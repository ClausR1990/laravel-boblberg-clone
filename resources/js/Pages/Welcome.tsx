import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Button } from "@/shadcn/ui/button";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-blue-50 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <header className="flex gap-4 justify-between w-full container max-w-full border-b border-primary py-6 fixed top-0 left-0">
                    <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <ApplicationLogo className="block h-16 w-auto fill-current text-gray-800" />
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-3">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("register")}
                                    className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Hvad er Boblberg?
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Bliv inspireret
                                </Link>
                                <Button asChild>
                                    <Link href={route("login")}>Log in</Link>
                                </Button>

                                {/* <Link
                                    href={route("register")}
                                    className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link> */}
                            </>
                        )}
                    </nav>
                </header>
            </div>
        </>
    );
}
