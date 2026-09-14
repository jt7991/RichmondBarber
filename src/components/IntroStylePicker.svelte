<script>
  import { tick } from 'svelte';
  import { BUSINESS_DESCRIPTION } from '../data/business';

  const options = [
    { value: 'editorial', name: 'Editorial lead' },
    { value: 'centered', name: 'Quiet center' },
    { value: 'highlight', name: 'Richmond in yellow' },
    { value: 'ruled', name: 'The short introduction' },
    { value: 'ink', name: 'Ink band' },
  ];
  let variant = $state('editorial');

  async function showIntro() {
    await tick();
    document.getElementById('best-barbershop')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
</script>

<aside class="intro-picker" aria-label="Introduction style preview">
  <div class="picker-choice">
    <label for="intro-style">Intro style</label>
    <select id="intro-style" bind:value={variant} onchange={showIntro}>
      {#each options as option, index}
        <option value={option.value}>{index + 1} / 5 · {option.name}</option>
      {/each}
    </select>
  </div>
  <button type="button" onclick={showIntro}>View</button>
</aside>

<section
  id="best-barbershop"
  class="intro {variant}"
  data-ai-section="best-barbershop-in-richmond"
  data-ai-type="best-barbershop-in-richmond"
  aria-labelledby="intro-heading"
>
  <div class="intro-inner">
    <h1 id="intro-heading">Looking for the best barbershop in <span class="location">Richmond Virginia?</span></h1>
    <p>{BUSINESS_DESCRIPTION} Visit us at 2820 W Cary St, Suite C, and explore our work below.</p>
  </div>
</section>

<style>
  .intro { --intro-ink: #18181b; --intro-muted: #52525b; padding: 56px 24px 32px; background: #fff; color: var(--intro-ink); scroll-margin-top: 88px; }
  .intro-inner { max-width: 1040px; margin-inline: auto; }
  h1 { max-width: 28ch; margin: 0 0 24px; font-family: 'Oswald', sans-serif; font-size: clamp(36px, 4.5vw, 56px); font-weight: 500; line-height: 1.12; letter-spacing: -.025em; text-wrap: balance; }
  p { max-width: 66ch; margin: 0; color: var(--intro-muted); font-size: 19px; line-height: 1.65; text-wrap: pretty; }

  .editorial h1 { max-width: 25ch; }
  .editorial p { max-width: 60ch; }

  .centered { padding-block: 48px 32px; text-align: center; }
  .centered h1 { max-width: 28ch; margin-inline: auto; font-size: clamp(30px, 3.5vw, 44px); line-height: 1.2; }
  .centered p { max-width: 56ch; margin-inline: auto; font-size: 18px; }

  .highlight h1 { max-width: 30ch; font-size: clamp(28px, 3.2vw, 40px); line-height: 1.25; }
  .highlight .location { display: table; margin-top: 12px; padding: 2px 8px 6px; background: #facc15; font-size: clamp(38px, 4.8vw, 60px); line-height: 1.1; letter-spacing: -.025em; }
  .highlight p { max-width: 60ch; }

  .ruled { padding-block: 40px 24px; }
  .ruled .intro-inner { display: grid; grid-template-columns: 1fr 1.25fr; gap: 40px; align-items: start; }
  .ruled h1 { max-width: none; font-size: clamp(26px, 3vw, 36px); line-height: 1.25; margin: 0; }
  .ruled p { border-left: 1px solid #a1a1aa; padding-left: 32px; font-size: 18px; }

  .ink { --intro-ink: #fafafa; --intro-muted: #d4d4d8; background: #18181b; padding-block: 48px; }
  .ink h1 { max-width: 27ch; font-size: clamp(34px, 4vw, 50px); }
  .ink .location { color: #facc15; }

  .intro ::selection { background: #facc15; color: #18181b; }
  .highlight .location::selection { background: #18181b; color: #facc15; }
  .intro-picker { position: fixed; z-index: 1000; bottom: max(12px, env(safe-area-inset-bottom)); left: 50%; transform: translateX(-50%); display: flex; align-items: flex-end; gap: 10px; width: min(440px, calc(100% - 24px)); box-sizing: border-box; padding: 10px 12px; border-radius: 12px; background: #18181b; color: #fff; box-shadow: 0 6px 24px #0004; }
  .picker-choice { flex: 1; min-width: 0; display: grid; gap: 4px; }
  label { color: #e4e4e7; font-size: 12px; font-weight: 600; }
  select { width: 100%; min-width: 0; min-height: 44px; padding: 8px 10px; background: #fff; color: #18181b; border: 1px solid #71717a; border-radius: 6px; font: inherit; font-size: 16px; cursor: pointer; }
  button { min-height: 44px; padding: 8px 16px; border: 0; border-radius: 6px; background: #facc15; color: #18181b; font: inherit; cursor: pointer; }
  button:hover { background: #fde047; }
  button:focus, select:focus { outline: 2px solid #facc15; outline-offset: 3px; }
  :global(body:has(.intro-picker)) { padding-bottom: calc(110px + env(safe-area-inset-bottom)); }

  @media (max-width: 640px) {
    .intro { padding: 40px 24px 24px; }
    h1 { margin-bottom: 20px; }
    p { font-size: 18px; line-height: 1.6; }
    .centered { padding-block: 32px 24px; }
    .centered h1 { max-width: 25ch; margin-bottom: 16px; }
    .centered p { font-size: 17px; }
    .ruled { padding-block: 32px 24px; }
    .ruled .intro-inner { display: block; }
    .ruled h1 { padding-bottom: 16px; border-bottom: 1px solid #a1a1aa; margin-bottom: 16px; }
    .ruled p { border: 0; padding: 0; font-size: 17px; }
    .ink { padding-block: 36px; }
  }
</style>
