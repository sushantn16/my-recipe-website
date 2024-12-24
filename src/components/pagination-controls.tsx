"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

interface PaginationControlsProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  route: string
}

export function PaginationControls({
  totalItems,
  itemsPerPage,
  currentPage,
  route,
}: PaginationControlsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="flex justify-center items-center space-x-6">
      <Button
        variant="outline"
        disabled={currentPage <= 1}
        asChild
      >
        <Link href={createPageURL(currentPage - 1)}>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Link>
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        disabled={currentPage >= totalPages}
        asChild
      >
        <Link href={createPageURL(currentPage + 1)}>
          Next
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}

