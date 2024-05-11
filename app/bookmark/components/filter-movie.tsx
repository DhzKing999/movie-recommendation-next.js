"use client"
import { Input } from '@/components/ui/input'
import { BadgeDollarSign, CalendarIcon, CalendarSearchIcon, SortAscIcon } from 'lucide-react'
import React, { useState } from 'react'
import { FilterSelectBox } from './filter-combox-box'
import { Button } from '@/components/ui/button'
import { useFilterStore } from '@/store/filter-store'
import { useRouter } from 'next/navigation'


const FilterMovie = () =>
{
    const { sort, maxRevenue, minRevenue, startDate, endDate, setFilter } = useFilterStore()
    const router = useRouter()
    const constructUrl = () =>
    {
        let url = ``;
        let params = [];
        if (minRevenue !== null || maxRevenue !== null)
        {
            params.push(`revenue=${minRevenue}-${maxRevenue}`);
        }
        if (sort !== null)
        {
            params.push(`sort=${sort}`);
        }
        if (startDate !== null && endDate !== null)
        {
            params.push(`startDate=${startDate}&endDate=${endDate}`);
        } else if (startDate === null && endDate === null)
        {
        } else
        {
        }
        if (params.length > 0)
        {
            url += `?${params.join('&')}`;
        }
        return url;
    };

    return (
        <>
            <h1 className=' flex justify-center gap-x-2 text-center text-sm pt-8'>Filter by Price
                <BadgeDollarSign />
            </h1>
            <div className=" flex gap-4 px-4 items-center pt-4">
                <Input value={Number(minRevenue)} onChange={(e) => { setFilter({ minRevenue: e.target.value }) }} type='number' placeholder='min' />
                <span>-</span>
                <Input value={Number(maxRevenue)} onChange={(e) => { setFilter({ maxRevenue: e.target.value }) }} type='number' placeholder='max' />
            </div>
            <h1 className=' flex justify-center gap-x-2 text-center text-sm pt-8'>Filter by Year
                <CalendarIcon />
            </h1>
            <div className=" flex flex-col gap-4 px-4 items-center pt-4">
                <h1 className=' text-sm'>Start Date</h1>
                <Input className=' text-center items-center pl-20' onChange={(e) => setFilter({ startDate: (e.target.value) })} type='date' placeholder='min' />
                <h1 className=' text-sm'>End Date</h1>
                <Input className=' text-center items-center pl-20' onChange={(e) => setFilter({ endDate: (e.target.value) })} type='date' placeholder='max' />
            </div>
            <div className=' flex  flex-col gap-y-2 items-center justify-center gap-x-2 text-center text-sm pt-8'>
                <div className=" flex gap-x-2">
                    <h1> Sort Revenue</h1>
                    <SortAscIcon />
                </div>
                <FilterSelectBox />
            </div>
            <div className=" flex justify-center pt-5">
                <Button onClick={() => router.push(constructUrl())}>Apply Filter</Button>
            </div>

        </>
    )
}

export default FilterMovie