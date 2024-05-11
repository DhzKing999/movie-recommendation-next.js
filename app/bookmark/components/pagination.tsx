import
{
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useParams, usePathname } from "next/navigation";

export function PagePagination({ count }: { count: number })
{
    const params = useParams()
    console.log()
    //@ts-ignore
    const currentPage = parseInt(params?.page_no)
    const dividor = count % 8 !== 0 ? Math.floor(count / 8) + 1 : Math.floor(count / 8)
    const numbers = Array.from({ length: dividor }, (_, index) => index + 1);
    const lastIndex = numbers[numbers.length - 1];
    return (

        <Pagination>
            <PaginationContent>
                <PaginationItem className={currentPage == 1 ? "hidden" : "block"} >
                    <PaginationPrevious href={`${currentPage - 1}/${window.location.search}`} />
                </PaginationItem>
                {numbers.map((number) => (
                    <PaginationItem key={number}>
                        <PaginationLink className={currentPage == number ? " text-white" : " text-white/50"} href={`${number}/${window.location.search}`}>{number}</PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem className={currentPage == lastIndex ? "hidden" : "block"}>
                    <PaginationNext href={`${currentPage + 1}/${window.location.search}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}
