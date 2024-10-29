import Link from 'next/link'
import { Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer({ choirName = '九州合唱団', foundationDate = '2024年4月1日' }: { choirName?: string, foundationDate?: string }) {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{choirName}</h3>
            <p>設立: {foundationDate}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">連絡先</h3>
            <ul>
              <li className="flex items-center mb-2"><Mail className="mr-2" /> info@kyushu-choir.jp</li>
              <li className="flex items-center mb-2"><MapPin className="mr-2" /> 大分県大分市</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} {choirName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}