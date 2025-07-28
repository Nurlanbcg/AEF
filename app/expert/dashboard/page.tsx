"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar, Users, FileText, ChevronRight } from "lucide-react"

// Sample competition data
const competitions = [
  {
    id: "AEF-2024-001",
    title: "Süni intellekt və maşın öyrənməsi sahəsində tədqiqatlar",
    category: "İnformasiya texnologiyaları",
    deadline: "2024-03-15",
    applicants: 45,
    status: "Aktiv",
    priority: "Yüksək",
  },
  {
    id: "AEF-2024-002",
    title: "Bərpa olunan enerji mənbələrinin tədqiqi",
    category: "Enerji",
    deadline: "2024-03-20",
    applicants: 32,
    status: "Aktiv",
    priority: "Orta",
  },
  {
    id: "AEF-2024-003",
    title: "Tibbi biotexnologiya və gen terapiyası",
    category: "Tibb",
    deadline: "2024-03-25",
    applicants: 28,
    status: "Gözləmədə",
    priority: "Yüksək",
  },
  {
    id: "AEF-2024-004",
    title: "Kənd təsərrüfatında innovativ texnologiyalar",
    category: "Kənd təsərrüfatı",
    deadline: "2024-04-01",
    applicants: 19,
    status: "Aktiv",
    priority: "Aşağı",
  },
  {
    id: "AEF-2024-005",
    title: "Mühit mühafizəsi və ekoloji tədqiqatlar",
    category: "Ekoloji",
    deadline: "2024-04-10",
    applicants: 37,
    status: "Yeni",
    priority: "Orta",
  },
]

export default function ExpertDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in and is an expert
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
        const userType = localStorage.getItem("userType")

        if (!isLoggedIn || userType !== "Ekspert") {
          router.push("/login")
          return
        }

        // Set login state for header
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userType", "Ekspert")
        localStorage.setItem("userName", "Nurlan İbrahimov")
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  const getStatusBadge = (status: string) => {
    const variants = {
      Aktiv: "default",
      Gözləmədə: "secondary",
      Yeni: "outline",
    } as const

    return <Badge variant={variants[status as keyof typeof variants] || "default"}>{status}</Badge>
  }

  const getPriorityBadge = (priority: string) => {
    const variants = {
      Yüksək: "destructive",
      Orta: "default",
      Aşağı: "secondary",
    } as const

    return <Badge variant={variants[priority as keyof typeof variants] || "default"}>{priority}</Badge>
  }

  const filteredCompetitions = competitions.filter((comp) => {
    const matchesSearch =
      comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || comp.status === statusFilter
    const matchesCategory = categoryFilter === "all" || comp.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <span>Ana səhifə</span>
          <ChevronRight className="h-4 w-4" />
          <span>Ekspert Paneli</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-blue-600 font-medium">Qrant Müsabiqələri</span>
        </nav>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Qrant Müsabiqələri</h1>
          <p className="text-gray-600">Ekspert kimi təyin edilmiş qrant müsabiqələrini idarə edin və qiymətləndirin</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Filtrlər</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Müsabiqə axtarın..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Bütün statuslar</SelectItem>
                  <SelectItem value="Aktiv">Aktiv</SelectItem>
                  <SelectItem value="Gözləmədə">Gözləmədə</SelectItem>
                  <SelectItem value="Yeni">Yeni</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Kateqoriya" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Bütün kateqoriyalar</SelectItem>
                  <SelectItem value="İnformasiya texnologiyaları">İnformasiya texnologiyaları</SelectItem>
                  <SelectItem value="Enerji">Enerji</SelectItem>
                  <SelectItem value="Tibb">Tibb</SelectItem>
                  <SelectItem value="Kənd təsərrüfatı">Kənd təsərrüfatı</SelectItem>
                  <SelectItem value="Ekoloji">Ekoloji</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setStatusFilter("all")
                  setCategoryFilter("all")
                }}
              >
                Təmizlə
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Desktop Table */}
        <Card className="hidden md:block">
          <CardHeader>
            <CardTitle>Müsabiqələr Siyahısı</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Müsabiqə Adı</TableHead>
                  <TableHead>Kateqoriya</TableHead>
                  <TableHead>Son Tarix</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Əməliyyatlar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCompetitions.map((competition) => (
                  <TableRow key={competition.id} className="hover:bg-gray-50">
                    <TableCell className="font-mono text-sm">{competition.id}</TableCell>
                    <TableCell className="font-medium">{competition.title}</TableCell>
                    <TableCell>{competition.category}</TableCell>
                    <TableCell>{competition.deadline}</TableCell>
                    <TableCell>{getStatusBadge(competition.status)}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        Seçim et
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {filteredCompetitions.map((competition) => (
            <Card key={competition.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base">{competition.title}</CardTitle>
                    <p className="text-sm text-gray-600 font-mono">{competition.id}</p>
                  </div>
                  {getPriorityBadge(competition.priority)}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Kateqoriya:</span>
                    <span className="text-sm font-medium">{competition.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Son tarix:</span>
                    <span className="text-sm font-medium">{competition.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Müraciətlər:</span>
                    <span className="text-sm font-medium">{competition.applicants}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Status:</span>
                    {getStatusBadge(competition.status)}
                  </div>
                  <div className="pt-3">
                    <Button size="sm" className="w-full">
                      Seçim et
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-gray-500">Heç bir müsabiqə tapılmadı.</p>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  )
}
