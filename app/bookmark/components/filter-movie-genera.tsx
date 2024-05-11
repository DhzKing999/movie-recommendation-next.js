import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

const MovieGenera = () =>
{
    return (
        <>
            <div className=" ml-10  h-full  grid grid-cols-2 gap-4 pt-4  place-content-between ">
                <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="genre-action" />
                    Action
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="genre-comedy" />
                    Comedy
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="genre-drama" />
                    Drama
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="genre-sci-fi" />
                    Sci-fi
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="genre-horror" />
                    Horror
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="genre-romance" />
                    Romance
                </Label>
            </div>

        </>
    )
}

export default MovieGenera