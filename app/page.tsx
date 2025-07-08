export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Still Signal
        </h1>
        <p className="text-xl md:text-2xl max-w-xl mx-auto">
          Authentic Vietnamese cuisine, cooked right in your home. Serving Essen and nearby cities.
        </p>
        <div className="mt-6">
          <a href="#booking" className="inline-block bg-black text-white text-lg px-6 py-3 rounded-xl">
            Book a Session
          </a>
        </div>
      </section>

      <section className="py-12 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-8">What I Cook</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Phở Bò", "Bún Bò Huế", "Bún Riêu", "Hủ Tiếu", "Cháo Gà", "Món Chay"].map((item) => (
            <div key={item} className="bg-white shadow-md p-6 text-center text-lg font-medium rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-4">How it works</h2>
        <ol className="list-decimal max-w-2xl mx-auto pl-5 text-lg space-y-2">
          <li>You request a booking via email or WhatsApp</li>
          <li>I arrive with fresh ingredients and cook in your kitchen</li>
          <li>We share a cozy, authentic Vietnamese meal</li>
          <li>Service fee: 100€, ingredients charged separately</li>
        </ol>
      </section>

      <section id="booking" className="py-12 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Booking</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-lg mb-4">
            Email: <a href="mailto:thestillsignal@gmail.com" className="text-blue-600 underline">thestillsignal@gmail.com</a><br />
            WhatsApp: <a href="https://wa.me/491528905717" className="text-blue-600 underline">+49 152 890 5717</a>
          </p>
          <p className="text-center text-sm text-gray-500">
            Please include your location, number of people, preferred dish, and date/time.
          </p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8">
        © 2025 The Still Signal – Liam's Home Dining Experience
      </footer>
    </main>
  )
}