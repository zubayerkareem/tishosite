import { getAllSubscribers } from "@/lib/newsletter";
import { Users } from "lucide-react";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default async function AdminNewsletterPage() {
  const subscribers = await getAllSubscribers();
  const active = subscribers.filter((s) => s.active).length;

  return (
    <>
      <header className="border-b border-border bg-background-elevated px-6 py-4">
        <h1 className="text-lg font-medium text-foreground">Newsletter</h1>
        <p className="text-xs text-foreground-muted mt-0.5">
          {active} active subscribers &middot; {subscribers.length} total
        </p>
      </header>

      <main className="px-6 py-8">
        {subscribers.length === 0 ? (
          <div className="text-center py-24">
            <Users size={32} className="text-foreground-subtle mx-auto mb-4" />
            <p className="text-foreground-muted text-sm">No subscribers yet.</p>
          </div>
        ) : (
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background-subtle">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium">Email</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium hidden sm:table-cell">Signed up</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.12em] text-foreground-subtle font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {subscribers.map((s) => (
                  <tr key={s.id} className="hover:bg-background-subtle/50 transition-colors">
                    <td className="px-5 py-3.5 text-foreground">{s.email}</td>
                    <td className="px-5 py-3.5 text-foreground-muted hidden sm:table-cell">{formatDate(s.created_at)}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        s.active
                          ? "bg-accent/15 text-accent"
                          : "bg-border text-foreground-muted"
                      }`}>
                        {s.active ? "Active" : "Unsubscribed"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
