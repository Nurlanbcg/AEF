"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, Search, User, Settings, LogOut, Home } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

export function Header() {
  const [language, setLanguage] = useState("az")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const checkLoginStatus = () => {
      if (typeof window !== "undefined") {
        const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true"
        const storedUserName = localStorage.getItem("userName") || ""
        setIsLoggedIn(isUserLoggedIn)
        setUserName(storedUserName)
      }
    }
    checkLoginStatus()
  }, [])

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("userType")
      localStorage.removeItem("userName")
    }
    setIsLoggedIn(false)
    setUserName("")
    router.push("/")
  }

  return (
    <header className="w-full border-b bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Azərbaycan Respublikası</span>
            <span>|</span>
            <span>Prezident Aparatı</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "az" ? "en" : "az")}
              className="text-white hover:text-blue-500"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === "az" ? "EN" : "AZ"}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logo.png?height=60&width=60&text=AZ"
              alt="Azərbaycan Gerbi"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">Azərbaycan Elm Fondu</h1>
              <p className="text-sm text-gray-600">Azərbaycan Prezidenti yanında</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:text-blue-600">Ana səhifə</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* FOND HAQQINDA Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Fond Haqqında</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-6 p-6 w-[800px] bg-white border border-gray-200">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      {/* RƏSMİ SƏNƏDLƏR */}
                      <div>
                        <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                          <span className="mr-2"></span> RƏSMİ SƏNƏDLƏR
                        </h3>
                        <ul className="space-y-1 pl-6">
                          <li>
                            <Link href="/about/documents" className="text-gray-700 hover:text-blue-600 text-sm">
                              Rəsmi sənədlər
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/charter" className="text-gray-700 hover:text-blue-600 text-sm">
                              Fondun Nizamnaməsi
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* FONDUN STRUKTURU */}
                      <div>
                        <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                          <span className="mr-2"></span> FONDUN STRUKTURU
                        </h3>
                        <ul className="space-y-1 pl-6">
                          <li>
                            <Link href="/about/board" className="text-gray-700 hover:text-blue-600 text-sm">
                              Himayədarlar Şurası
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/executive" className="text-gray-700 hover:text-blue-600 text-sm">
                              İcraçı direksiya
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                      {/* FONDUN FƏALİYYƏTİ */}
                      <div>
                        <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                          <span className="mr-2"></span> FONDUN FƏALİYYƏTİ
                        </h3>
                        <ul className="space-y-1 pl-6">
                          <li>
                            <Link href="/about/history" className="text-gray-700 hover:text-blue-600 text-sm">
                              Yaranma tarixi
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/directions" className="text-gray-700 hover:text-blue-600 text-sm">
                              Fondun fəaliyyətinin əsas istiqamətləri
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/financing" className="text-gray-700 hover:text-blue-600 text-sm">
                              Fondun maliyyələşməsi
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/international" className="text-gray-700 hover:text-blue-600 text-sm">
                              Beynəlxalq əlaqələr
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/state-programs" className="text-gray-700 hover:text-blue-600 text-sm">
                              Dövlət proqramlarında iştirak
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/agreements" className="text-gray-700 hover:text-blue-600 text-sm">
                              Sazişlər, memorandumlar və protokollar
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/international-grants"
                              className="text-gray-700 hover:text-blue-600 text-sm"
                            >
                              Beynəlxalq qrantlar
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/financial-reports" className="text-gray-700 hover:text-blue-600 text-sm">
                              Maliyyə hesabatları
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/scientific-reports"
                              className="text-gray-700 hover:text-blue-600 text-sm"
                            >
                              Elmi hesabatlar
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* MƏLUMAT BÖLMƏSİ */}
                      <div>
                        <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                          <span className="mr-2"></span> MƏLUMAT BÖLMƏSİ
                        </h3>
                        <ul className="space-y-1 pl-6">
                          <li>
                            <Link href="/about/events" className="text-gray-700 hover:text-blue-600 text-sm">
                              Fondun tədbirləri
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/seminars" className="text-gray-700 hover:text-blue-600 text-sm">
                              Məşvərət seminarları
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/media" className="text-gray-700 hover:text-blue-600 text-sm">
                              Fond KİV-də
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/gallery" className="text-gray-700 hover:text-blue-600 text-sm">
                              Foto və video qalereya
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/press" className="text-gray-700 hover:text-blue-600 text-sm">
                              Press-relizlər
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/media-kit" className="text-gray-700 hover:text-blue-600 text-sm">
                              Media-kit
                            </Link>
                          </li>
                          <li>
                            <Link href="/about/video" className="text-gray-700 hover:text-blue-600 text-sm">
                              Video çarx
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* QRANT MÜSABİQƏLƏRİ Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Qrant Müsabiqələri</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-6 p-6 w-[900px] bg-white border border-gray-200">
                    {/* Column 1 */}
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                        <span className="mr-2"></span> MÜSABİQƏLƏR
                      </h3>
                      <ul className="space-y-1 pl-6">
                        <li>
                          <Link href="/grants/current" className="text-gray-700 hover:text-blue-600 text-sm">
                            Cari qrant müsabiqələri
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/completed" className="text-gray-700 hover:text-blue-600 text-sm">
                            Bitmiş qrant müsabiqələri
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/joint" className="text-gray-700 hover:text-blue-600 text-sm">
                            Birgə qrant müsabiqələri
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/international" className="text-gray-700 hover:text-blue-600 text-sm">
                            Beynəlxalq qrant müsabiqələri
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/statistics" className="text-gray-700 hover:text-blue-600 text-sm">
                            Statistika
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/results" className="text-gray-700 hover:text-blue-600 text-sm">
                            Nəticələr və statistika
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/institutions" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrant layihələrində təmsil olunmuş qurumlar
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                        <span className="mr-2"></span> KÖMƏKÇİ MATERİALLAR
                      </h3>
                      <ul className="space-y-1 pl-6">
                        <li>
                          <Link href="/grants/instructions" className="text-gray-700 hover:text-blue-600 text-sm">
                            Təlimatlar
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/rules" className="text-gray-700 hover:text-blue-600 text-sm">
                            Müsabiqənin keçirilməsi qaydaları
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/legislation" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qanunvericilik
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/classification" className="text-gray-700 hover:text-blue-600 text-sm">
                            Elm sahələri və istiqamətlərinin təsnifatı
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/faq" className="text-gray-700 hover:text-blue-600 text-sm">
                            Tez-tez verilən suallar və cavablar
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/certificate" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrantlar üzrə verilən sertifikat nümunəsi
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                        <span className="mr-2"></span> BAŞA ÇATMIŞ LAYİHƏLƏR
                      </h3>
                      <ul className="space-y-1 pl-6">
                        <li>
                          <Link href="/grants/successful" className="text-gray-700 hover:text-blue-600 text-sm">
                            Uğurlu layihələr
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/results-2010-2021" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrantlar üzrə nəticələr və dərc olunmuş məqalələr (2010–2021)
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/results-2022" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrantlar üzrə nəticələr və dərc olunmuş məqalələr (2022–)
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/publications" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrantlar üzrə nəşrlər
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/websites" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrantlar üzrə yaradılmış veb saytlar
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/conferences" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrantlar üzrə keçirilmiş konfranslar
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/laboratories" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrantlar üzrə yaradılmış laboratoriyalar
                          </Link>
                        </li>
                        <li>
                          <Link href="/grants/dissertations" className="text-gray-700 hover:text-blue-600 text-sm">
                            Qrantlar üzrə dissertasiya müdafiələri
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* ELM VƏ İNKİŞAF Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Elm və İnkişaf</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-6 p-6 w-[700px] bg-white border border-gray-200">
                    {/* Column 1 */}
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                        <span className="mr-2"></span> Elmi Resurslar və Potensial
                      </h3>
                      <ul className="space-y-1 pl-6">
                        <li>
                          <Link href="/science/potential" className="text-gray-700 hover:text-blue-600 text-sm">
                            Azərbaycanın elmi potensialı
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/institutions" className="text-gray-700 hover:text-blue-600 text-sm">
                            Azərbaycanda elmi qurumlar
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/analytics" className="text-gray-700 hover:text-blue-600 text-sm">
                            Analitik informasiya
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/news" className="text-gray-700 hover:text-blue-600 text-sm">
                            Elmi yeniliklər
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/science/upcoming-conferences"
                            className="text-gray-700 hover:text-blue-600 text-sm"
                          >
                            Baş tutacaq konfranslar
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                        <span className="mr-2"></span> Elmi Nəşrlər və Maarifləndirmə
                      </h3>
                      <ul className="space-y-1 pl-6">
                        <li>
                          <Link href="/science/journals" className="text-gray-700 hover:text-blue-600 text-sm">
                            Elmi jurnallar
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/promotion" className="text-gray-700 hover:text-blue-600 text-sm">
                            Elmin təbliği
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/scientists" className="text-gray-700 hover:text-blue-600 text-sm">
                            Azərbaycanın dahi alimləri
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/diaspora" className="text-gray-700 hover:text-blue-600 text-sm">
                            Diasporadakı alimlər
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/links" className="text-gray-700 hover:text-blue-600 text-sm">
                            Faydalı linklər və keçidlər
                          </Link>
                        </li>
                        <li>
                          <Link href="/science/journal" className="text-gray-700 hover:text-blue-600 text-sm">
                            Elektron elmi kütləvi jurnal "Elmin nəbzi"
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:text-blue-600">Xəbərlər</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:text-blue-600">Əlaqə</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {userName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-gray-900">{userName}</p>
                      <p className="text-xs text-gray-500">Ekspert</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/expert/dashboard">
                      <Home className="mr-2 h-4 w-4" />
                      <span>Qrant səhifəsi</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Tənzimləmələr</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Çıxış et</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">
                  <User className="h-4 w-4 mr-2" />
                  Giriş
                </Link>
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-medium">
                    Ana səhifə
                  </Link>
                  <div className="text-lg font-medium">Fond Haqqında</div>
                  <div className="text-lg font-medium">Qrant Müsabiqələri</div>
                  <div className="text-lg font-medium">Elm və İnkişaf</div>
                  <Link href="/news" className="text-lg font-medium">
                    Xəbərlər
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    Əlaqə
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
