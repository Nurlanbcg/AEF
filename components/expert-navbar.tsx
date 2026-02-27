"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Home,
  LogOut,
  Globe,
  Menu,
  ChevronDown,
  ClipboardCheck,
} from "lucide-react"

const navLinks = [
  { href: "/expert/dashboard", label: "Təyin edilmiş müsabiqələr", icon: Home },
]

export function ExpertNavbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [language, setLanguage] = useState<"az" | "en">("az")
  const [mobileOpen, setMobileOpen] = useState(false)

  const userName =
    typeof window !== "undefined"
      ? localStorage.getItem("userName") || "İstifadəçi"
      : "İstifadəçi"

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userType")
    localStorage.removeItem("userName")
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-8">
            <Link href="/expert/dashboard" className="flex items-center gap-2">
              <Image src="/logo.png" alt="AEF" width={36} height={36} className="rounded-full" />
              <span className="hidden sm:block text-sm font-bold text-gray-900">AEF</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Right: User menu */}
          <div className="flex items-center gap-3">
            {/* Language Toggle (desktop) */}
            <button
              onClick={() => setLanguage(language === "az" ? "en" : "az")}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "az" ? "EN" : "AZ"}
            </button>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-amber-100 text-amber-700 text-xs font-semibold">
                      FM
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-900 leading-none">
                      {userName}
                    </span>
                    <Badge className="mt-0.5 text-[10px] px-1.5 py-0 h-4 bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100">
                      Ekspert
                    </Badge>
                  </div>
                  <ChevronDown className="hidden md:block h-3.5 w-3.5 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2 md:hidden">
                  <p className="text-sm font-medium text-gray-900">{userName}</p>
                  <Badge className="mt-1 text-[10px] bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100">
                    Ekspert
                  </Badge>
                </div>
                <DropdownMenuSeparator className="md:hidden" />
                <DropdownMenuItem
                  onClick={() => setLanguage(language === "az" ? "en" : "az")}
                  className="lg:hidden"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === "az" ? "English" : "Azərbaycanca"}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Çıxış
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="AEF"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Azərbaycan Elm Fondu</p>
                      <p className="text-xs text-gray-500">Ekspert paneli</p>
                    </div>
                  </div>
                </div>
                <nav className="p-3 flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
