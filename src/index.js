import React from 'react'
import { createRoot } from 'react-dom/client'
import IntroPage  from './components/IntroPage'
import Skills from "./components/Skills"
import './index.css'

function App(){
  return (
    <div>
      <IntroPage />
      <Skills />
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
