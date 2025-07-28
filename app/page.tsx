"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, TrendingUp, ArrowRight, BookOpen, Target, Lightbulb, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Elmin
                <span className="text-blue-600"> Gələcəyini </span>
                Birlikdə Quraq
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Azərbaycan Elm Fondu ölkəmizdə elmi tədqiqatların maliyyələşdirilməsi və dəstəklənməsi sahəsində aparıcı
                qurumdur. Bizimlə birlikdə elmin inkişafına töhfə verin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/grants">
                    Qrant Müsabiqələri
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Fond Haqqında</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-0">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Elmi+Tədqiqat"
                  alt="Elmi Tədqiqat"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-indigo-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Maliyyələşdirilən Layihə</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Dəstəklənən Tədqiqatçı</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Beynəlxalq Əməkdaşlıq</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15</h3>
              <p className="text-gray-600">İl Təcrübə</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Grants Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aktiv Qrant Müsabiqələri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hazırda müraciət üçün açıq olan qrant müsabiqələri ilə tanış olun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="default">Aktiv</Badge>
                  <span className="text-sm text-gray-500">Son tarix: 15 Mar</span>
                </div>
                <CardTitle className="text-lg">Süni İntellekt və Maşın Öyrənməsi</CardTitle>
                <CardDescription>AI və ML sahələrində fundamental və tətbiqi tədqiqatlar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">50,000 AZN</span>
                  <Button size="sm">Ətraflı</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="default">Aktiv</Badge>
                  <span className="text-sm text-gray-500">Son tarix: 20 Mar</span>
                </div>
                <CardTitle className="text-lg">Bərpa Olunan Enerji</CardTitle>
                <CardDescription>Günəş və külək enerjisi sahəsində innovativ həllər</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">75,000 AZN</span>
                  <Button size="sm">Ətraflı</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">Gözləmədə</Badge>
                  <span className="text-sm text-gray-500">Son tarix: 25 Mar</span>
                </div>
                <CardTitle className="text-lg">Tibbi Biotexnologiya</CardTitle>
                <CardDescription>Gen terapiyası və personalizə edilmiş tibb</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">100,000 AZN</span>
                  <Button size="sm">Ətraflı</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/grants">
                Bütün Müsabiqələri Gör
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Niyə Azərbaycan Elm Fondu?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elmi tədqiqatlarınızı dəstəkləmək üçün ən yaxşı şəraiti təmin edirik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Şəffaf Qiymətləndirmə</h3>
              <p className="text-gray-600">
                Bütün müraciətlər beynəlxalq standartlara uyğun olaraq şəffaf və obyektiv şəkildə qiymətləndirilir.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">İnnovasiya Dəstəyi</h3>
              <p className="text-gray-600">
                Yenilikçi ideyalar və texnologiyalar xüsusi diqqət və dəstək alır. Gələcəyin texnologiyalarını birlikdə
                yaradaq.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Elmi Məsləhət</h3>
              <p className="text-gray-600">
                Təcrübəli ekspertlərimiz layihənizin bütün mərhələlərində peşəkar məsləhət və dəstək təqdim edir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Son Xəbərlər</h2>
              <p className="text-gray-600">Fonddan ən son xəbərlər və elanlar</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/news">Hamısını Gör</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">Qrant elanları</Badge>
                  <span className="text-sm text-gray-500">15 Yanvar 2024</span>
                </div>
                <CardTitle className="text-lg">2024-cü il üçün yeni qrant proqramları</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bu il elm sahəsində 15 yeni istiqamətdə qrant müsabiqələri keçiriləcək...
                </p>
                <Button size="sm" variant="outline">
                  Oxu
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">Beynəlxalq</Badge>
                  <span className="text-sm text-gray-500">12 Yanvar 2024</span>
                </div>
                <CardTitle className="text-lg">Horizon Europe ilə əməkdaşlıq</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Avropa İttifaqının Horizon Europe proqramı ilə memorandum imzalandı...
                </p>
                <Button size="sm" variant="outline">
                  Oxu
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">Gənc alimlər</Badge>
                  <span className="text-sm text-gray-500">10 Yanvar 2024</span>
                </div>
                <CardTitle className="text-lg">Gənc alimlərin xüsusi dəstək proqramı</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  35 yaşa qədər olan tədqiqatçılar üçün xüsusi qrant proqramı başladı...
                </p>
                <Button size="sm" variant="outline">
                  Oxu
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Elmi Layihənizi Həyata Keçirmək Üçün Hazırsınız?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bizimlə birlikdə elmin gələcəyini qurun. Qrant müsabiqələrimizə müraciət edin və layihənizi reallaşdırın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">Qeydiyyatdan Keç</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Bizimlə Əlaqə</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
