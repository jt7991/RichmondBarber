<script>
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly} from 'svelte/transition';

	const testimonials = [
		{
			id: 1,
			name: "Gage W.",
			rating: 5,
			text: "Joe has been extremely generous with his time and his attention to detail when cutting my hair is second to none. He’s always open to feedback and he’s super easy to schedule with. I moved to Richmond a year ago and have been in search for a consistent barber for a while, and I’ve finally found one. Couldn’t recommend this shop enough."
		},
		{
			id: 2,
			name: "Daryl M.",
			rating: 5,
			text: "Joe did an amazing job—friendly, professional, and clearly takes pride in his work. The shop was spotless, and he took the time to make sure my haircut was absolutely perfect."
		},
		{
			id: 3,
			name: "Aidan R.",
			rating: 5,
			text: "This shop just opened and is exactly what I've been looking for in a barber. Joe is very chill and knows his stuff, definitely recommend!"
		},
		{
			id: 4,
			name: "Jonathan F.",
			rating: 5,
			text: "Awesome shop. Joe was friendly, easy to talk to, took great skill and care with my hair and beard. Fantastic experience, will definitely return."
		},
		{
			id: 5,
			name: "Eric R.",
			rating: 5,
			text: "Walked past and decided to get my haircut here, phenomenal service and the owner is a really stand up guy. Highly recommend for an all around great cut, I normally don’t leave reviews but I think this might be the best haircut I’ve gotten in Richmond so far!"
		}
	];

	let currentIndex = 0;
	let interval;
	let isPaused = false;

	function goToTestimonial(index) {
		currentIndex = index;
		resetTimer();
	}

	function nextTestimonial() {
		currentIndex = (currentIndex + 1) % testimonials.length;
	}

	function prevTestimonial() {
		currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
	}

	function resetTimer() {
		if (interval) clearInterval(interval);
		if (!isPaused) {
			interval = setInterval(nextTestimonial, 6000);
		}
	}

	function handleMouseEnter() {
		isPaused = true;
		if (interval) clearInterval(interval);
	}

	function handleMouseLeave() {
		isPaused = false;
		resetTimer();
	}

	onMount(() => {
	  interval = setInterval(nextTestimonial, 6000);
	});

	$: currentTestimonial = testimonials[currentIndex];
</script>

<section 
	id="testimonials-section"
	class="px-4 text-center bg-white dark:bg-zinc-900 py-24 opacity-100 translate-y-8 transition-all duration-700 ease-out"
>
	<div class="max-w-4xl mx-auto">
	<h2 class="text-4xl md:text-4xl font-bold mb-8 md:mb-16 text-black dark:text-white">
		What Our Clients Say
	</h2>
		
		<div class="flex flex-col">
		<div class="flex flex-row items-center justify-center">
			<button
				type="button"
				class="bg-white dark:bg-zinc-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors duration-300 w-fit h-fit hidden md:block"
				aria-label="Previous testimonial"
				on:click={prevTestimonial}
			>
				<svg class="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
				</svg>
			</button>
			<div 
				class="bg-gray-50 dark:bg-zinc-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-zinc-700"
				role="region"
				aria-label="Testimonial carousel"
				aria-live="polite"
	      on:mouseenter={handleMouseEnter}
	      on:mouseleave={handleMouseLeave}
			>
			  {#key currentTestimonial.id}
					<div 
						in:fade={{ duration: 1000 }}
						class="space-y-6"
					>
						<!-- Star rating -->
						<div class="flex justify-center mb-4">
							{#each Array(5) as _, i}
								<svg 
									class="w-6 h-6 {i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}" 
									fill="currentColor" 
									viewBox="0 0 20 20"
									aria-hidden="true"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
								</svg>
							{/each}
						</div>
						
						<!-- Testimonial text -->
						<blockquote class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
							"{currentTestimonial.text}"
						</blockquote>
						
						<!-- Customer name -->
						<cite class="block text-xl font-bold text-black dark:text-white not-italic">
							{currentTestimonial.name}
						</cite>
					</div>
					{/key}
			</div>
				
			<button
				type="button"
				class="bg-white dark:bg-zinc-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors duration-300 w-fit h-fit hidden md:block"
				aria-label="Next testimonial"
				on:click={nextTestimonial}
			>
				<svg class="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
				</svg>
			</button>
		</div>
			<div class="flex justify-center items-center space-x-3 mt-8" role="tablist">
				{#each testimonials as testimonial, index}
					<button
						type="button"
						class="w-3 h-3 rounded-full transition-all duration-300 {index === currentIndex ? 'bg-black dark:bg-white scale-110' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}"
						role="tab"
						aria-selected={index === currentIndex}
						aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
						on:click={() => goToTestimonial(index)}
					></button>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Component styles are scoped to this component */
</style>
