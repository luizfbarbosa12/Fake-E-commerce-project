import './HomePage.scss'
import Header from '../../components/organisms/Header/Header'
import CarouselComponent from '../../components/molecules/CarouselComponent/CarouselComponent'
import Main from '../../components/organisms/Main/Main'
import Footer from '../../components/organisms/Footer/Footer'


const HomePage = () => {
 
  return (
    <div>
        <Header/>
        <CarouselComponent/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default HomePage