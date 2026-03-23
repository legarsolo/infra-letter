<script>
	import { resolve } from '$app/paths';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import {
		ArrowLeft,
		ArrowRight,
		ShieldCheck,
		CheckCircle2,
		XCircle,
		FileLock2,
		Eye,
		CircleHelp
	} from 'lucide-svelte';

	const whyBullets = [
		'See spend trends across your AWS usage',
		'Identify the services driving cost changes',
		'Estimate where the month is heading',
		'Suggest what to investigate next'
	];

	const readOnlyBullets = [
		'Cannot launch resources',
		'Cannot stop or terminate resources',
		'Cannot change network settings',
		'Cannot deploy code',
		'Cannot modify IAM users, roles, or policies',
		'Cannot delete anything in your AWS account'
	];

	const needsAccessBullets = [
		'Billing and cost data',
		'Cost Explorer results',
		'Usage patterns related to billing',
		'Basic account-level information needed to prepare the digest'
	];

	const doesNotAccessBullets = [
		'No source code',
		'No application database records',
		'No environment variables or secrets',
		'No file contents from your workloads',
		'No ability to change resources',
		'No production operations access'
	];

	const steps = [
		{
			title: 'Review the setup page',
			text: 'Use this page to understand the full read-only AWS setup flow and exactly what access InfraLetter needs.'
		},
		{
			title: 'Request founding access',
			text: 'Submit the founding access form so I can review whether InfraLetter is a good fit for your AWS setup.'
		},
		{
			title: 'Review fit and setup details',
			text: 'I’ll review your AWS size, billing setup, and digest needs, then reply with the next onboarding details.'
		},
		{
			title: 'Connect AWS in read-only mode',
			text: 'If it is a fit, you’ll receive simple instructions for connecting AWS billing data in read-only mode.'
		},
		{
			title: 'Receive your first digest',
			text: 'After setup is confirmed, your digest recipients will start receiving the weekly AWS cost update.'
		}
	];

	const faqItems = [
		{
			q: 'Do I need to install an agent?',
			a: 'No. InfraLetter is designed to work through a read-only AWS connection.'
		},
		{
			q: 'Will InfraLetter make changes in my AWS account?',
			a: 'No. InfraLetter is designed only to read the billing and usage data needed for the digest.'
		},
		{
			q: 'Can I revoke access later?',
			a: 'Yes. You stay in control of your AWS account and can revoke access whenever you choose.'
		},
		{
			q: 'Does InfraLetter read application data?',
			a: 'No. InfraLetter is focused on billing and cost-related visibility, not application content or infrastructure control.'
		},
		{
			q: 'Is setup self-serve?',
			a: 'For founding customers, setup is handled manually so the process stays clear and low-risk.'
		},
		{
			q: 'Do you support anything beyond AWS?',
			a: 'AWS is the first supported provider. Early customers will help shape which cloud integrations come next.'
		},
		{
			q: 'What should I do after reading this page?',
			aPrefix: 'If the read-only setup looks like a fit for your team, the next step is to ',
			linkText: 'request founding access',
			aSuffix: '.'
		}
	];
</script>

