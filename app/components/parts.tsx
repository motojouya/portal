import { css } from "@styled-system/css";
import { flex, circle } from "@styled-system/patterns";

export const Header = () => (
  <header className={flex({ direction: 'row', justify: 'space-between', alignItems: 'center', gap: '10px' })}>
    <img
      src="/icon.JPG"
      alt="Takuya Sugiyama Image"
      className={circle({ size: '144px', bg: 'black' })}
    />
    <h1 className={css({ flexGrow: '100'})}>Takuya Sugiyama 杉山 拓也</h1>
  </header>
);

export const Section = ({ heading, children }) => (
  <section className={flex({ direction: 'column', gap: '10px' })}>
    <h2 className={css({ borderBottom: '1px solid' })}>{heading}</h2>
    <div className={css({ fontSize: '0.8em' })}>
      {children}
    </div>
  </section>
);

export const Link = ({ href, text }) => (
  <a href={href} className={css({ textDecoration: 'underline' })} >{text}</a>
);
