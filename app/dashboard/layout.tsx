import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const layout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
  <div className="grid grid-cols-1 grid-rows-[50px_25px_1fr] gap-y-2">
    <Header />
    <Breadcrumbs />
    <Sidebar />
    <main>
      {children}
    </main>
  </div>
  )
}

export default layout;