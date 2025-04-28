import { axiosInstance } from "@/axios/instance"
import { CourseGetResType, CourseListType } from "@/types/course_types"

export const get_course_list_api = async (): Promise<CourseGetResType[] | null> => {
    try {
        const response = await axiosInstance.get(`/courses`)
        if (response.status == 200) {
            console.log(response)
            return response.data
        }
        else {
            return null
        }
    } catch (err) {
        console.log("Error in fetching course list", err)
        return null
    }
}

export const get_public_courses_api = async (
    page: number,
    categoryIds?: string[],
    instructorIds?: string[],
    searchQuery?: string,
): Promise<CourseListType | null> => {
    try {

        let url=""
        const queryParams: Record<string, string> = {};

        queryParams.page = String(page)
        queryParams.size = "9"

        if (categoryIds && categoryIds.length > 0) {
            queryParams.category_id = categoryIds.join(',');
        }

        if (instructorIds && instructorIds.length > 0) {
            queryParams.instructor_id = instructorIds.join(',');
        }

        if (searchQuery && searchQuery?.trim() !== "") {
            queryParams.search = searchQuery;
        }

        if (Object.keys(queryParams).length > 0) {
            const queryString = new URLSearchParams(queryParams).toString();
            url = `/public/courses?${queryString}`;
        }

        const response = await axiosInstance.get(url)
        if (response.status == 200) {
            console.log(response)
            return response.data
        } else {
            return null
        }
    } catch (err) {
        console.log("Error in fetching public pages", err)
        return null
    }
}
