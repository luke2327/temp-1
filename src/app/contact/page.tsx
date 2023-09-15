import Contact from './Contact';
import SnsCard from './SnsCard';

export default function SupportPage() {
  return (
    <main className="bg-gray-100">
      <div className="md:grid md:grid-cols-12 md:items-end w-full max-w-[78rem]">
        <div className="md:hidden lg:block lg:col-span-1"></div>
        <div className="md:col-span-6 lg:col-span-5">
          <Contact></Contact>
        </div>
        <div className="md:col-span-6 lg:col-span-5">
          <SnsCard></SnsCard>
        </div>
        <div className="md:hidden lg:block lg:col-span-1"></div>
      </div>
    </main>
  );
}
