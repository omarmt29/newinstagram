
import { Miniprofile } from './Miniprofile'
import { StoryCard } from './StoryCard'
import { AiOutlineMore } from "react-icons/ai"

import { supabase } from '../servidor/Client'
import { useEffect, useState } from 'react'


export const Feed = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {

        const fetch = async () => {
            const posts = await supabase.from('posts').select()
          
            setdata(posts.data)
    
        } 
        fetch()

    }, [data])

    return (
        <div className='max-w-7xl mt-2 sm:mt-7 mx-auto grid grid-cols-3 space-x-6'>

            {/* leftside*/}

            <div className='col-span-3 md:col-span-2 '>

                <div className=' w-full sm:relative  sm:top-0 '>

                    <StoryCard />
                </div>
               

                {/* Post card */}

                <div className='overflow-y-auto snap-y scrollbar flex flex-col-reverse	scroll-snap-align: end; scrollbar-thumb-slate-400 scrollbar-medium mt-5 sm:mt-5'>



                    {data.map((e, i) =>
                   
                        <div key={i} className='mb-5 snap-center '>
                            <div className='bg-white dark:bg-black dark:text-white border-t-2 dark:border-slate-800 flex items-center justify-between p-5 sm:rounded-t-xl'>
                                <Miniprofile w='10' h='10' name={e.name} image={e.image} />
                                <AiOutlineMore className='rotate-90 text-2xl' />
                            </div>
                            <img className='w-full h-[600px] object-cover' key={e.image } src={e.image} alt="" />
                     
                            <div className='bg-white dark:bg-black dark:border-slate-800 border-b-2 w-100 p-4 sm:rounded-b-xl flex items-center gap-1'>
                                <p className='font-medium dark:text-white'>Message:</p>
                                <p className='text-xs text-gray-600 dark:text-slate-300'>{e.message}</p>
                            </div>
                        </div>
                    )}




                </div>

            </div>


            {/* Right side*/}

            <div className='col-span-1  hidden md:block px-4 pt-8'>

                {/* miniprofile */}

                <Miniprofile className='h-20' name="Maria_burguer89" subname="Maria_burguer89" image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />

                {/* suggestions */}
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-between mt-4'>
                        <p className='text-xl text-gray-400 dark:text-white font-semibold'>Suggestions for you</p>
                        <p className='text-md text-gray-700 dark:text-slate-400 font-bold'>See All</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Miniprofile w='10' h='10' name="Rodolfo Corripio" subname="Maria_burguer89" image="https://picsum.photos/id/237/200/300" />
                        <Miniprofile w='10' h='10' name="Alejandra_papa20" subname="Maria_burguer89" image="https://picsum.photos/id/238/200/300" />
                        <Miniprofile w='10' h='10' name="Itz real_gang" subname="Maria_burguer89" image="https://picsum.photos/id/234/200/300" />
                        <Miniprofile w='10' h='10' name="Sophie223" subname="Followed by Rodolfo.." image="https://picsum.photos/id/230/200/300" />

                    </div>
                </div>


            </div>



        </div>
    )
}
