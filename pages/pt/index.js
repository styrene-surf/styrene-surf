import Header from '../../components/Header'


export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      <Header />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
        <img 
          src="/logo-styrene.png" 
          alt="Logo Styrène Surf" 
          style={{ width: '320px', maxWidth: '100%', height: 'auto' }}

        />
      </div>
    </div>
  )
}
