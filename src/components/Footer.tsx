import React from 'react'
import { useConfig } from '@/utils/config'

const Footer: React.FC = () => {
  const { choirName, foundationDate } = useConfig()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">{choirName}</h2>
            <p>設立: {foundationDate}</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Instagram</a>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} {choirName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer