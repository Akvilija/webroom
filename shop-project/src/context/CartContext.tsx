import { createContext, useContext, useState, ReactNode } from 'react'

// Apibreziamas krepselio kontekstas su triju duomenu tipais
interface CartContextType {
  cartItems: number[] // Produktu ID masyvas, esantis krepselyje
  addToCart: (productId: number) => void // Funkcija, kuri prideda produktą i krepseli
  removeFromCart: (productId: number) => void  // Funkcija, kuri pasalina produkta is krepselio
}

// sukuriamas kontekstas su pradine reiksme 'undefined', nes reiksme bus nustatyta `CartProvider` viduje
const CartContext = createContext<CartContextType | undefined>(undefined)

// Krepselio konteksto teikejas (provider), kuris leidzia naudoti krepselio funkcionaluma visame projekte
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Lokali busena, kurioje saugomi produktų ID, esantys krepselyje
  const [cartItems, setCartItems] = useState<number[]>([])

  //funkcija, kuri prideda produkta i krepseli
  const addToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId])
  }

  // pasalina produkta is krepselio
  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((id) => id !== productId))
  }

  return (
     // Pateikiamas kontekstas visiems vaikiniams komponentams
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

// Sukuriamas pasirinktas kabliukas (hook), kad butu galima naudoti krepselio duomenis kituose komponentuose
export const useCart = () => {
  const context = useContext(CartContext)
    // Jei kontekstas nera apgaubtas `CartProvider`, ismetamas klaidos pranesimas
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
