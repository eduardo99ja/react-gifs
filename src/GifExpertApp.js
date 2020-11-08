import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
  //const categories = ['One punch', 'Samurai X', 'Dragon ball']
  const [categories, setCategories] = useState(['One Punch'])
  return (
    <>
      <h2>GifExpert</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
