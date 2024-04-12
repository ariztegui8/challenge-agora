import Aliados from '@/components/Aliados'
import Banner from '@/components/Banner'
import Convocatorias from '@/components/Convocatorias'
import Financiadores from '@/components/Financiadores'
import Impacto from '@/components/Impacto'
import Newsletter from '@/components/Newsletter'
import Oportunidades from '@/components/Oportunidades'
import QueHacemos from '@/components/QueHacemos'

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
    </div>
  )
}

export default Home