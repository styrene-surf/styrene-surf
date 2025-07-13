import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LangSwitcher() {
  const { locale: currentLocale, locales, asPath } = useRouter()

  if (!locales) return null

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {locales.map((locale) => (
        <Link key={locale} href={asPath} locale={locale}>
          <img
            src={`/flags/${locale}.svg`}
            alt={locale}
            style={{
              width: 24,
              opacity: locale === currentLocale ? 1 : 0.4,
              cursor: 'pointer'
            }}
          />
        </Link>
      ))}
    </div>
  )
}
