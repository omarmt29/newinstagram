export default function StoryItem({name, lastname, picture}) {
    return(    
        <div key={name} className='hover:scale-110 hover:cursor-pointer transition-all'>
            <img className='rounded-full w-12 h-12 object-cover  sm:w-16 sm:h-auto border p-[1.5px] border-md border-red-600 ' src={picture} alt="" />
            <p className='text-[11px] sm:text-xs w-14 truncate text-center text-gray-500 dark:text-white mt-1'>{name} {lastname}</p>
            
        </div>
    )
}


