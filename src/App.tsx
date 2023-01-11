import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contacts from './components/Main/Contacts/Contacts';
import Services from './components/Main/Services/Services';
import Stage from './components/Main/Stage/Stage';
import { OpenFormProvider } from './context';

const App = () => {
  return (
    <OpenFormProvider>
      <div className="back">
        <Header />
        <main className="main">
          <Stage />
          <Services />
          <Contacts />
        </main>
        <hr />
        <Footer />
      </div>
    </OpenFormProvider>
  );
};

export default App;
