import { schedule } from "@/data/gym";

const days = ["mon", "tue", "wed", "thu", "fri", "sat"] as const;

export function Schedule() {
  return (
    <section id="timetable" className="scroll-mt-16 border-y border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-kicker">04 — Timetable</p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
          Weekly <span className="text-primary">Class Grid</span>
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Book any class up to 7 days ahead from the member app. Open Floor hours run all day.
        </p>

        <div className="mt-12 overflow-x-auto border border-border bg-card shadow-card">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-primary"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.time} className="border-b border-border transition-colors last:border-0 hover:bg-muted/50">
                  <td className="px-4 py-4 font-semibold text-foreground">{row.time}</td>
                  {days.map((day) => (
                    <td key={day} className="px-4 py-4 text-muted-foreground">
                      {row[day]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
