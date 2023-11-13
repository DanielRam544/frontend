import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import ProductsFormPage from "./pages/ProductsFormPage";
import ProtectedRoute from "./ProtectedRoute";
import { ProductsProvider } from "./context/ProductsContext";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import ChatPage from "./pages/ChatPage";
import TipsPage from "./pages/TipsPage";
import CuestionarioTag from "./pages/CuestionarioTag";
import Sugerencias from "./pages/Sugerencias";


function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10" >
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              {/* Rutas a las que sól se podrá accesar cuando se inicio sesión */}
              <Route element={<ProtectedRoute />}>
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/add-product' element={<ProductsFormPage />} />
                <Route path='/products/:id' element={<ProductsFormPage />} />
                <Route path='/ChatPage' element={<ChatPage />} />
                <Route path="/TipsPage" element={<TipsPage />} />
                <Route path="/CuestionarioTag" element={<CuestionarioTag />} />
                <Route path="/Sugerencias" element={<Sugerencias />} />
              </Route>

              {/* Rutas para el 404*/}
              <Route path='*' element={<NotFound />} />

            </Routes>
          </main>
        </BrowserRouter>
      </ProductsProvider>
    </AuthProvider>
  )
}

export default App