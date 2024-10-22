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
        <Section heading="Summary">
          <ul className={css({ listStyle: 'square outside', paddingLeft: '20px' })}>
            <li>千葉の東葛飾で、妻1人、子2人と暮らしている</li>
            <li>Webシステムを主にプログラマとして働いている</li>
            <li>植物を育てたり勉強したりしたいができていない</li>
            <li>タクティクスオウガというテレビゲームが好きで、対人戦をしたく、オリジナルボードゲームを制作している</li>
          </ul>
        </Section>
        <Section heading="Accounts">
          <dl className={css({ "& dd": { paddingLeft: '20px' }, "& dt": { textDecoration: 'underline' } })}>
            <dt><Link href="https://github.com/motojouya" text="Github" /></dt>
            <dd>ソースコード</dd>
            <dt><Link href="https://gist.github.com/motojouya" text="Gist" /></dt>
            <dd>Blogとして使ってます</dd>
            <dt><Link href="https://zenn.dev/motojouya" text="Zenn" /></dt>
            <dd>技術記事</dd>
            <dt><Link href="https://x.com/motojouya" text="Twitter X" /></dt>
            <dd>基本ROMですが見てるので反応はします</dd>
            <dt><Link href="https://croaker.motojouya.net" text="Croaker" /></dt>
            <dd>自分用のつぶやきスペース(低予算なのでアクセス時に重い)</dd>
          </dl>
        </Section>
        <Section heading="Job">
          <p>
            仕事については、<Link href="/job" text="仕事" />のページに詳しく記載します。<br />
            基本的にWebシステムを主に開発、運用するプログラマで、15年程度の経験です。<br />
          </p>
        </Section>
        <Section heading="Private">
          <p>
            私的なことも<Link href="/private" text="趣味" />のページに詳しく記載します。<br />
            遊びは色々しましたが、今したいのは植物を育てたり勉強したり、地域の公園のメンテとかです。
            でも子育ても仕事も忙しいので、時間がとれません。<br />
            またタクティクスオウガというテレビゲームが好きなのですが、対人戦をしたくて、
            <Link href="https://github.com/motojouya/kniw" text="kniw" />というオリジナルボードゲームを作っています。
            が、まだ見せれるレベルにはありません。<br />
          </p>
        </Section>
      </div>
    </main>
  );
};
