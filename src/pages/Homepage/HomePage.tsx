import './HomePage.scss'
import CarouselComponent from '../../components/molecules/CarouselComponent/CarouselComponent'
import Main from '../../components/organisms/Main/Main'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'



const HomePage = () => {
  const {data} = useContext(ProductsContext)
  console.log(data)
 
  return (
    <div>
        <CarouselComponent/>
        <Main/>
    </div>
  )
}

export default HomePage