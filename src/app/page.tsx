impoimport React from 'react';
import Link from 'next/link';

export default function Home() {
  const categories = [
    { id: 'queen', name: 'Queen Collection', desc: 'Timeless ethnic wear for the modern sovereign.', img: '/queen.jpg', link: '/queen' },
    { id: 'king', name: 'King Collection', desc: 'Regal silhouettes and heritage craftsmanship.', img: '/king.jpg', link: '/king' },
    { id: 'vault', name: 'The Vault', desc: 'Luxury jewelry sketches and manufacturing blueprints.', img: '/vault.jpg', link: '/the-vault' },
    { id: 'exclusive', name: 'The Exclusive Boutique', desc: 'One of a kind acquisition. Permanently locked.', img: '/exclusive.jpg', link: '#' }
  ];

  const testimonials = [
    { id: 1, name: "Aishwarya Rai", role: "Boutique Owner, Mumbai", text: "The accuracy of the technical embroidery maps in the PDFs is outstanding. Saved us weeks of manual tracing!", rating: 5 },
    { id: 2, name: "Vikram Mehta", role: "Heritage Jeweler, Jaipur", text: "The production cost breakdowns and diamond ring sketches are highly professional. Complete trust builder.", rating: 5 },
    { id: 3, name: "Meera Ali", role: "Couture Designer, Delhi", text: "Impeccable fabric estimations. Kalyra's blueprints are a goldmine for luxury fashion houses.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#1A1A1A] font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Kalyra Logo" className="h-10 w-auto object-contain" onError={(e)=>{e.currentTarget.src="https://via.placeholder.com/40"}} />
          <span className="text-xl font-bold tracking-wider text-[#4B1E3F] font-serif">KALYRA DESIGNS</span>
        </div>
        <div className="w-6 h-0.5 bg-[#4B1E3F] relative before:content-[''] before:absolute before:top-2 before:w-6 before:h-0.5 before:bg-[#4B1E3F] after:content-[''] after:absolute after:-top-2 after:w-6 after:h-0.5 after:bg-[#4B1E3F]"></div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-neutral-900 flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <img src="/queen.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 max-w-2xl">
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold block mb-2">The Pinnacle of Bespoke Elegance</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Kalyra Designs</h1>
          <p className="text-gray-300 text-sm md:text-base mb-6">Exclusive fashion and jewelry blueprints for the world's most discerning boutique owners. Human-led, artistically driven.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-[#D4AF37] text-white px-6 py-3 rounded-md font-semibold text-sm tracking-wide shadow-md hover:bg-opacity-90">EXPLORE COLLECTIONS</button>
            <button className="bg-white bg-opacity-20 text-white border border-white px-6 py-3 rounded-md font-semibold text-sm tracking-wide hover:bg-opacity-30">EXCLUSIVE ACCESS</button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-serif font-bold text-center text-[#4B1E3F] mb-8 tracking-wide">DESIGN COLLECTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link href={cat.link} key={cat.id} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-serif font-bold text-[#4B1E3F] mb-1">{cat.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
                <span className="text-[#D4AF37] font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-1 group-hover:underline">
                  View Collection &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Diamond Ratings Testimonials Section */}
      <section className="bg-white border-t border-b border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center text-[#4B1E3F] mb-2 tracking-wide">WHAT OUR BOUTIQUE PARTNERS SAY</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by high-end design studios and ateliers worldwide.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-[#F7F3EC] p-5 rounded-lg border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-3 text-[#D4AF37] text-sm">
                    {Array(t.rating).fill("💎")}
                  </div>
                  <p className="text-gray-700 text-sm italic">"{t.text}"</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/60">
                  <h4 className="font-semibold text-sm text-[#4B1E3F]">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4B1E3F] text-[#F7F3EC] py-8 text-center text-xs tracking-wider">
        <p>&copy; 2026 KALYRA DESIGNS. ALL RIGHTS RESERVED.</p>
        <p className="text-gray-400 mt-1">FOR PROFESSIONAL PRODUCTION USE ONLY.</p>
      </footer>
    </div>
  );
}￼Enter
