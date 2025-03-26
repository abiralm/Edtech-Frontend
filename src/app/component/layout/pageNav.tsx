import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export const PageNav = () => {
    return (
        <Pagination className="flex justify-center py-4">
            <PaginationContent className="flex items-center space-x-2 px-4 py-2">
                <PaginationItem>
                    <PaginationPrevious 
                        href="#" 
                        className="px-3 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition" 
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink 
                        href="#" 
                        className="px-3 py-1 text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 transition"
                    >1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis className="text-gray-500" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext 
                        href="#" 
                        className="px-3 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition" 
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};