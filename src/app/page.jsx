import Aliados from '@/components/Aliados'
import Banner from '@/components/Banner'
import Convocatorias from '@/components/Convocatorias'
import Financiadores from '@/components/Financiadores'
import Footer from '@/components/Footer'
import Impacto from '@/components/Impacto'
import Newsletter from '@/components/Newsletter'
import Oportunidades from '@/components/Oportunidades'
import QueHacemos from '@/components/QueHacemos'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  return (
    <div>
      <Banner />
      <QueHacemos />
      <Convocatorias />
      <Aliados />
      <Financiadores />
      <Impacto />
      <Oportunidades />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home