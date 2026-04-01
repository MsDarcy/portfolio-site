type Props = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
};

export function CaseStudyFigure({ src, alt, caption, className }: Props) {
  return (
    <figure className={["case-study-figure", className].filter(Boolean).join(" ")}>
      <div className="case-study-figure__frame">
        {/* eslint-disable-next-line @next/next/no-img-element -- responsive SVGs from /public */}
        <img src={src} alt={alt} className="case-study-figure__img" loading="lazy" />
      </div>
      <figcaption className="case-study-figure__caption">{caption}</figcaption>
    </figure>
  );
}
