import React from 'react'
import ConnectedScatterplot from './components/ConnectedScatterplot'
import GameLogsTable from './components/GameLogsTable'
import Bio from './components/Bio'
import Footer from './components/Footer'
import { FaClipboard } from 'react-icons/fa'
import { IoAnalytics } from 'react-icons/io5'

export default function App() {
  return (
    <main>
      <Bio />
      <div className="page-section">
        <div className="page-section-header">
          <FaClipboard className="icon clipboard" />
          <h2>2020 Game Log</h2>
          <hr className="mini-line" />
        </div>
        <div className="page-section-content block">
          <GameLogsTable />
        </div>
      </div>
      <div className="page-section">
        <div className="page-section-header">
          <IoAnalytics className="icon clipboard" />
          <h2>Statistical Graph</h2>
          <hr className="mini-line" />
        </div>
        <div className="page-section-content justify-center">
          <ConnectedScatterplot />
        </div>
      </div>
      <Footer />
    </main>
  )
}
