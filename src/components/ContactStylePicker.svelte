<script>
  import { tick } from 'svelte';
  import { ADDRESS, PHONE_E164, PHONE_DISPLAY, MAPS_URL, INSTAGRAM_URL, FACEBOOK_URL } from '../data/business';
  const options = [
    { value: 'centered', name: 'Clean & centered' },
    { value: 'address', name: 'Address first' },
    { value: 'map-first', name: 'Map first' },
    { value: 'directory', name: 'Dark directory' },
    { value: 'compact', name: 'Compact visit' },
  ];
  const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.7805099320608!2d-77.47802503034775!3d37.55218841147862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b113db68bc08b1%3A0x9ca083c0e9faa6c0!2sRichmond%20Barbershop!5e0!3m2!1sen!2sus!4v1766692323074!5m2!1sen!2sus';
  let variant = $state('centered');
  async function showContact() {
    await tick();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
</script>

<aside class="contact-picker" aria-label="Contact style preview">
  <div class="picker-choice">
    <label for="contact-style">Contact style</label>
    <select id="contact-style" bind:value={variant} onchange={showContact}>
      {#each options as option, index}
        <option value={option.value}>{index + 1} / 5 · {option.name}</option>
      {/each}
    </select>
  </div>
  <button type="button" onclick={showContact}>View</button>
</aside>

{#snippet address()}
  <address>{ADDRESS.streetAddress}<br />{ADDRESS.addressLocality}, {ADDRESS.addressRegion} {ADDRESS.postalCode}</address>
{/snippet}

{#snippet phone()}
  <a class="phone" href={`tel:${PHONE_E164}`} data-umami-event="phone-click">{PHONE_DISPLAY}</a>
{/snippet}

{#snippet details()}
  <div class="contact-details">
    <div class="contact-primary">
      {#if variant === 'address'}
        {@render address()}
        {@render phone()}
      {:else}
        {@render phone()}
        {@render address()}
      {/if}
    </div>
    <div class="contact-actions">
      <a class="directions" href={MAPS_URL} target="_blank" rel="noopener noreferrer" data-umami-event="directions-click">Get Directions
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
      </a>
      <div class="socials">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" data-umami-event="outbound-link-click" data-umami-event-url={INSTAGRAM_URL}>Instagram</a>
        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" data-umami-event="outbound-link-click" data-umami-event-url={FACEBOOK_URL}>Facebook</a>
      </div>
    </div>
  </div>
{/snippet}

{#snippet map()}
  <iframe title="Richmond Barbershop location in Carytown" src={mapSrc} width="100%" height="320" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
{/snippet}

<section id="contact" class="contact-style {variant}" aria-labelledby="contact-heading">
  <div class="contact-inner">
    <h2 id="contact-heading">Contact Us</h2>
    <div class="contact-content">
      {#if variant === 'map-first'}
        {@render map()}
        {@render details()}
      {:else if variant === 'compact'}
        {@render details()}
        <details class="map-disclosure">
          <summary>View map <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary>
          {@render map()}
        </details>
      {:else}
        {@render details()}
        {@render map()}
      {/if}
    </div>
  </div>
</section>

<style>
  .contact-style { --contact-ink: #18181b; --contact-muted: #52525b; --contact-rule: #d4d4d8; --contact-surface: #fff; padding: 48px 24px; color: var(--contact-ink); background: var(--contact-surface); scroll-margin-top: 88px; }
  .contact-inner { max-width: 1040px; margin-inline: auto; }
  h2 { width: 100%; margin: 0 0 32px; border-top: 2px solid var(--contact-ink); padding-top: 24px; font-family: 'Oswald', sans-serif; font-size: clamp(32px, 3.5vw, 44px); font-weight: 500; line-height: 1.15; letter-spacing: -.02em; text-align: left; }
  .contact-content { display: grid; grid-template-columns: 1fr 1.2fr; align-items: center; gap: 48px; }
  .contact-details { min-width: 0; }
  .contact-primary { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
  .phone { font-size: 30px; line-height: 1.25; display: inline-flex; align-items: center; min-height: 44px; }
  address { font-style: normal; font-size: 22px; line-height: 1.45; }
  a { color: inherit; text-decoration: none; text-underline-offset: 5px; }
  .phone:hover { text-decoration: underline; }
  .contact-actions { margin-top: 24px; }
  .directions { display: inline-flex; align-items: center; justify-content: space-between; gap: 32px; min-height: 48px; padding: 12px 20px; border: 1px solid var(--contact-ink); background: var(--contact-ink); color: var(--contact-surface); font-size: 18px; }
  svg { width: 22px; height: 22px; flex-shrink: 0; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .directions:hover { background: var(--contact-surface); color: var(--contact-ink); }
  .socials { display: flex; gap: 24px; margin-top: 12px; }
  .socials a { display: inline-flex; align-items: center; min-height: 44px; font-size: 16px; color: var(--contact-muted); text-decoration: underline; }
  .socials a:hover { color: var(--contact-ink); text-decoration-thickness: 2px; }
  iframe { display: block; width: 100%; border: 0; background: #f4f4f5; }
  .contact-style a:focus, summary:focus-visible { outline: 2px solid var(--contact-ink); outline-offset: 4px; }
  .contact-style ::selection { background: #facc15; color: #18181b; }

  .centered .contact-details { text-align: center; }
  .centered .contact-primary { align-items: center; }
  .centered .socials { justify-content: center; }

  .address address { font-size: clamp(26px, 3vw, 34px); line-height: 1.3; }
  .address .phone { font-size: 22px; color: var(--contact-muted); }
  .address .directions { background: transparent; color: var(--contact-ink); border-width: 0 0 1px; padding-inline: 0; }
  .address .directions:hover { border-bottom-width: 2px; }

  .map-first .contact-content { display: flex; flex-direction: column; align-items: stretch; gap: 24px; }
  .map-first iframe { height: 300px; }
  .map-first .contact-details { display: flex; justify-content: space-between; gap: 24px; }
  .map-first .contact-actions { margin: 0; }

  .directory { --contact-ink: #fafafa; --contact-muted: #d4d4d8; --contact-rule: #52525b; --contact-surface: #18181b; }
  .directory .phone { width: 100%; padding-bottom: 16px; border-bottom: 1px solid var(--contact-rule); color: #facc15; }
  .directory address { width: 100%; padding-bottom: 20px; border-bottom: 1px solid var(--contact-rule); }
  .directory .contact-actions { margin-top: 20px; }
  .directory .directions { background: #facc15; color: #18181b; border-color: #facc15; }
  .directory .directions:hover { background: #fde047; }

  .compact .contact-content { display: block; }
  .compact .contact-details { display: flex; align-items: flex-start; justify-content: space-between; gap: 32px; }
  .compact .contact-primary { gap: 12px; }
  .compact .contact-actions { margin-top: 0; }
  .compact .phone { font-size: 26px; }
  .compact address { font-size: 20px; }
  .map-disclosure { border-top: 1px solid var(--contact-rule); border-bottom: 1px solid var(--contact-rule); margin-top: 24px; }
  summary { display: flex; justify-content: space-between; align-items: center; min-height: 52px; cursor: pointer; list-style: none; font-size: 18px; }
  summary::-webkit-details-marker { display: none; }
  details[open] summary svg { transform: rotate(180deg); }
  details[open] iframe { margin-bottom: 16px; }

  .contact-picker { position: fixed; z-index: 1000; bottom: max(12px, env(safe-area-inset-bottom)); left: 50%; transform: translateX(-50%); display: flex; align-items: flex-end; gap: 10px; width: min(440px, calc(100% - 24px)); box-sizing: border-box; padding: 10px 12px; border-radius: 12px; background: #18181b; color: #fff; box-shadow: 0 6px 24px #0004; }
  .picker-choice { flex: 1; min-width: 0; display: grid; gap: 4px; }
  label { color: #e4e4e7; font-size: 12px; font-weight: 600; }
  select { width: 100%; min-width: 0; min-height: 44px; padding: 8px 10px; background: #fff; color: #18181b; border: 1px solid #71717a; border-radius: 6px; font: inherit; font-size: 16px; cursor: pointer; }
  button { min-height: 44px; padding: 8px 16px; border: 0; border-radius: 6px; background: #facc15; color: #18181b; font: inherit; cursor: pointer; }
  button:hover { background: #fde047; }
  button:focus, select:focus { outline: 2px solid #facc15; outline-offset: 3px; }
  :global(body:has(.contact-picker)) { padding-bottom: calc(110px + env(safe-area-inset-bottom)); }

  @media (max-width: 767px) {
    .contact-content { grid-template-columns: 1fr; gap: 28px; }
    iframe, .map-first iframe { height: 240px; }
    .map-first .contact-details { display: block; }
    .map-first .contact-primary { display: grid; grid-template-columns: 1fr 1fr; align-items: start; gap: 20px; }
    .map-first .phone { font-size: 24px; }
    .map-first address { font-size: 18px; }
    .map-first .contact-actions { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 20px; }
    .map-first .socials { margin: 0; }
    .compact .contact-details { display: block; }
    .compact .contact-actions { margin-top: 16px; display: flex; align-items: center; flex-wrap: wrap; gap: 8px 24px; }
    .compact .socials { margin: 0; }
  }
  @media (max-width: 640px) {
    .contact-style { padding: 32px 24px; }
    h2 { margin-bottom: 24px; }
  }
</style>
