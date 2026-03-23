<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { onMount } from 'svelte';
	import Favicon from '$lib/assets/favicon.svg?component';
	import {
		ArrowLeft,
		User,
		Mail,
		Building2,
		DollarSign,
		Layers3,
		Users,
		CircleAlert,
		FileText,
		Sparkles
	} from 'lucide-svelte';

	type PageclipFormOptions = {
		onSubmit?: () => void;
		onResponse?: (error: unknown, response: unknown) => boolean | void;
	};

	type PageclipApi = {
		form: (form: Element, options?: PageclipFormOptions) => void;
	};

	let submitted = $state(false);
	let isSubmitting = $state(false);
	let submitError = $state('');

	onMount(() => {
		const form = document.querySelector('.pageclip-form');
		const pageclip = (window as { Pageclip?: Partial<PageclipApi> }).Pageclip;

		if (!form || typeof pageclip?.form !== 'function') {
			return;
		}

		pageclip.form(form, {
			onSubmit: () => {
				submitted = false;
				submitError = '';
				isSubmitting = true;
			},
			onResponse: (error: unknown) => {
				isSubmitting = false;

				if (!error) {
					submitted = true;
					submitError = '';
				} else {
					submitError = navigator.onLine
						? 'We could not reach the server right now. Please try again in a moment.'
						: 'You appear to be offline. Please check your internet connection and try again.';
				}
				return false;
			}
		});
	});
</script>

<div class="site-shell min-h-screen bg-slate-50 text-slate-900">
	<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
		<a
			href={resolve('/')}
			class="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
		>
			<ArrowLeft size={14} />
			Back to homepage
		</a>

		<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
			<div class="mb-6 flex flex-wrap items-center gap-2">
				<Favicon width={18} height={18} />
				<span class="text-lg font-bold tracking-tight text-slate-900">InfraLetter</span>
				<span
					class="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
				>
					<Sparkles size={12} />
					AWS only · Founding intake
				</span>
			</div>

			<h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
				Request founding access
			</h1>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
				InfraLetter is a weekly AWS cost digest for small teams. Fill this out and I’ll review
				whether it’s a fit for your AWS setup.
			</p>
			<p class="mt-3 text-sm text-slate-500">
				Want to understand the connection first?
				<a href={resolve('/aws-setup')} class="text-indigo-600 underline hover:text-indigo-700"
					>How AWS setup works.</a
				>
			</p>
			<p class="mt-3 text-xs text-slate-500">
				By submitting this form, you agree to the
				<a class="text-indigo-600 underline hover:text-indigo-700" href={resolve('/terms')}
					>Terms of Service</a
				>
				and
				<a class="text-indigo-600 underline hover:text-indigo-700" href={resolve('/privacy')}
					>Privacy Policy</a
				>.
			</p>

			{#if !submitted}
				<form
					action="https://send.pageclip.co/jrdP1aSvMZvjU1yiMN13Z46To6ut0FJv/founder-intake"
					class="pageclip-form mt-8 space-y-5"
					method="post"
					aria-busy={isSubmitting}
				>
					<div class="space-y-1.5">
						<label
							for="name"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700"
							><User size={14} class="text-indigo-500" />Full name</label
						>
						<input
							id="name"
							type="text"
							name="name"
							required
							disabled={isSubmitting}
							class="w-full rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
						/>
					</div>

					<div class="space-y-1.5">
						<label
							for="email"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700"
							><Mail size={14} class="text-indigo-500" />Work email</label
						>
						<input
							id="email"
							type="email"
							name="email"
							required
							disabled={isSubmitting}
							class="w-full rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
						/>
					</div>

					<div class="space-y-1.5">
						<label
							for="company"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700"
							><Building2 size={14} class="text-indigo-500" />Company name</label
						>
						<input
							id="company"
							type="text"
							name="company"
							disabled={isSubmitting}
							class="w-full rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
						/>
					</div>

					<div class="space-y-1.5">
						<label
							for="monthly_spend"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700"
							><DollarSign size={14} class="text-indigo-500" />Approximate AWS monthly spend</label
						>
						<select
							id="monthly_spend"
							name="monthly_spend"
							required
							disabled={isSubmitting}
							class="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
						>
							<option value="">Select one</option>
							<option value="under_500">Under $500</option>
							<option value="500_2000">$500–$2,000</option>
							<option value="2000_10000">$2,000–$10,000</option>
							<option value="10000_plus">$10,000+</option>
							<option value="not_sure">Not sure</option>
						</select>
					</div>

					<div class="space-y-1.5">
						<label
							for="aws_accounts"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700"
							><Layers3 size={14} class="text-indigo-500" />How many AWS accounts do you want
							covered?</label
						>
						<select
							id="aws_accounts"
							name="aws_accounts"
							required
							disabled={isSubmitting}
							class="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
						>
							<option value="">Select one</option>
							<option value="1">1</option>
							<option value="2_5">2–5</option>
							<option value="6_10">6–10</option>
							<option value="10_plus">10+</option>
						</select>
					</div>

					<div class="space-y-1.5">
						<label
							for="recipients"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700"
							><Users size={14} class="text-indigo-500" />Who should receive the digest?</label
						>
						<input
							id="recipients"
							type="text"
							name="recipients"
							placeholder="Me, cofounder, engineering lead"
							disabled={isSubmitting}
							class="w-full rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
						/>
					</div>

					<div class="space-y-1.5">
						<label
							for="main_pain"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700"
							><CircleAlert size={14} class="text-indigo-500" />What is most frustrating about your
							AWS bill right now?</label
						>
						<textarea
							id="main_pain"
							name="main_pain"
							rows="5"
							required
							disabled={isSubmitting}
							class="w-full rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
						></textarea>
					</div>

					<div class="space-y-1.5">
						<label
							for="notes"
							class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700"
							><FileText size={14} class="text-indigo-500" />Anything else I should know?</label
						>
						<textarea
							id="notes"
							name="notes"
							rows="4"
							disabled={isSubmitting}
							class="w-full rounded-lg border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
						></textarea>
					</div>

					<input
						type="text"
						name="_gotcha"
						style="display:none"
						tabindex="-1"
						autocomplete="off"
						disabled={isSubmitting}
					/>

					{#if submitError}
						<div
							class="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
						>
							{submitError}
						</div>
					{/if}

					<button
						type="submit"
						class="pageclip-form__submit btn btn-primary w-full sm:w-auto"
						disabled={isSubmitting}
					>
						<span>{isSubmitting ? 'Sending request…' : 'Send request'}</span>
					</button>
				</form>
			{/if}

			<p class="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500">
				This form is only for founding-customer intake. I’ll only use your details to review fit and
				reply about onboarding.
			</p>

			<p class="mt-2 text-sm text-slate-500">
				Refunds are handled according to our
				<a class="text-indigo-600 underline hover:text-indigo-700" href={resolve('/refund-policy')}
					>Refund Policy</a
				>.
			</p>

			{#if submitted}
				<div
					class="mt-8 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
				>
					Thanks — I received your request. I’ll review your setup and reply with the next step for
					onboarding.
				</div>
			{/if}
		</div>
	</section>
	<SiteFooter />
</div>
