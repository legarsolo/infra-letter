<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="border-t border-slate-100 bg-white py-10">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8"
	>
		<p class="text-sm text-slate-400">&copy; 2026 InfraLetter</p>

		<div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
			<a
				href="mailto:contact@infraletter.com"
				class="text-sm text-slate-400 transition-colors hover:text-indigo-600"
			>
				contact@infraletter.com
			</a>
			<a
				href={resolve('/terms')}
				class="text-sm text-slate-400 transition-colors hover:text-indigo-600"
			>
				Terms
			</a>
			<a
				href={resolve('/privacy')}
				class="text-sm text-slate-400 transition-colors hover:text-indigo-600"
			>
				Privacy
			</a>
			<a
				href={resolve('/refund-policy')}
				class="text-sm text-slate-400 transition-colors hover:text-indigo-600"
			>
				Refund Policy
			</a>
		</div>
	</div>
</footer>
