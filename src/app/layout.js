import './globals.css'

export const metadata = {
  title: 'MLSC Bounties',
  description: 'Find the perfect bounty to contribute to and earn rewards.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0c0c0c] text-white">
        {children}
      </body>
    </html>
  )
}
