import { Chart } from '../../../components/Chart'
import { RaceList } from '../RaceList'

const ResultList = () => {
  return (
    <div className='container mx-auto px-4 py-10'>
      <RaceList />
      <Chart />
    </div>
  )
}
export default ResultList
