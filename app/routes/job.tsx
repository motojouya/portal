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
        <Section heading="rest contents">
          <ul className={css({ listStyle: 'square outside', paddingLeft: '20px' })}>
            <li>skill 技術要素ごと</li>
            <li>性格 考え方 実績がないと説明できないことは省く</li>
            <li>ソフトスキル。リーダとかsreとか、巻き込むメンバー状況</li>
            <li>プログラミングの考え。好き嫌い。今後やりたいこと</li>
          </ul>
        </Section>
        <div>
          <Link href='/' text='To Top' />
        </div>
      </div>
    </main>
  );
};
