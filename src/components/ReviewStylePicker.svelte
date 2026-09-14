<script>
  import TestimonialOption from './TestimonialOption.svelte';
  let { embedded = false } = $props();
  const options = [
    { value: 'spotlight', name: 'Yellow spotlight' },
    { value: 'editorial', name: 'Editorial split' },
    { value: 'night', name: 'After hours' },
    { value: 'frame', name: 'Framed note' },
    { value: 'minimal', name: 'Minimal strip' },
  ];
  let variant = $state('spotlight');
  function showReviews() {
    document.getElementById('testimonials-section')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
</script>

{#if embedded}
  <aside class="floating-picker" aria-label="Testimonial style preview">
    <div class="floating-choice">
      <label for="floating-review-style">Review style</label>
      <select id="floating-review-style" bind:value={variant} onchange={showReviews}>
        {#each options as option, index}
          <option value={option.value}>{index + 1} / 5 · {option.name}</option>
        {/each}
      </select>
    </div>
    <button type="button" onclick={showReviews}>View</button>
  </aside>
{:else}
<header class="picker">
  <div>
    <h1>Five compact review styles.</h1>
    <p>One review at a time. Choose a style, then use the arrows to read each review.</p>
  </div>
  <div class="choice">
    <label for="review-style">Preview style</label>
    <select id="review-style" bind:value={variant}>
      {#each options as option, index}
        <option value={option.value}>{index + 1}. {option.name}</option>
      {/each}
    </select>
    <a href="/#testimonials-section">Try the floating switcher on the homepage</a>
  </div>
</header>
{/if}
<TestimonialOption {variant} />

<style>
  .picker { max-width: 1168px; margin: auto; padding: 32px 24px; display: flex; justify-content: space-between; align-items: center; gap: 24px; }
  h1 { font-family: 'Oswald', sans-serif; font-size: clamp(26px, 3vw, 36px); line-height: 1.2; margin: 0 0 10px; }
  p { color: #52525b; line-height: 1.5; margin: 0; max-width: 52ch; }
  .choice { display: grid; gap: 8px; min-width: 245px; }
  label { font-weight: 600; font-size: 14px; }
  select { width: 100%; min-height: 44px; padding: 8px 12px; background: #fff; color: #18181b; border: 1px solid #71717a; border-radius: 6px; font: inherit; cursor: pointer; }
  a { color: #52525b; font-size: 14px; text-underline-offset: 4px; text-decoration: underline; padding-block: 4px; }
  a:hover { color: #18181b; }
  select:focus-visible, a:focus-visible { outline: 2px solid #18181b; outline-offset: 4px; }
  ::selection { background: #facc15; color: #18181b; }
  .floating-picker { position: fixed; z-index: 1000; bottom: max(12px, env(safe-area-inset-bottom)); left: 50%; transform: translateX(-50%); display: flex; align-items: flex-end; gap: 10px; width: min(440px, calc(100% - 24px)); box-sizing: border-box; padding: 10px 12px; border-radius: 12px; background: #18181b; color: #fff; box-shadow: 0 6px 24px #0004; }
  .floating-choice { flex: 1; min-width: 0; display: grid; gap: 4px; }
  .floating-choice label { color: #e4e4e7; font-size: 12px; }
  .floating-choice select { min-width: 0; font-size: 16px; }
  .floating-picker button { min-height: 44px; padding: 8px 16px; border: 0; border-radius: 6px; background: #facc15; color: #18181b; font: inherit; cursor: pointer; }
  .floating-picker button:hover { background: #fde047; }
  .floating-picker button:focus-visible, .floating-picker select:focus-visible { outline: 2px solid #facc15; outline-offset: 3px; }
  :global(body:has(.floating-picker)) { padding-bottom: calc(110px + env(safe-area-inset-bottom)); }
  @media (max-width: 640px) { .picker { display: block; padding-block: 24px; } .choice { margin-top: 20px; } }
</style>
