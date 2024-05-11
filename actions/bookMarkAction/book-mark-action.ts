import { IUrlParmas } from "@/app/bookmark/[page_no]/page";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addBookMark = async (data: any) =>
{
    try
    {
        const response = await axios.post(`${API_URL}/add-bookmark`, data, { withCredentials: true });
        return response.data;
    } catch (error: any)
    {
        return error?.response?.data;
    }
};

export const getAllBookMark = async (params: IUrlParmas) =>
{
    try
    {
        const response = await axios.get(`${API_URL}/get-all-bookmark`, {
            params: {
                pageno: params.pageno,
                revenue: params.revenue,
                sort: params.sort,
                startDate: params.startDate,
                endDate: params.endDate
            },
            withCredentials: true
        });
        return response.data;
    } catch (error: any)
    {
        return error?.response?.data;
    }
};

export const deleteBookMark = async ({ id, token }: any) =>
{
    try
    {
        console.log(id)
        const response = await axios.delete(`${API_URL}/delete-bookmark?id=${id}`, { headers: { Authorization: `Bearer ${token}` } });
        console.log(response)
        return response.data;
    } catch (error: any)
    {
        console.log(error)
        return error?.response?.data;
    }
}