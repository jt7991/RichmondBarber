<script>
  import { testimonials } from '../data/testimonials';
  let { variant = 'spotlight' } = $props();
  let currentIndex = $state(0);
  const review = $derived(testimonials[currentIndex]);
  function move(direction) {
    currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
  }
</script>

<section id="testimonials-section" class="reviews {variant}" aria-labelledby="reviews-heading" aria-roledescription="carousel">
  <div class="review-inner">
    <h2 id="reviews-heading">What Our Clients Say</h2>
    <div class="review-body">
      <div class="review-content" aria-live="polite" aria-atomic="true">
        <figure>
          <div class="stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
            {#each Array(review.rating) as _}
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10 1.5 2.6 5.3 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L1.5 7.6l5.9-.8Z" /></svg>
            {/each}
          </div>
          <blockquote>&ldquo;{review.text}&rdquo;</blockquote>
          <figcaption>
            <cite>{review.name}</cite>
            <time datetime={review.date}>{review.dateLabel}</time>
            <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read ${review.name}'s reviews on Google (opens in a new tab)`}>Google review excerpt</a>
          </figcaption>
        </figure>
        <span class="sr-only">Review {currentIndex + 1} of {testimonials.length}</span>
      </div>
      <div class="controls" aria-label="Review navigation">
        <button type="button" onclick={() => move(-1)} aria-label="Previous review">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12" /></svg>
        </button>
        <span class="count" aria-hidden="true">{currentIndex + 1} <span>of</span> {testimonials.length}</span>
        <button type="button" onclick={() => move(1)} aria-label="Next review">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6M16 12H4" /></svg>
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .reviews { --surface: #fff; --ink: #18181b; --muted: #52525b; --rule: #a1a1aa; --star: #8b6500; background: var(--surface); color: var(--ink); padding: 48px 24px; }
  .review-inner { max-width: 1040px; margin-inline: auto; }
  .reviews { scroll-margin-top: 80px; }
  h2 { font-family: 'Oswald', sans-serif; font-size: clamp(32px, 4vw, 48px); font-weight: 500; line-height: 1.12; letter-spacing: -.025em; text-wrap: balance; margin: 0 0 28px; }
  .review-body { min-width: 0; }
  figure { margin: 0; }
  .stars { display: flex; gap: 4px; margin-bottom: 16px; color: var(--star); }
  .stars svg { width: 17px; height: 17px; fill: currentColor; }
  blockquote { margin: 0 0 20px; font-size: clamp(22px, 2.7vw, 30px); line-height: 1.45; min-height: 4.35em; text-wrap: pretty; }
  figcaption { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px 14px; font-size: 14px; color: var(--muted); }
  cite { font-style: normal; font-size: 17px; font-weight: 700; color: var(--ink); }
  a { color: inherit; text-decoration: underline; text-underline-offset: 4px; padding-block: 4px; }
  a:hover { color: var(--ink); text-decoration-thickness: 2px; }
  .controls { display: flex; align-items: center; gap: 16px; margin-top: 24px; }
  button { width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid var(--rule); border-radius: 50%; background: transparent; color: var(--ink); cursor: pointer; }
  button svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
  button:hover { background: var(--ink); color: var(--surface); border-color: var(--ink); }
  button:active { transform: translateY(1px); }
  button:focus-visible, a:focus-visible { outline: 2px solid var(--ink); outline-offset: 4px; }
  .count { font-size: 14px; font-variant-numeric: tabular-nums; min-width: 42px; text-align: center; }
  .count span { color: var(--muted); padding-inline: 3px; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  ::selection { background: #facc15; color: #18181b; }

  .spotlight { --surface: #facc15; --muted: #3f3305; --rule: #8b720b; --star: #18181b; }
  .spotlight .review-inner, .editorial .review-inner { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; }
  .spotlight h2, .editorial h2 { max-width: 250px; }
  .spotlight ::selection { background: #18181b; color: #facc15; }

  .editorial .review-inner { border-top: 2px solid var(--ink); padding-top: 28px; }
  .editorial .review-body { border-left: 1px solid var(--rule); padding-left: 40px; }
  .editorial blockquote { font-size: clamp(22px, 2.4vw, 28px); }
  .editorial button { border-radius: 0; }

  .night { --surface: #18181b; --ink: #fafafa; --muted: #d4d4d8; --rule: #71717a; --star: #facc15; }
  .night .review-inner { max-width: 780px; text-align: center; }
  .night .stars, .night figcaption, .night .controls { justify-content: center; }
  .night cite { color: #facc15; }
  .night h2 { font-size: 32px; }

  .frame { --surface: #f4f4f5; }
  .frame .review-inner { max-width: 820px; background: #fff; padding: 28px 36px; border: 1px solid #a1a1aa; border-radius: 12px; }
  .frame h2 { font-size: 30px; padding-bottom: 20px; border-bottom: 1px solid #d4d4d8; }
  .frame blockquote { font-size: 24px; }
  .frame .controls { justify-content: flex-end; margin-top: 16px; }
  .frame button { border-radius: 6px; }

  .minimal { padding-block: 36px; }
  .minimal .review-inner { max-width: 880px; }
  .minimal h2 { font-size: 28px; margin-bottom: 20px; }
  .minimal .stars { margin-bottom: 12px; }
  .minimal blockquote { font-size: 22px; min-height: 2.9em; margin-bottom: 16px; }
  .minimal .review-body { position: relative; padding-bottom: 16px; border-bottom: 1px solid var(--rule); }
  .minimal figcaption { padding-right: 180px; }
  .minimal .controls { position: absolute; right: 0; bottom: 16px; margin: 0; gap: 10px; }
  .minimal button { border: none; }

  @media (max-width: 640px) {
    .reviews { padding: 32px 24px; }
    .spotlight .review-inner, .editorial .review-inner { display: block; }
    .spotlight h2, .editorial h2 { max-width: none; }
    h2 { margin-bottom: 24px; }
    .editorial .review-body { border-left: 0; padding-left: 0; }
    blockquote { min-height: 5.8em; }
    .frame { padding: 24px 16px; }
    .frame .review-inner { padding: 24px; }
    .frame blockquote { font-size: 22px; min-height: 7.25em; }
    .minimal blockquote { min-height: 5.8em; }
    .minimal figcaption { padding-right: 0; }
    .minimal .controls { position: static; justify-content: flex-start; margin-top: 16px; }
  }
  @media (max-width: 360px) {
    .frame blockquote { min-height: 8.7em; }
  }
</style>
