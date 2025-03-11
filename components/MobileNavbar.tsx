import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavItem from "./sidebar/SidebarItem"
import { navLinks } from "./sidebar/Sidebar"
import Image from "next/image"

export default function MobileNavbar() {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent side={'left'} className="px-4 w-full max-w-[264px]">
                <section className=''>
                    <SheetHeader className="mb-8">
                        <SheetTitle>
                            <Image src={"/logo.webp"} alt="Vidoom" height={40} width={40} />
                            </SheetTitle>
                    </SheetHeader>
                    {navLinks.map(item => (<SheetClose asChild key={item.name}>
                        <NavItem item={item} />
                    </SheetClose>
                    ))}
                </section>
            </SheetContent>
        </Sheet>
    )
}
