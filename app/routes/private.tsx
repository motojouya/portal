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
            このページでは趣味や私的なことについて記載します。雑談のきっかけになればという感じです。
          </p>
        </Section>
        <Section heading="Interest">
          <dl className={css({ "& dd": { paddingLeft: '20px' } })}>
            <dt>食べ物</dt>
            <dd>セロリ以外は食べれます。お酒はほとんど飲みません。味噌を作ってみたいです。</dd>
            <dt>音楽</dt>
            <dd>十代のころはUKロックは好きで良く聞いてました。最近はYouTubeで列車の車窓動画をBGMに流してます。</dd>
            <dt>漫画、小説</dt>
            <dd>One Pieceが好きで今でも集めてます。村上春樹ファンというほどではないですが、ねじまき鳥クロニクルは好きです。ハリーポッターとロードオブザリングはすべて読んでます。</dd>
            <dt>PC</dt>
            <dd>仕事の道具ですが、趣味のマシンは分けていて、サーバを借りてUbuntuで開発してます。大画面よりもポータブルなLaptopが好きで、キーボードはサンワサプライのUS配列をつけてます。Vimが好きです。</dd>
            <dt>水のスポーツ</dt>
            <dd>高校時代は水球、大学のときはライフセービングやスキューバ、最近は子どものスイミングの時間に泳いでいます。</dd>
            <dt>ポケモン</dt>
            <dd>剣盾時代は毎日対戦してましたが、SVは育成が辛くて休んでます。有名プレイヤーの動画はよく見てます。</dd>
            <dt>バックパッキング</dt>
            <dd>長く放浪してました。行ってないところに興味がありますが、インドに行きたいです。地図を眺めるのも好きです。</dd>
            <dt>植物</dt>
            <dd>植物を育てたり、勉強したり、地域のボランティアをするのが、最もやりたいことです。でも時間がない。</dd>
          </dl>
        </Section>
        <Section heading="Tactics Ogre">
          <p>
            タクティクスオウガという一人用テレビゲームが好きなのですが、そのゲームシステムで対人戦をしたくて、
            <Link href="https://github.com/motojouya/kniw" text="kniw" />というオリジナルボードゲームを作っています。<br />
            いろいろとやりたいことは他にもたくさんあるのですが、その中でも最も頑張ってみたいことです。
            現在は、大枠でのアプリケーションはできていますが、ゲームバランス調整、コンポーネントの作成、UIの改善などやることがたくさんあります。<br />
            でもいつか、誰かと自分の作ったボードゲームで遊べるといいなと思っています。
          </p>
        </Section>
        <div>
          <Link href='/' text='To Top' />
        </div>
      </div>
    </main>
  );
};
