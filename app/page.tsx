import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Philosophy } from "@/components/philosophy"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
