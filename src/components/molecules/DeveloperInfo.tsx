import { Heart } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/util/styles'

export interface IDeveloperInfoProps {
  className?: string
}

export const DeveloperInfo = ({ className }: IDeveloperInfoProps) => {
  return (
    <Link
      href="https://www.linkedin.com/in/umer-qadoos-28b84a216/"
      target="_blank"
      className={cn('text-xs group ', className)}
    >
      <div className="flex items-center gap-1 group-hover:underline underline-offset-4">
        Made with{' '}
        <Heart
          className={`inline w-3 h-3 group-hover:fill-red-600 group-hover:w-4 group-hover:h-4 transition-none`}
        />
        by Umer Qadoos
      </div>
    </Link>
  )
}