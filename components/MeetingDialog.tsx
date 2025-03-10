import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ReactNode } from "react";
import { CardContent } from "./ui/card";

type MeetingDialogProps = {
  isOpen?: boolean;
  onClose?: (val: boolean) => void;
  title?: string;
  description?: string;
  onActionClick?: () => void;
  children?: ReactNode;
}

export function MeetingDialog({ title, description, isOpen, onClose, onActionClick, children }: MeetingDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
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