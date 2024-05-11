"use client"
import { useAuthStore } from '@/store/store'
import Link from 'next/link'
import React from 'react'
import
{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { userlogout } from '@/actions/authAction/userAuthAction'

const UserBox = () =>
{
    const router = useRouter()
    const { userData, logout } = useAuthStore()
    if (!userData)
    {
        return <Link href={'/auth/login'}>Login</Link>
    }
    const handelLogout = async () =>
    {
        try
        {
            await userlogout()
            logout();
            router.replace('/auth/login')
        } catch (error)
        {
            console.log(error)
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback>{userData?.user?.username.slice(0, 1)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button variant={"link"}>
                        <Link href={'/bookmark/1'}>BookMark</Link>
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant={"link"} onClick={handelLogout}>Logout</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserBox