import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ReactNode } from "react";

type MeetingDialogProps = {
  isOpen?: boolean;
  onClose?: (val: boolean) => void;
  title?: string;
  description?: string;
  onActionClick?: () => void;
  children?: ReactNode;
}

export function MeetingDialog({ title, description, isOpen, onClose, children }: MeetingDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[350px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title || "Meeting Dialog"}</DialogTitle>
          <DialogDescription>
            {description || `Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}