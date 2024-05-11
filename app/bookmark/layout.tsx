import Filter from "./components/filter"


const BookMarkPageLAyout = ({ children }: { children: React.ReactNode }) =>
{
    return (
        <>
            <div className=" flex">
                <Filter />
                <div className=" flex-1">
                    {children}
                </div>
            </div>
        </>
    )
}

export default BookMarkPageLAyout