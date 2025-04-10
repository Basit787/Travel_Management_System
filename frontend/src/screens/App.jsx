import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Toast from "../components/Toast/Toast";
import IndexProviders from "../context";
import AppRoutes from "../routes/index.routes";

function App() {
  return (
    <React.Fragment>
      <IndexProviders>
        <Navbar />
        <main style={{ marginTop: "6rem" }}>
          <AppRoutes />
        </main>
        <Footer />
        <Toast />
      </IndexProviders>
    </React.Fragment>
  );
}

export default App;
