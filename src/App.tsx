import { Suspense } from 'react'
import LazyWrapper from '@/components/LazyWrapper'

function App() {
  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <Suspense fallback={null}>
        <LazyWrapper path='LazyDemo' />
      </Suspense>
    </div>
  )
}

export default App
