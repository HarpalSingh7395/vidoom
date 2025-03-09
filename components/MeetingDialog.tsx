import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type MeetingDialogProps = {
    isOpen?: boolean;
    onClose?: (val: boolean) => void;
    title?: string;
    description?: string;
    onActionClick?: () => void;
}
 
export function MeetingDialog({ title, description, isOpen, onClose, onActionClick}: MeetingDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title || "Meeting Dialog"}</DialogTitle>
          <DialogDescription>
            {description || `Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" onClick={onActionClick}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}