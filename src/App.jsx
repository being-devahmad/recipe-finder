import React from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipes from './pages/Recipes'
import RecipeDetails from './components/RecipeDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
