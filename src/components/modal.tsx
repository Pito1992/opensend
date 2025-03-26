import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
  DialogFooter,
} from '@/elements/dialog'
import { type DialogProps } from '@radix-ui/react-dialog'
import { cn } from '@/utils/general'

export interface ModalProps {
  onClose: DialogProps['onOpenChange']
  isOpen: DialogProps['open']
  title: React.ReactNode
  description: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent
          className={cn(
            'bg-secondary gap-2 overflow-hidden',
            'sm:max-w-2xl',
            'lg:max-w-5xl lg:px-14 lg:py-10'
          )}
        >
          <DialogTitle className="font-darkerGrotesque text-foreground text-center text-2xl font-bold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center text-sm font-medium">
            {description}
          </DialogDescription>
          <div className="py-4 lg:py-8">{children}</div>
          <DialogFooter>{footer}</DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
