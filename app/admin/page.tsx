import { getAllPostsAdmin } from "@/lib/blog";
import { getAllContacts } from "@/lib/contacts";
import { getAllSubscribers } from "@/lib/newsletter";
import { AdminPanel } from "./AdminPanel";

export default async function AdminPage() {
  const [posts, contacts, subscribers] = await Promise.all([
    getAllPostsAdmin(),
    getAllContacts(),
    getAllSubscribers(),
  ]);

  const unreadContacts = contacts.filter((c) => !c.read).length;

  return (
    <AdminPanel
      posts={posts}
      contacts={contacts}
      subscribers={subscribers}
      unreadContacts={unreadContacts}
    />
  );
}
