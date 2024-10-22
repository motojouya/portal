import { css } from "@styled-system/css";
import { flex, circle } from "@styled-system/patterns";
import { Link, Header, Section } from '~/components/parts';

export default function Index() {
  return (
    <main className={flex({ justify: 'center', w: '100%', p: '20px' })}>
      <div className={flex({ direction: 'column', w: '100%', maxW: '1080px', gap: '30px'})}>
        <Header />
        <Section heading="Job">
          <p>
            このページではキャリア、スキル、指向性などについて記載していきます。<br />
            基本的にWebシステムを主に開発、運用するプログラマで、15年程度の経験です。<br />
          </p>
        </Section>
        <div>
          <Link href='/' text='To Top' />
        </div>
      </div>
    </main>
  );
};
