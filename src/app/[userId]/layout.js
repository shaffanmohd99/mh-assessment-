import Headers from "@/components/reusable/Header";

export default function UserLayout({ children }) {
  return (
    <section>
      <div>
        <Headers />
      </div>
      {children}
    </section>
  );
}
