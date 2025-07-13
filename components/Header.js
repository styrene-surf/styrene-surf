import Link from 'next/link'
import { useRouter } from 'next/router'
import LangSwitcher from './LangSwitcher'
import Image from 'next/image'

export default function Header() {
  const { locale } = useRouter()

  const nav = {
    fr: { home: 'Accueil', boards: 'Planches', gallery: 'Galerie', contact: 'Contact' },
    en: { home: 'Home', boards: 'Boards', gallery: 'Gallery', contact: 'Contact' },
    es: { home: 'Inicio', boards: 'Tablas', gallery: 'Galería', contact: 'Contacto' },
    pt: { home: 'Início', boards: 'Pranchas', gallery: 'Galeria', contact: 'Contato' },
  }

  const labels = nav[locale] || nav['fr']

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      color: '#fff',
      backgroundColor: '#111'
    }}>
      
      {/* ✅ Logo centré */}
      <div style={{ marginBottom: '20px' }}>
        <Image 
          src="/logo-styrene.png" 
          alt="Styrène Surf Logo" 
          width={60}
          height={60}
        />
      </div>

      {/* ✅ Menu navigation */}
      <nav style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
        <Link href="/"><span>{labels.home}</span></Link>
        <Link href="/modeles"><span>{labels.boards}</span></Link>
        <Link href="/galerie"><span>{labels.gallery}</span></Link>
        <Link href="/contact"><span>{labels.contact}</span></Link>
      </nav>

      {/* ✅ Sélecteur de langue */}
      <LangSwitcher />
    </div>
  )
}
