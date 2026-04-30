"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavLink = ({href, className, children}) => {
    
    const pathName = usePathname()
  
    const isActive = pathName === href;

  return (
    <div>
        <Link href={href} className={`${isActive && 'border-b-2 border-pink-500' } ${className}`}>
            {children}
        </Link>
    </div>
  )
}

export default NavLink