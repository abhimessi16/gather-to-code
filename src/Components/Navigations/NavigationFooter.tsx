import { Link } from "@nextui-org/react";

const NavigationFooter = () => {

    const Github = import.meta.env.VITE_GITHUB_LINK
    const LinkedIn = import.meta.env.VITE_LINKEDIN_LINK

    return (
    <div className="text-gray-400 flex flex-row items-center justify-center border-t-1 p-2">
        <p className="text-xs text-center">
        This is an initiative by Bhyrava Abhilas
        <br />
        All rights reserved
        <br />
        <Link href={Github} target="_blank" aria-label="Github" className="text-xs px-2">
            github
        </Link>
        |
        <Link href={LinkedIn} target="_blank" aria-label="Github" className="text-xs px-2">
            linkedin
        </Link>
        </p>
    </div>
    );
};

export default NavigationFooter;
