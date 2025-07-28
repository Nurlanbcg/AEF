"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, User, Lock } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<"İddiaçı" | "Ekspert">("İddiaçı")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check credentials
    if (userType === "İddiaçı") {
      if (email === "researcher@aef.gov.az" && password === "researcher123") {
        // Store login info
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userType", "İddiaçı")
        localStorage.setItem("userName", "Dr. Aysel Məmmədova")

        router.push("/researcher/dashboard")
      } else {
        setError("Yanlış email və ya şifrə")
      }
    } else if (userType === "Ekspert") {
      if (email === "expert@aef.gov.az" && password === "expert123") {
        // Store login info
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userType", "Ekspert")
        localStorage.setItem("userName", "Nurlan İbrahimov")

        router.push("/expert/dashboard")
      } else {
        setError("Yanlış email və ya şifrə")
      }
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/placeholder.svg?height=80&width=80&text=AZ"
              alt="Azərbaycan Gerbi"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Azərbaycan Elm Fondu</h1>
          <p className="text-gray-600">Sistemə daxil olun</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Giriş</CardTitle>
            <CardDescription className="text-center">
              Hesabınıza daxil olmaq üçün məlumatlarınızı daxil edin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label>İstifadəçi növü</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={userType === "İddiaçı" ? "default" : "outline"}
                    onClick={() => setUserType("İddiaçı")}
                    className="w-full"
                  >
                    İddiaçı
                  </Button>
                  <Button
                    type="button"
                    variant={userType === "Ekspert" ? "default" : "outline"}
                    onClick={() => setUserType("Ekspert")}
                    className="w-full"
                  >
                    Ekspert
                  </Button>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email ünvanınızı daxil edin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Şifrə</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Şifrənizi daxil edin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Giriş edilir..." : "Daxil ol"}
              </Button>

              {/* Links */}
              <div className="text-center space-y-2">
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Şifrəni unutmusunuz?
                </Link>
                <div className="text-sm text-gray-600">
                  Hesabınız yoxdur?{" "}
                  <Link href="/register" className="text-blue-600 hover:underline">
                    Qeydiyyatdan keçin
                  </Link>
                </div>
              </div>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-sm text-gray-700 mb-2">Demo hesablar:</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div>
                  <strong>İddiaçı:</strong> researcher@aef.gov.az / researcher123
                </div>
                <div>
                  <strong>Ekspert:</strong> expert@aef.gov.az / expert123
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
