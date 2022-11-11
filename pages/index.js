import Card from '../components/Card'
import Filters from '../components/Filters'
import Header from '../components/Header'
import Search from '../components/Search'


export default function Home() {
  return (
  <div className='bg-gradient-to-b from-blue-900 to-blue-400'>
      <Header/>
      <Search/>
      <Filters/>
      <div className='flex justify-center'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>

  </div>
  )
}
