"use client";
import Link from 'next/link'
import {usePathname} from "next/navigation"
export default function NavLink(props){

    let link="/devices";
let LinkStatus=props.linkStat;
    const pathname = usePathname();
    const isActive = pathname === props.navigationLink;
    return(
        LinkStatus ? (
            <Link href={props.navigationLink} onClick={() => {

                if (typeof window !== "undefined" && window.innerWidth < 768) {
                    props.setNavOp(prev => !prev)
                }
            }}>
                <div className={`flex flex-row gap-3 items-center text-black rounded-md w-[200px] p-1.5 hover:bg-gray-200 ${isActive?"bg-gray-200":""}`}>
                    <div className="shrink-0">{props.icon}</div>
                    <p className="font-semibold">{props.title}</p>
                    {props.children}
                </div>
            </Link>
        ) : (
            <div className="flex flex-row gap-3 items-center bg-white text-black rounded-md w-[200px] p-1.5 hover:bg-gray-200">
                <div className="shrink-0">{props.icon}</div>
                <p className="font-semibold">{props.title}</p>
                {props.children}
            </div>
        )
    )
}