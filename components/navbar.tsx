'use client'

import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'
import { MobileSidebar } from './mobile-sidebar'
import { useProModal } from '@/hooks/use-pro-modal'

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
})

interface NavbarProps {
  isPro: boolean
}

export const Navbar = ({ isPro }: NavbarProps) => {
  const { onOpen } = useProModal()

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar isPro={isPro} />
        <Link href="/">
          <h1
            className={cn(
              'hidden md:block text-xl md:text-3xl font-bold text-primary',
              font.className,
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        {!isPro && (
          <Button onClick={onOpen} variant={'premium'} size={'sm'}>
            Upgrade
            <Sparkles className="h-4 w-4 ml-2 fill-white text-white" />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
