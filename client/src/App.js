import StatusLine from "./components/StatusLine/StatusLine";
import './App.css'
import { BsSearch } from 'react-icons/bs'
import { useState } from "react";
import SearchModal from "./components/SearchModal/SearchModal";
import axios from "axios";


function App() {
  const [searchModal, setSearchModal] = useState(false)

  const handleSearch = (data) => {

  }

  return (
    <div className="App">
      <h1>Task Management</h1>
      <div className="search-bar">
        <input type='text' placeholder="search" className="search-input" />
        <span><BsSearch /></span>
      </div>
      <main>
        <section>
          <StatusLine
            status='Step 1' handleSearch={handleSearch} />

          <StatusLine
            status='Step 2' handleSearch={handleSearch} />

          <StatusLine
            status='Step 3' handleSearch={handleSearch} />

          <StatusLine
            status='Step 4' handleSearch={handleSearch} />
        </section>
      </main>
      <SearchModal searchModal={searchModal}
        setSearchModal={setSearchModal}
        searchData
        searchWord />
    </div>
  );
}

export default App;
