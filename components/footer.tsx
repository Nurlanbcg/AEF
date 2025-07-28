import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Azərbaycan Gerbi" width={40} height={40} className="rounded-full" />
              <div>
                <h3 className="font-bold text-lg">Azərbaycan Elm Fondu</h3>
                <p className="text-sm text-blue-200">Azərbaycan Prezidenti yanında</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Ölkəmizdə elmi tədqiqatların maliyyələşdirilməsi və dəstəklənməsi sahəsində aparıcı qurum
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Sürətli Keçidlər</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Fond Haqqında
                </Link>
              </li>
              <li>
                <Link href="/grants" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Qrant Müsabiqələri
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Xəbərlər
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Əlaqə
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Giriş
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Xidmətlər</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/grants/current" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Cari Müsabiqələr
                </Link>
              </li>
              <li>
                <Link href="/grants/results" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Nəticələr
                </Link>
              </li>
              <li>
                <Link href="/science/journals" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Elmi Jurnallar
                </Link>
              </li>
              <li>
                <Link href="/about/international" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Beynəlxalq Əlaqələr
                </Link>
              </li>
              <li>
                <Link href="/grants/faq" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Tez-tez Verilən Suallar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Əlaqə Məlumatları</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-200 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-200">
                  <a href="https://maps.app.goo.gl/1sqeL4zhqa8pFJfH9">
                    Bakı şəhəri, Nəsimi rayonu Yusif Səfərov küçəsi-27, 9-cu mərtəbə, AZ1025
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-200" />
                <a href="tel:+994121234567" className="text-sm text-blue-200">
                  +994 12 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-200" />
                <a href="mailto:info@aef.gov.az" className="text-sm text-blue-200">
                  info@aef.gov.az
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">© 2024 Azərbaycan Elm Fondu. Bütün hüquqlar qorunur.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors text-sm">
                Məxfilik Siyasəti
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors text-sm">
                İstifadə Şərtləri
              </Link>
              <Link href="/sitemap" className="text-blue-200 hover:text-white transition-colors text-sm">
                Sayt Xəritəsi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
