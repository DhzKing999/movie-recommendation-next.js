import
{
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Button } from "../ui/button"

interface FormWrapperPropsType
{
    children: React.ReactNode,
    headerLable: string,
    backButtonLabel: string,
    backButtonHref: string,
}


const FormWrapper = ({ children, headerLable, backButtonHref, backButtonLabel }: FormWrapperPropsType) =>
{
    return (
        <Card className=" w-[400px] max-sm:m-2">
            <CardHeader>
                <CardTitle className=" text-center">{headerLable}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Link className=" text-center  w-full" href={backButtonHref}>
                    <Button variant={"link"}> {backButtonLabel}</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default FormWrapper