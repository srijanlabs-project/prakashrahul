export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // The site's default page background is light; every admin screen is dark.
  return <div className="min-h-screen bg-black font-sans text-white">{children}</div>;
}
