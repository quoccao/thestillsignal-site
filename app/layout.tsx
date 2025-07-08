export const metadata = {
  title: 'The Still Signal',
  description: 'Vietnamese home dining experience in Essen',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}