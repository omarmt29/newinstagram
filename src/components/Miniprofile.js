import React from 'react'

export const Miniprofile = ({name, subname, image}) => {
    return (
        <div className='w-100 flex items-center justify-between '>
            <div className={`flex items-center space-x-4`}>
                <img className="object-cover w-12 h-12 rounded-full hover:scale-125 hover:cursor-pointer transition-all" src={image} alt="asd" />
                <div>
                    <p className='text-md dark:text-white text-gray-700 font-semibold truncate'>{name}</p>
                    <p className='text-gray-500 truncate dark:text-slate-400 text-xs'>{subname}</p>

                </div>
            </div>
          
        </div>
    )
}
