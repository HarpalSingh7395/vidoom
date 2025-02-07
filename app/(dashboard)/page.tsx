import Image from "next/image";


export default function Dashboard() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-4xl font-bold">Dashboard</h2>
      <div className="relative w-full overflow-hidden rounded-lg h-64">
        <Image  src={"/dashboard.avif"} alt="dashboard-image" fill style={{objectFit: "cover"}} />
          
      </div>
    </div>
  )
}
