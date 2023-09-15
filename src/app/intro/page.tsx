import IntroCard from './IntroCard';
import SnsCard from '../contact/SnsCard';
import AwardList from './AwardList';
import IntroText from './IntroText';

export default function IntroPage() {
  return (
    <main>
      <div className="pt-4"></div>
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-span-6">
          <IntroCard></IntroCard>
        </div>
        <div className="md:col-span-6">
          <IntroText></IntroText>
        </div>
        <div className="md:col-span-12">
          <AwardList></AwardList>
        </div>
        <div className="md:col-span-6">
          <SnsCard></SnsCard>
        </div>
      </div>
    </main>
  );
}
