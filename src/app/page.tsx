import Image from "next/image"
import Link from "next/link"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/button"
import { PlaceHolderImages } from "../lib/placeholder-images"
import { ChevronRight, ShieldCheck, Download, Gem } from "lucide-react"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-fashion")
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <Image
            src={heroImg?.imageUrl || "https://picsum.photos/seed/kalyra-hero/1920/1080"}
            alt="Kalyra Designs Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Bespoke Manufacturing Guides</span>
              <h1 className="font-headline text-6xl md:text-8xl mb-8 leading-tight">Refining the Art of Creation</h1>
              <p className="text-lg md:text-xl font-light mb-10 leading-relaxed opacity-90">
                Unlock professional fashion and jewelry blueprints. Complete technical specifications for the modern boutique owner and discerning jeweler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-secondary font-bold px-10 py-7 text-lg rounded-md shadow-2xl">
                  EXPLORE COLLECTIONS
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-10 py-7 text-lg rounded-md">
                  THE VAULT
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl text-secondary mb-4">The Atelier Collections</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-foreground/70 max-w-xl mx-auto font-light">
                Browse our curated categories of professional-grade manufacturing blueprints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Queen Card */}
              <Link href="/queen" className="group relative h-[600px] overflow-hidden rounded-xl shadow-xl">
                <Image
                  src= "http://googleusercontent.com/image_generation_content/120", // Queen Link
                  alt="Queen Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-headline text-3xl mb-2">Queen</h3>
                  <p className="text-sm font-light opacity-80 mb-4 tracking-widest uppercase">Female Ethnic & Indo-Western</p>
                  <Button variant="link" className="text-primary p-0 h-auto group-hover:translate-x-2 transition-transform">
                    View Blueprint <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </Link>

              {/* King Card */}
              <Link href="/king" className="group relative h-[600px] overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="http://googleusercontent.com/image_generation_content/121", // King Link
                  alt="King Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-headline text-3xl mb-2">King</h3>
                  <p className="text-sm font-light opacity-80 mb-4 tracking-widest uppercase">Male Ethnic & Sherwani</p>
                  <Button variant="link" className="text-primary p-0 h-auto group-hover:translate-x-2 transition-transform">
                    View Blueprint <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </Link>

              {/* Vault Card */}
              <Link href="/vault" className="group relative h-[600px] overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="http://googleusercontent.com/image_generation_content/122", // Vault Link
  },
                  alt="The Vault"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-headline text-3xl mb-2">The Vault</h3>
                  <p className="text-sm font-light opacity-80 mb-4 tracking-widest uppercase">Luxury Jewelry Sketches</p>
                  <Button variant="link" className="text-primary p-0 h-auto group-hover:translate-x-2 transition-transform">
                    View Blueprint <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Exclusive One-of-a-Kind Section */}
        <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Absolute Rarity</span>
                <h2 className="font-headline text-5xl mb-8 leading-tight">The Exclusive Boutique</h2>
                <p className="text-lg font-light mb-8 leading-relaxed opacity-80">
                  Our most coveted section. Once a blueprint in this collection is purchased, it is permanently locked and removed from circulation. You hold the unique manufacturing rights to the design.
                </p>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">Single License Acquisition</h4>
                      <p className="opacity-70 font-light">Permanently removed from sale upon purchase.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Download className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">Instant Blueprint Delivery</h4>
                      <p className="opacity-70 font-light">High-resolution technical PDFs with all manufacturing details.</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-secondary font-bold px-10 py-7 text-lg rounded-md">
                  VIEW EXCLUSIVE DESIGNS
                </Button>
              </div>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <Image
                  src="https://picsum.photos/seed/kalyra-exclusive/800/1000"
                  alt="Exclusive Masterpiece"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 bg-primary text-secondary px-6 py-2 font-bold tracking-widest text-xs rounded-full">ONE OF A KIND</div>
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                   <p className="text-white font-headline text-2xl italic">"Exclusivity is the true luxury."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gem className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl mb-4 text-secondary">Expert Curation</h3>
                <p className="font-light text-foreground/70">Each design is meticulously sketched by master artisans with decades of manufacturing experience.</p>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl mb-4 text-secondary">Technical Precision</h3>
                <p className="font-light text-foreground/70">Blueprints include fabric costing, embroidery techniques, and exact metal/stone specifications.</p>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl mb-4 text-secondary">Secure Ownership</h3>
                <p className="font-light text-foreground/70">A dedicated vault for your purchased designs, accessible anytime through your personal boutique login.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
/