<div class="site-shell min-h-screen bg-white font-sans text-slate-900">
	<header class="sticky top-0 z-50 border-b border-slate-100 bg-white">
		<div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center">
				<a
					href={resolve('/')}
					class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
				>
					<ArrowLeft size={16} />
					Back to homepage
				</a>
			</div>
		</div>
	</header>

	<main class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div class="section-reveal mx-auto mb-20 max-w-2xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700"
			>
				<ShieldCheck size={14} />
				AWS setup · Read-only access · Built for trust
			</div>
			<h1 class="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
				How AWS setup works
			</h1>
			<p class="mb-8 text-lg leading-relaxed text-slate-600">
				Before you request founding access, here is exactly how InfraLetter connects to your AWS
				billing and usage data in read-only mode.
			</p>
			<p class="mb-8 text-sm leading-relaxed text-slate-500">
				This setup is designed to be simple, limited, and revocable. InfraLetter only reads the
				billing and usage data needed for your digest and does not create, modify, or delete your
				AWS resources.
			</p>
			<div class="flex flex-col justify-center gap-3 sm:flex-row">
				<a href={resolve('/apply')} class="btn btn-primary">
					Request founding access
					<ArrowRight size={16} />
				</a>
				<a href={resolve('/')} class="btn btn-ghost"> Back to homepage </a>
			</div>
		</div>

		<div class="space-y-24">
			<!-- Why we need access -->
			<section class="section-reveal">
				<div class="flex flex-col gap-8">
					<div class="shrink-0">
						<div class="mb-3 flex items-center gap-3">
							<span
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
							>
								<Eye size={20} />
							</span>
							<h2 class="text-xl font-bold text-slate-900">Why access is needed</h2>
						</div>
						<p class="text-sm text-slate-500">
							InfraLetter needs limited read-only access so it can review billing and usage data,
							identify changes, and prepare your AWS cost digest.
						</p>
						<p class="mt-2 text-xs text-slate-500">
							This is the same read-only setup referenced on the homepage.
						</p>
					</div>
					<div class="rounded-2xl border border-slate-100 bg-slate-50 p-6">
						<ul class="grid gap-4 sm:grid-cols-1">
							{#each whyBullets as item (item)}
								<li class="flex items-start gap-3 text-sm font-medium text-slate-700">
									<CheckCircle2 size={18} class="mt-0.5 shrink-0 text-blue-500" />
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</section>

			<!-- What read-only means -->
			<section class="section-reveal">
				<div class="flex flex-col gap-8">
					<div class="shrink-0">
						<div class="mb-3 flex items-center gap-3">
							<span
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
							>
								<FileLock2 size={20} />
							</span>
							<h2 class="text-xl font-bold text-slate-900">What read-only means</h2>
						</div>
						<p class="text-sm text-slate-500">
							Read-only means InfraLetter can view the billing and usage data needed for your
							digest, but it cannot make changes to your infrastructure.
						</p>
					</div>
					<div class="rounded-2xl border border-slate-100 bg-slate-50 p-6">
						<ul class="grid gap-4 sm:grid-cols-1">
							{#each readOnlyBullets as item (item)}
								<li class="flex items-start gap-3 text-sm font-medium text-slate-700">
									<XCircle size={18} class="mt-0.5 shrink-0 text-emerald-500" />
									{item}
								</li>
							{/each}
						</ul>
						<p class="mt-4 text-xs text-slate-500">
							You stay in control of your AWS account at all times, and access can be revoked
							whenever you choose.
						</p>
					</div>
				</div>
			</section>

			<!-- Transparency (Access vs No Access) -->
			<section class="section-reveal border-t border-slate-100 pt-20">
				<h2 class="mb-12 text-center text-2xl font-bold text-slate-900">Total transparency</h2>
				<div class="grid grid-cols-1 gap-8">
					<div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
						<h3
							class="mb-6 flex items-center gap-2 border-b border-slate-100 pb-4 text-lg font-bold text-slate-900"
						>
							<CheckCircle2 size={20} class="text-emerald-500" />
							What we access
						</h3>
						<ul class="space-y-4">
							{#each needsAccessBullets as item (item)}
								<li class="flex items-start gap-3 text-sm text-slate-600">
									<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"></span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
					<div class="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
						<h3
							class="mb-6 flex items-center gap-2 border-b border-slate-200 pb-4 text-lg font-bold text-slate-900"
						>
							<XCircle size={20} class="text-rose-500" />
							What we do NOT access
						</h3>
						<ul class="space-y-4">
							{#each doesNotAccessBullets as item (item)}
								<li class="flex items-start gap-3 text-sm text-slate-600">
									<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400"></span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</section>

			<!-- How Setup Works -->
			<section class="section-reveal border-t border-slate-100 pt-20">
				<div class="mx-auto max-w-2xl">
					<div class="mb-12 text-center">
						<h2 class="mb-3 text-2xl font-bold text-slate-900">How setup works</h2>
						<p class="text-slate-500">
							Founding customers are onboarded manually so the setup stays clear and low-risk.
						</p>
					</div>
					<div class="space-y-6">
						{#each steps as step, index (step.title)}
							<div class="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
								<div
									class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600"
								>
									{index + 1}
								</div>
								<div>
									<h3 class="mb-1 font-bold text-slate-900">{step.title}</h3>
									<p class="text-sm leading-relaxed text-slate-600">{step.text}</p>
								</div>
							</div>
						{/each}
					</div>
					<p class="mt-6 text-sm text-slate-600">
						If the setup looks like a fit for your team, the next step is to
						<a href={resolve('/apply')} class="text-indigo-600 underline hover:text-indigo-700"
							>request founding access</a
						>.
					</p>
				</div>
			</section>

			<!-- FAQ Section -->
			<section class="section-reveal border-t border-slate-100 pt-20">
				<div class="mx-auto max-w-2xl">
					<h2 class="mb-10 text-center text-2xl font-bold text-slate-900">
						Frequently asked questions
					</h2>
					<div class="space-y-6">
						{#each faqItems as item (item.q)}
							<div class="border-l-2 border-slate-200 pl-5">
								<h3 class="mb-2 flex items-center gap-2 text-base font-semibold text-slate-900">
									<CircleHelp size={16} class="shrink-0 text-indigo-400" />
									{item.q}
								</h3>
								{#if item.linkText}
									<p class="text-sm leading-relaxed text-slate-500">
										{item.aPrefix}<a
											class="text-indigo-600 underline hover:text-indigo-700"
											href={resolve('/apply')}>{item.linkText}</a
										>{item.aSuffix}
									</p>
								{:else}
									<p class="text-sm leading-relaxed text-slate-500">{item.a}</p>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</section>
		</div>

		<!-- Final CTA -->
		<div
			class="section-reveal mx-auto mt-24 max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center sm:p-14"
		>
			<h2 class="mb-3 text-2xl font-bold tracking-tight text-slate-900">
				Ready for the next step?
			</h2>
			<p class="mb-8 text-slate-600">
				If the AWS setup looks like a fit for your team, request founding access and I’ll review
				your setup before onboarding.
			</p>
			<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
				<a href={resolve('/apply')} class="btn btn-primary">
					Request founding access
					<ArrowRight size={16} />
				</a>
				<a href={resolve('/')} class="btn btn-ghost"> Back to homepage </a>
			</div>
			<p class="mt-6 text-sm text-slate-500">
				Questions about billing, privacy, or refunds? Read our
				<a class="text-indigo-600 underline hover:text-indigo-700" href={resolve('/terms')}>
					Terms
				</a>
				,
				<a class="text-indigo-600 underline hover:text-indigo-700" href={resolve('/privacy')}>
					Privacy Policy
				</a>
				, and
				<a class="text-indigo-600 underline hover:text-indigo-700" href={resolve('/refund-policy')}>
					Refund Policy
				</a>
				.
			</p>
		</div>
	</main>
	<SiteFooter />
</div>
