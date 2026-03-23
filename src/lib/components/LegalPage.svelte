<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Snippet } from 'svelte';
	import { ArrowLeft } from 'lucide-svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	let {
		title,
		effectiveDate,
		children
	}: {
		title: string;
		effectiveDate: string;
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>{title} | InfraLetter</title>
</svelte:head>

<div class="min-h-screen bg-white font-sans text-slate-900">
	<main class="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
		<a
			href={resolve('/')}
			class="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
		>
			<ArrowLeft size={14} />
			Back to homepage
		</a>

		<div class="mx-auto max-w-3xl">
			<div class="mb-10 border-b border-slate-100 pb-8">
				<p class="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
					InfraLetter policy
				</p>
				<h1 class="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
					{title}
				</h1>
				<p class="mt-4 text-sm text-slate-500">Effective date: {effectiveDate}</p>
			</div>

			<div
				class="prose max-w-none prose-slate prose-headings:scroll-mt-20 prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-p:text-slate-600 prose-a:text-indigo-600 hover:prose-a:text-indigo-700 prose-strong:text-slate-900 prose-li:text-slate-600"
			>
				{@render children()}
			</div>
		</div>
	</main>

	<SiteFooter />
</div>
