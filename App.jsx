import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WatchlistPage from './pages/WatchlistPage'
import './index.css'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text-primary)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--border)',
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        marginTop: 'auto',
      }}>
        Made with ❤️ by{' '}
        <span style={{ color: 'var(--gold)' }}>You</span>
        {' '}· Powered by{' '}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--gold)', textDecoration: 'underline' }}
        >
          TMDB
        </a>
      </footer>
    </div>
  )
}

export default App
