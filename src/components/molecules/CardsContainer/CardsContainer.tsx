import { ReactNode } from 'react'
import './CardsContainer.scss'

interface CardsContainerProps {
    children?: ReactNode
}

const CardsContainer = ({children}: CardsContainerProps) => {
  return (
    <div className="cards-container">{children}</div>
  )
}

export default CardsContainer