import { useContext } from 'react'
import { RacingContext } from '../../../context'

export const RaceList = () => {
  const { dataRace, year } = useContext<any>(RacingContext)
  return (
    <div className='mb-8'>
      <h3 className='text-2xl font-semibold mb-6'>{year} RACE RESULTS</h3>
      <div className='relative overflow-x-auto'>
        <table className='table-auto border border-gray-600 w-full text-left'>
          <thead className='bg-gray-700'>
            <tr>
              <th scope='col' className='px-4 py-3 whitespace-nowrap'>
                GRAND PRIX
              </th>
              <th scope='col' className='px-4 py-3'>
                DATE
              </th>
              <th scope='col' className='px-4 py-3'>
                WINNER
              </th>
              <th scope='col' className='px-4 py-3'>
                CAR
              </th>
              <th scope='col' className='px-4 py-3'>
                LAPS
              </th>
              <th scope='col' className='px-4 py-3'>
                TIME
              </th>
            </tr>
          </thead>

          <tbody>
            {dataRace.length > 0 ? (
              dataRace.map((item: any, key: number) => {
                return (
                  <tr key={`race-${key}`} className='bg-gray-800 border-b border-gray-700'>
                    <td className='px-4 py-2'>{item.nation}</td>
                    <td className='px-4 py-2 whitespace-nowrap'>{item.date}</td>
                    <td className='px-4 py-2'>{item.driver}</td>
                    <td className='px-4 py-2 whitespace-nowrap'>{item.team}</td>
                    <td className='px-4 py-2'>{item.laps}</td>
                    <td className='px-4 py-2'>{item.time}</td>
                  </tr>
                )
              })
            ) : (
              <tr className='text-center italic text-gray-400'>
                <td colSpan={6} className='px-6 py-3'>
                  No result...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
