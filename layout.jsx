import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Happy Birthday! 🎉</title>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-pink-600">
          {children}
        </div>
      </body>
    </html>
  )
}

