// components
import Footer from "../components/Footer";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
