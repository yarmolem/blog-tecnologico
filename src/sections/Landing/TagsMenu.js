import React from 'react'
import HeaderCard from '../../components/Card/HeaderCard'
import Tag from '../../components/Tag/tag'

const tags = [
  {
    texto: '2021',
    cantidad: '10'
  },
  {
    texto: 'Actualizado',
    cantidad: '2'
  },
  {
    texto: 'android',
    cantidad: '8'
  },
  {
    texto: 'Disney',
    cantidad: '30'
  },
  {
    texto: 'Juegos',
    cantidad: '60'
  },
  {
    texto: 'estilo',
    cantidad: '20'
  },
  {
    texto: 'Apk',
    cantidad: '18'
  },
  {
    texto: 'Fotos',
    cantidad: '4'
  }
]
const TagsMenu = () => {
  return (
    <div className="mb-3">
      <HeaderCard text="Menú Etiquetas" boton={false} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full flex flex-wrap gap-y-2 gap-x-2">
          {tags.map((tag, index) => (
            <Tag key={index} texto={tag.texto} cantidad={tag.cantidad} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TagsMenu
