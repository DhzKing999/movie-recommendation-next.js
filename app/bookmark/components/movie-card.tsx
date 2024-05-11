"use client"
import { TrashIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBookMark } from '@/actions/bookMarkAction/book-mark-action';
import { useAuthStore } from '@/store/store';



const MovieCard = ({ data }: { data: any }) =>
{
    const { userData } = useAuthStore()
    const queryClient = useQueryClient()
    const deleteTodo = useMutation({
        mutationFn: deleteBookMark,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["book-mark"] })
    })

    const handelRemoveBookMark = () =>
    {
        deleteTodo.mutate({ id: data._id, token: userData?.token })
    }
    return (
        <>
            <div className="flex flex-col items-start space-y-2  rounded-xl ">
                <div className="max-w-[300px] max-h-[300px]  rounded-xl overflow-hidden">
                    <Image
                        alt="Movie Poster"
                        className=" hover:scale-110 transition duration-500 cursor-pointer object-coveraspect-[2/3]   overflow-hidden rounded-xl object-cover"
                        height="550"
                        src={data.imageUrl}
                        width="400"
                    />
                </div>
                <div className="space-y-1">
                    <h3 className="text-lg font-bold">{data.original_title}</h3>
                    <h3 className="text-lg text-slate-500">{new Date(data.release_date).getFullYear()}</h3>
                </div>
            </div>
            {/* <div className="flex flex-col items-start space-y-2  rounded-xl  group ">
                <div className="w-[300px] h-[300px] relative rounded-xl overflow-hidden">
                    <button disabled={deleteTodo.isPending} onClick={handelRemoveBookMark} className=' bg-black/70  rounded-full   absolute right-14 top-2 '>
                        <TrashIcon size={20} className=' text-white hidden duration-700 transition ease-in-out group-hover:block ' />
                    </button>
                    <Image
                        alt="Movie Poster"
                        className="  transition duration-500   aspect-[2/3]   overflow-hidden rounded-xl object-cover"
                        height="300"
                        src={data.imageUrl}
                        width="260"
                    />
                </div>
                <div className="space-y-1">
                    <Link href={`/movies/${data.original_title}`}>
                        <h3 className="text-lg font-bold">{data.original_title}</h3>
                    </Link>
                </div>
            </div> */}
        </>
    );
};

export default MovieCard;