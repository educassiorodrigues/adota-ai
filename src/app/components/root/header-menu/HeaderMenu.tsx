import { MENU } from "@/app/core/constants/menu";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMenu() {
    return (
        <div className="flex justify-between items-center py-4 border-b-2 border-lower">
            <div className="flex items-center gap-4">

                {MENU.map((item) => (
                    <Link key={item.href} className="block hover:opacity-80" href={item.href}>{item.label}</Link>
                ))}

            </div>

            <button className="flex items-center gap-4 cursor-pointer hover:opacity-80">
                <span className="block ">Cesto</span>
                <i className="mb-2">
                    <Image
                        src="/images/CestoIcon.svg"
                        alt="Cesto"
                        width={30}
                        height={30}
                    />
                </i>
            </button>

        </div>
    )


}