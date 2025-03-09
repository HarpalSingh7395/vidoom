import MeetingTypeList from "@/components/MeetingTypeList";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";


export default function Dashboard() {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const date = (new Intl.DateTimeFormat('en-US', {
    dateStyle: "full"
  })).format(now);
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-4xl font-bold">Dashboard</h2>
      <div className="relative w-full overflow-hidden rounded-xl h-64 bg-card p-6 flex flex-col justify-between">
        {/* <Image  src={"/dashboard.avif"} alt="dashboard-image" fill style={{objectFit: "cover"}} /> */}
        <div>
          <Badge>Upcoming Meeting: Feb 7, 2024 at 10:00 AM</Badge>
        </div>
        <div>
          <p className="text-5xl font-bold">{time}</p>
          <p className="text-muted-foreground">{date}</p>
        </div>
      </div>
      <MeetingTypeList />
    </div>
  )
}
