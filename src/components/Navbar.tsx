"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>

            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem active={active} setActive={setActive} item="Home">
                    </MenuItem>
                </Link>

                <Link href="/porfolio">
                    <MenuItem active={active} setActive={setActive} item="Protfolio">
                    </MenuItem>
                </Link>
                <Link href="/gallery">
                    <MenuItem active={active} setActive={setActive} item="Gallery">
                    </MenuItem>
                </Link>
            </Menu>

        </div>
    )
}

export default Navbar