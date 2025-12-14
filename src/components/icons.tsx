import type { SVGProps } from 'react'

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-6 w-6"
      {...props}
    >
      <path
        fill="currentColor"
        d="M216,48H40A16,16,0,0,0,24,64V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216V80H40Zm176,144H40V96H216Z"
      ></path>
      <path
        fill="currentColor"
        d="M100,148a12,12,0,1,1,12-12A12,12,0,0,1,100,148Zm-4-16a4,4,0,1,0-4,4A4,4,0,0,0,96,132Zm20,28H84a4,4,0,0,1,0-8h32a4,4,0,0,1,0,8Zm44-16a12,12,0,1,1-12-12A12,12,0,0,1,160,148Zm-4-16a4,4,0,1,0-4,4A4,4,0,0,0,156,132Zm20,28H140a4,4,0,0,1,0-8h32a4,4,0,0,1,0,8Z"
      ></path>
    </svg>
  )
}
