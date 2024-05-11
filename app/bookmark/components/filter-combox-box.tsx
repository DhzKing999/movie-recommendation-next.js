"use client"
import * as React from "react"

import
{
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useFilterStore } from "@/store/filter-store"

export function FilterSelectBox()
{
    const { setFilter, sort } = useFilterStore()
    const handelChange = (e: any) =>
    {
        setFilter({ sort: e })
    }

    return (
        <Select onValueChange={handelChange} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Order" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel  >{sort}</SelectLabel>
                    <SelectItem className=" z-50" value="revenuedesc">Highest Grossing</SelectItem>
                    <SelectItem className=" z-50" value="revenueasc">Lowest Grossing</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
