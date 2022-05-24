import React, {useState } from 'react';
import "./Home.scss";
import AddGifs from '../../Component/AddGifs/AddGifs';
import PrintGifs from '../../Component/PrintGifs/PrintGifs';
import Header from '../../Component/Header/Header';

function Home() {
  const [addGifs, setaddGifs] = useState("");
  return (
    <div className="gift">
      <Header/>
      <section className="gift-content">
        <h2>Gifs</h2>
        <AddGifs setaddGifs={setaddGifs}/>
        <PrintGifs addGifs={addGifs}/>
      </section>
    </div>
  );
}

export default Home;
