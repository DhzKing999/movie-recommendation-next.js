import Link from 'next/link'
import React from 'react'

const SuggestionBox = ({ autoCompleteData }: { autoCompleteData: String[] | null }) =>
{
    return (
        <>
            <div className=" h-[40vh]  rounded-xl shadow-xl w-full">
                <ul className=' w-full  flex flex-col items-start gap-y-1'>
                    {autoCompleteData?.map((item, index) => (
                        <Link key={index} href={`/movies/${item}`} className=' hover:shadow-xl ml-2 cursor-pointer hover:underline '>{item}</Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SuggestionBox