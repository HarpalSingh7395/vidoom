"use client";

import { format } from "date-fns";
import { useEffect, useState, forwardRef } from "react";
import { Calendar1 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type DateTimePickerProps = {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  name?: string;
  disabled?: boolean;
  onBlur?: () => void;
  placeholder?: string;
};

export const DateTimePicker = forwardRef<HTMLButtonElement, DateTimePickerProps>(
  ({ value, onChange, name, disabled, onBlur, placeholder = "MM/DD/YYYY hh:mm aa" }, ref) => {
    const [date, setDate] = useState<Date | undefined>(value);
    const [isOpen, setIsOpen] = useState(false);

    // Only sync internal state with external value when the prop actually changes
    // We use object equality to prevent unnecessary updates
    useEffect(() => {
      if (value && (!date || value.getTime() !== date.getTime())) {
        setDate(value);
      } else if (!value && date) {
        setDate(undefined);
      }
    }, [value]);

    // Only call onChange when date is updated internally (not from props)
    const handleDateChange = (newDate: Date | undefined) => {
      setDate(newDate);
      // Only propagate changes if they actually changed
      if (newDate !== value && onChange) {
        // Compare dates or call onChange only when actually changed
        if (!value || !newDate || value.getTime() !== newDate.getTime()) {
          onChange(newDate);
        }
      }
    };

    const hours = Array.from({ length: 12 }, (_, i) => i + 1);
    
    const handleDateSelect = (selectedDate: Date | undefined) => {
      if (selectedDate) {
        // Maintain time from existing date if available
        if (date) {
          selectedDate.setHours(date.getHours(), date.getMinutes());
        }
        handleDateChange(selectedDate);
      }
    };

    const handleTimeChange = (
      type: "hour" | "minute" | "ampm",
      value: string
    ) => {
      if (date) {
        const newDate = new Date(date);
        if (type === "hour") {
          newDate.setHours(
            (parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
          );
        } else if (type === "minute") {
          newDate.setMinutes(parseInt(value));
        } else if (type === "ampm") {
          const currentHours = newDate.getHours();
          const isPM = value === "PM";
          const isCurrentlyPM = currentHours >= 12;
          
          if (isPM && !isCurrentlyPM) {
            newDate.setHours(currentHours + 12);
          } else if (!isPM && isCurrentlyPM) {
            newDate.setHours(currentHours - 12);
          }
        }
        handleDateChange(newDate);
      }
    };

    const handleClose = () => {
      setIsOpen(false);
      onBlur?.();
    };

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            type="button"
            name={name}
            disabled={disabled}
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <Calendar1 className="mr-2 h-4 w-4" />
            {date ? (
              format(date, "MM/dd/yyyy hh:mm aa")
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <div className="sm:flex">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
            />
            <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
              <ScrollArea className="w-64 sm:w-auto">
                <div className="flex sm:flex-col p-2">
                  {hours.map((hour) => (
                    <Button
                      key={hour}
                      size="icon"
                      variant={
                        date && date.getHours() % 12 === hour % 12
                          ? "default"
                          : "ghost"
                      }
                      className="sm:w-full shrink-0 aspect-square"
                      onClick={() => handleTimeChange("hour", hour.toString())}
                    >
                      {hour}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" className="sm:hidden" />
              </ScrollArea>
              <ScrollArea className="w-64 sm:w-auto">
                <div className="flex sm:flex-col p-2">
                  {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                    <Button
                      key={minute}
                      size="icon"
                      variant={
                        date && date.getMinutes() === minute
                          ? "default"
                          : "ghost"
                      }
                      className="sm:w-full shrink-0 aspect-square"
                      onClick={() =>
                        handleTimeChange("minute", minute.toString())
                      }
                    >
                      {minute.toString().padStart(2, "0")}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" className="sm:hidden" />
              </ScrollArea>
              <ScrollArea className="">
                <div className="flex sm:flex-col p-2">
                  {["AM", "PM"].map((ampm) => (
                    <Button
                      key={ampm}
                      size="icon"
                      variant={
                        date &&
                        ((ampm === "AM" && date.getHours() < 12) ||
                          (ampm === "PM" && date.getHours() >= 12))
                          ? "default"
                          : "ghost"
                      }
                      className="sm:w-full shrink-0 aspect-square"
                      onClick={() => handleTimeChange("ampm", ampm)}
                    >
                      {ampm}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
          <div className="p-3 border-t flex justify-end">
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={handleClose}
            >
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
);

DateTimePicker.displayName = "DateTimePicker";