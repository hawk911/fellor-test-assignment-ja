import HiringInsightsChart from "@/components/hiring-insights-chart";

export default function HomePage() {
  return (
    <section id="main" className="flex-1">
      <div className="h-screen w-screen flex justify-center items-center">
        <HiringInsightsChart />
      </div>
    </section>
  );
}
