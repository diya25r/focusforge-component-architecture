import StatCard from "../shared/StatCard";

export default function StatsRow({ totalCount, completedCount, remaining, progressPercent }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
      <StatCard label="Total Tasks" value={totalCount} subtitle="All time" />
      <StatCard label="Completed" value={completedCount} subtitle="Done ✓" valueColor="#22c55e" />
      <StatCard label="Remaining" value={remaining} subtitle="To do" valueColor="#f59e0b" />
      <StatCard label="Progress" value={`${progressPercent}%`} subtitle="" valueColor="#6366f1" hasProgress={true} progressPercent={progressPercent} />
    </div>
  );
}