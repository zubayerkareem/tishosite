import { getAllContacts } from "@/lib/contacts";
import { markContactRead } from "@/app/actions/contact";
import { Mail } from "lucide-react";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default async function AdminContactsPage() {
  const contacts = await getAllContacts();
  const unread = contacts.filter((c) => !c.read).length;

  return (
    <>
      <header className="border-b border-border bg-background-elevated px-6 py-4">
        <h1 className="text-lg font-medium text-foreground">Contact Requests</h1>
        <p className="text-xs text-foreground-muted mt-0.5">
          {contacts.length} total &middot; {unread} unread
        </p>
      </header>

      <main className="px-6 py-8">
        {contacts.length === 0 ? (
          <div className="text-center py-24">
            <Mail size={32} className="text-foreground-subtle mx-auto mb-4" />
            <p className="text-foreground-muted text-sm">No contact requests yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {contacts.map((c) => {
              async function handleToggleRead() {
                "use server";
                await markContactRead(c.id, c.read);
              }

              return (
                <div
                  key={c.id}
                  className={`rounded-2xl border p-5 transition-colors ${
                    c.read ? "border-border bg-background-elevated/50" : "border-accent/30 bg-background-elevated"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-start gap-3">
                      {!c.read && (
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.name}</p>
                        <a
                          href={`mailto:${c.email}`}
                          className="text-xs text-accent hover:underline"
                        >
                          {c.email}
                        </a>
                        {c.investment_range && (
                          <span className="ml-3 text-xs text-foreground-subtle bg-background-subtle px-2 py-0.5 rounded-full">
                            {c.investment_range}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-foreground-subtle">{formatDate(c.created_at)}</span>
                      <form action={handleToggleRead}>
                        <button
                          type="submit"
                          className="text-xs text-foreground-subtle hover:text-foreground transition-colors px-2.5 py-1 rounded-lg border border-border hover:border-border-strong"
                        >
                          {c.read ? "Mark unread" : "Mark read"}
                        </button>
                      </form>
                    </div>
                  </div>

                  {c.message && (
                    <p className="mt-3 text-sm text-foreground-muted leading-relaxed border-t border-border pt-3 ml-5">
                      {c.message}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
