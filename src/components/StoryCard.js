

import { useEffect, useState } from 'react'
import StoryItem from './StoryItem'
import { userlist } from '../services/userList'

export const StoryCard = () => {

    const [data, setdata] = useState([])

    useEffect(() => {

       const gettingdata = async () => {
            const res = await userlist();
            setdata(res)
        }
        
        gettingdata()

    }, [])

    return (
        <div className='bg-white dark:bg-black dark:border-slate-700 dark:text-white px-4 pb-4 pt-4 sm:pt-4 sm:space-x-2 border sm:rounded-xl dark:border-none border-gray-300 flex  overflow-x-auto scrollbar scrollbar-thumb-slate-400  scrollbar-medium'>
            {data.map((e, index) => <StoryItem key={index} name={e.name.first} lastname={e.name.last} picture={e.picture.large} />)}

        </div>
    )
}
