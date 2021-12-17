import React from 'react';
import '../styles/index.css';
import BlockData from './BlockData';

function App() {
  return (
    <div>
      <header>
        <h1>Set</h1>
        <nav className='nav'>
          <ul>
            <li>
              <BlockData />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
