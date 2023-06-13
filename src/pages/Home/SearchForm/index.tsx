import { useContext } from 'react'
import { RacingContext } from '../../../context'
import Form from '../../../components/Form'
import Input from '../../../components/Form/Input'
import Select from '../../../components/Form/Select'
import { YearOptions } from '../../../constants/type'
import Flag from '../../../components/Flag'

const SearchForm = () => {
  const { form, onSubmit } = useContext<any>(RacingContext)
  return (
    <div className='search-box relative'>
      <div className='md:absolute left-0 top-0 flex items-center md:items-end h-full w-full'>
        <div className='container mx-auto px-4'>
          <Form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-wrap items-center px-3 py-5 my-10 md:my-4 gap-4 bg-gray-400 rounded-lg text-black'>
              <Input form={form} name='search' type='search' placeholder='Search driver, team, race, nation...' />
              <Select form={form} name='year' options={YearOptions} />
              <button className='bg-[#f20751] hover:bg-red-500 text-white font-bold py-2 px-7 rounded-full w-full lg:w-max h-11'>
                Search
              </button>
            </div>
          </Form>
        </div>
      </div>
      <Flag />
    </div>
  )
}

export default SearchForm
