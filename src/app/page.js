import Quiz from '@/components/Quiz/Quiz';

import questions from '../../public/helpers/questions.json';

export default function Home() {
  return (
    <main>
      <Quiz questions={questions} />
    </main>
  );
}
