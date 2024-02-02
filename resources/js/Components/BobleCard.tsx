import React from "react";
import { Link } from "@inertiajs/react";
import dayjs from "dayjs";
import { Button } from "@/shadcn/ui/button";
import { Boble } from "@/types";

const BobleCard: React.FC<Boble> = ({ id, title, text, updated_at, user }) => {
    return (
        <Link className="group" href={route("bobler.show", { id })}>
            <div className="group-hover:bg-blue-50 transition-all border border-primary rounded-lg p-4 py-6 bg-blue-100 flex items-center space-x-5">
                <div className="flex-[0_0_130px] space-y-3 text-center">
                    <div className="aspect-square rounded-full border-4 border-blue-200 overflow-hidden relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 500"
                            className="absolute fill-white"
                        >
                            <path
                                d="m123.6,240.97c-9.26.05-16.8-7.42-16.85-16.67,0-1.15.11-2.29.33-3.42,11.68-57.21,56.33-101.95,113.52-113.73,9.07-1.86,17.94,3.99,19.79,13.07,1.86,9.07-3.99,17.94-13.07,19.79-44.06,8.96-78.46,43.44-87.34,87.51-1.58,7.81-8.43,13.42-16.4,13.45Z"
                                transform="translate(-7.75 -7.75)"
                                className="fill-white"
                                fillOpacity="0.5"
                            />
                            <circle
                                cx="250"
                                cy="250"
                                r="250"
                                fillOpacity="0.2"
                            />
                        </svg>
                        <img
                            className="w-full h-full object-cover aspect-square"
                            src={user?.avatar}
                        />
                    </div>
                    <Button className="group-hover:underline" variant="link">
                        Se bobel
                    </Button>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-lg">{title}</h2>
                        <p className="font-medium text-primary">
                            {dayjs(updated_at).format("DD/MM/YYYY")}
                        </p>
                    </div>
                    <p className="">{text.substring(0, 350)} [...]</p>
                </div>
            </div>
        </Link>
    );
};

export default BobleCard;
