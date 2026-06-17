import { Eyebrow } from "@/components/shared/Eyebrow";
import { getPublishedPosts } from "@/lib/blog";
import { BlogGrid } from "./BlogGrid";

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 20% 0%, rgba(195,246,60,0.06), transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">Insights</Eyebrow>
            <h1 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-foreground mb-4 sm:mb-5">
              Insights on structured investing.
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Policy deep dives, market context, and platform updates from the
              Tishoenterprises team.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
