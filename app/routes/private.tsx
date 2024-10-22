import type { MetaFunction } from "@remix-run/node";
import { css } from "@styled-system/css";
import { flex, circle } from "@styled-system/patterns";
import { Link, Header, Section } from '~/components/parts';

export const meta: MetaFunction = () => {
  return [
    { title: "Takuya Sugiyama Portal" },
    { name: "description", content: "Takuya Sugiyama Portal" },
  ];
};

export default function Index() {
  return (
    <main className={flex({ justify: 'center', w: '100%', p: '20px' })}>
      <div className={flex({ direction: 'column', w: '100%', maxW: '1080px', gap: '30px'})}>
        <Header />
        <Section heading="Private">
          <p>
            このページでは趣味や私的なことについて記載します。<br />
            あんまり自分のことを大っぴらにするのは、顕示欲みたいで好きではないですが、
            人と話すのが苦手なので、雑談のきっかけになるようなことは記載しておこうという意図です。<br />
            遊びは色々しましたが、今したいのは植物を育てたり勉強したり、地域の公園のメンテとかです。
            でも子育ても仕事も忙しいので、時間がとれません。<br />
            またタクティクスオウガというテレビゲームが好きなのですが、対人戦をしたくて、
            <Link href="https://github.com/motojouya/kniw" text="kniw" />というオリジナルボードゲームを作っています。
            が、まだ見せれるレベルにはありません。<br />
          </p>
        </Section>
        <div>
          <Link href='/' text='To Top' />
        </div>
      </div>
    </main>
  );
};
