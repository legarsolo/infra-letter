<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { PathnameWithSearchOrHash } from '$app/types';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>InfraLetter</title>
	<meta name="application-name" content="InfraLetter" />
	<link rel="icon" href={asset('/favicon.svg')} />
</svelte:head>
{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.route.id ?? '/', { locale }) as PathnameWithSearchOrHash)}
			>{locale}</a
		>
	{/each}
</div>
