import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'
import MovieGenera from './filter-movie-genera'
import FilterMovie from './filter-movie'


const Filter = () =>
{
    return (
        <>
            <div className="  min-h-[80vh] border-2 shadow-lg ml-4 fixed top-[17vh] dark:bg-black/20 rounded-lg w-[15vw]">
                <FilterMovie />
            </div>
        </>
    )
}

export default Filter