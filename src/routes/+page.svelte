<script>
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';
	import Favicon from '$lib/assets/favicon.svg?component';
	import {
		ChartNoAxesColumn,
		TrendingUp,
		Calendar,
		ListChecks,
		Users,
		ShieldCheck,
		Check,
		X,
		ArrowRight,
		Menu,
		HelpCircle,
		Sparkles,
		Rocket,
		CircleDollarSign,
		Server
	} from 'lucide-svelte';

	let isMenuOpen = $state(false);

	const features = [
		{
			icon: ChartNoAxesColumn,
			title: 'Spend summary',
			description:
				'Total spend for the period, change vs the previous period, and month-to-date progress.',
			iconBg: 'bg-blue-50',
			iconText: 'text-blue-600'
		},
		{
			icon: TrendingUp,
			title: 'Top cost drivers',
			description:
				'See which AWS services are moving your bill and where the biggest increases are coming from.',
			iconBg: 'bg-violet-50',
			iconText: 'text-violet-600'
		},
		{
			icon: Calendar,
			title: 'Simple forecast',
			description:
				'Get a directional month-end estimate so you can react before the bill surprises you.',
			iconBg: 'bg-emerald-50',
			iconText: 'text-emerald-600'
		},
		{
			icon: ListChecks,
			title: 'Recommended checks',
			description:
				'Clear next actions like reviewing egress spikes, instance growth, or idle non-prod resources.',
			iconBg: 'bg-amber-50',
			iconText: 'text-amber-600'
		},
		{
			icon: Users,
			title: 'Up to 3 recipients',
			description:
				'Send updates to yourself, a cofounder, an engineer, or whoever actually needs to see them.',
			iconBg: 'bg-rose-50',
			iconText: 'text-rose-600'
		},
		{
			icon: ShieldCheck,
			title: 'Secure setup',
			description:
				'Founding customers get manual onboarding help with a simple and safe AWS read-only connection flow.',
			iconBg: 'bg-cyan-50',
			iconText: 'text-cyan-600'
		}
	];

	const pricingFeatures = [
		'Weekly AWS cost digest',
		'Top cost drivers and changes',
		'Basic month-end forecast',
		'Recommended checks',
		'Up to 3 email recipients',
		'Direct setup help for founding customers'
	];

	const differentiators = [
		'AWS only for the first version',
		'Weekly digest instead of dashboard overload',
		'Highlights likely causes, not just raw charts',
		'Gives concrete checks your team can run the same day',
		'Designed for founders and small engineering teams'
	];

	const problems = [
		'What changed since last week?',
		'Which services are driving the increase?',
		'Is this month heading above normal?',
		'What should we check first?'
	];

	const faqs = [
		{
			q: 'Do I need to install anything?',
			a: 'No. InfraLetter works through a secure read-only AWS connection.'
		},
		{
			q: 'Is this a full FinOps platform?',
			a: 'No. It is a simpler AWS cost digest for small teams that want clarity without a heavy platform.'
		},
		{
			q: 'Is the data real-time?',
			a: 'No. AWS billing data is not always real-time. Each digest includes a freshness timestamp so you know how current the data is.'
		},
		{
			q: 'Who can receive updates?',
			a: 'You can send the digest to yourself and up to two other recipients in the founding plan.'
		},
		{
			q: 'What level of access is needed?',
			a: 'InfraLetter only asks for read-only access to billing and usage data. It does not create, modify, or delete your AWS resources.'
		},
		{
			q: 'Do you support providers other than AWS?',
			a: 'AWS is the first supported provider. Early customers will help shape which cloud integrations come next.'
		},
		{
			q: 'How does AWS setup work?',
			aPrefix:
				'InfraLetter uses a read-only AWS connection to access the billing and usage data needed for your digest. You can review the full setup flow on the ',
			linkText: 'AWS Setup page',
			aSuffix: ' before requesting access.'
		}
	];
</script>

<div class="site-shell min-h-screen bg-white font-sans text-slate-900">
	<!-- Header -->
	<header class="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<a
					href={resolve('/')}
					class="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
				>
					<Favicon width={19} height={19} />
					<span>InfraLetter</span>
				</a>

				<nav class="hidden items-center space-x-7 md:flex">
					<a
						href="#what-you-get"
						class="text-sm text-slate-500 transition-colors hover:text-slate-900">What you get</a
					>
					<a
						href="#sample-digest"
						class="text-sm text-slate-500 transition-colors hover:text-slate-900">Sample digest</a
					>
					<a href="#pricing" class="text-sm text-slate-500 transition-colors hover:text-slate-900"
						>Pricing</a
					>
					<a
						href={resolve('/aws-setup')}
						class="text-sm text-slate-500 transition-colors hover:text-slate-900">AWS Setup</a
					>
					<a href="#faq" class="text-sm text-slate-500 transition-colors hover:text-slate-900"
						>FAQ</a
					>
					<a href={resolve('/apply')} class="btn btn-primary">
						Request founding access
						<ArrowRight size={14} />
					</a>
				</nav>

				<button
					onclick={() => (isMenuOpen = !isMenuOpen)}
					class="text-slate-500 hover:text-slate-900 md:hidden"
					aria-label="Toggle menu"
				>
					<Menu size={22} />
				</button>
			</div>
		</div>

		{#if isMenuOpen}
			<div
				class="border-t border-slate-100 bg-white md:hidden"
				transition:slide={{ duration: 180 }}
			>
				<div class="space-y-1 px-4 py-3">
					<a
						href="#what-you-get"
						class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
						>What you get</a
					>
					<a
						href="#sample-digest"
						class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
						>Sample digest</a
					>
					<a
						href="#pricing"
						class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Pricing</a
					>
					<a
						href={resolve('/aws-setup')}
						class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">AWS Setup</a
					>
					<a href="#faq" class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
						>FAQ</a
					>
					<a
						href={resolve('/apply')}
						class="btn btn-primary mt-3 flex w-full items-center justify-center gap-2"
					>
						Request founding access
						<ArrowRight size={14} />
					</a>
				</div>
			</div>
		{/if}
	</header>

	<!-- Hero -->
	<section class="overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-24">
		<div
			class="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8"
		>
			<div class="section-reveal text-center lg:text-left">
				<div
					class="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-medium text-indigo-600"
				>
					<Sparkles size={12} class="text-indigo-500" />
					<span class="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
					AWS only · Read-only setup · Built for small teams
				</div>

				<h1
					class="mb-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
				>
					Stop guessing where your<br class="hidden sm:block" /> AWS bill went.
				</h1>

				<p class="mx-auto mb-5 max-w-xl text-lg text-slate-600 sm:text-xl lg:mx-0">
					Get a weekly AWS cost digest showing what changed, likely why, and what to fix next.
				</p>

				<p class="mx-auto mb-8 max-w-xl text-sm text-slate-500 lg:mx-0">
					InfraLetter helps small teams understand AWS spend without learning a giant FinOps
					platform. Connect your AWS account in read-only mode and receive a clear weekly summary of
					spend, changes, forecast, and next actions.
				</p>

				<div class="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
					<span
						class="inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700"
						><Check size={12} /> Spot spikes faster</span
					>
					<span
						class="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700"
						><Check size={12} /> Weekly delivery</span
					>
				</div>

				<div class="mb-5 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
					<a href={resolve('/apply')} class="btn btn-primary">
						Request founding access
						<ArrowRight size={16} />
					</a>
					<a href={resolve('/aws-setup')} class="btn btn-ghost">
						<HelpCircle size={16} class="text-slate-400" />
						How AWS setup works
					</a>
				</div>

				<p class="text-xs text-slate-400">
					Founding plan: $79/month · AWS only · Up to 3 recipients · Manual onboarding included
				</p>
			</div>

			<div
				id="sample-digest"
				class="section-reveal relative mt-2 lg:mt-0"
				style="animation-delay: 140ms"
			>
				<a
					href={resolve('/aws-setup')}
					class="absolute -top-13 -left-5 z-20 hidden rounded-2xl border border-emerald-100 bg-white px-4 py-2.5 shadow-lg transition-colors hover:border-emerald-200 sm:flex sm:items-center sm:gap-2"
				>
					<span
						class="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"
						><ShieldCheck size={16} /></span
					>
					<div>
						<p class="text-sm font-semibold text-slate-800">How read-only setup works</p>
					</div>
				</a>

				<div
					class="digest-shell card-float relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl"
				>
					<div
						class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3"
					>
						<div
							class="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-500 uppercase"
						>
							<span class="signal-dot"></span>
							Sample digest
						</div>
						<div class="flex gap-1.5">
							<div class="h-2.5 w-2.5 rounded-full bg-rose-400"></div>
							<div class="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
							<div class="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
						</div>
					</div>

					<div class="max-h-128 overflow-y-auto p-5">
						<div class="mb-4 border-b border-slate-100 pb-4">
							<p class="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
								Subject line
							</p>
							<h3 class="mt-1 text-base font-bold text-slate-900">
								Your AWS cost update: $412 this week (+18%)
							</h3>
							<p class="mt-0.5 text-[11px] text-slate-500">Example shown for AWS</p>
						</div>

						<div class="space-y-5 text-sm">
							<div>
								<h4
									class="mb-2 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-blue-700 uppercase"
								>
									<ChartNoAxesColumn size={12} /> Summary
								</h4>
								<ul class="space-y-1.5 text-slate-700">
									<li class="flex justify-between">
										<span>Total this week</span><span class="font-semibold text-slate-900"
											>$412</span
										>
									</li>
									<li class="flex justify-between">
										<span>Change vs last week</span><span class="font-semibold text-rose-600"
											>+18%</span
										>
									</li>
									<li class="flex justify-between">
										<span>Month-to-date</span><span class="font-semibold text-slate-900"
											>$1,640</span
										>
									</li>
									<li class="flex justify-between">
										<span>Forecast month-end</span><span class="font-semibold text-slate-900"
											>$2,180</span
										>
									</li>
								</ul>
							</div>

							<div>
								<h4
									class="mb-2 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-violet-700 uppercase"
								>
									<TrendingUp size={12} /> Top cost drivers
								</h4>
								<ul class="space-y-1.5 text-slate-700">
									<li class="flex justify-between">
										<span>EC2</span><span class="font-semibold text-slate-900">$168</span>
									</li>
									<li class="flex justify-between">
										<span>Data transfer</span><span class="font-semibold text-slate-900">$91</span>
									</li>
									<li class="flex justify-between">
										<span>RDS</span><span class="font-semibold text-slate-900">$74</span>
									</li>
									<li class="flex justify-between">
										<span>S3</span><span class="font-semibold text-slate-900">$39</span>
									</li>
								</ul>
							</div>

							<div>
								<h4
									class="mb-2 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-cyan-700 uppercase"
								>
									<Sparkles size={12} /> What changed
								</h4>
								<ul class="space-y-1.5 text-slate-700">
									<li class="flex items-start gap-2">
										<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span>Data
										transfer increased 32%
									</li>
									<li class="flex items-start gap-2">
										<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span>EC2
										spend increased 14%
									</li>
									<li class="flex items-start gap-2">
										<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"></span>Most
										of the jump came from one production workload
									</li>
								</ul>
							</div>

							<div class="rounded-xl border border-indigo-100 bg-indigo-50 p-3.5">
								<h4
									class="mb-2 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-indigo-700 uppercase"
								>
									<ListChecks size={12} /> Recommended checks
								</h4>
								<ul class="space-y-1.5 text-slate-800">
									<li class="flex items-start gap-2">
										<Check size={12} class="mt-0.5 shrink-0 text-indigo-600" />Review egress
										increase
									</li>
									<li class="flex items-start gap-2">
										<Check size={12} class="mt-0.5 shrink-0 text-indigo-600" />Confirm instance
										usage after latest deploy
									</li>
									<li class="flex items-start gap-2">
										<Check size={12} class="mt-0.5 shrink-0 text-indigo-600" />Check idle non-prod
										resources
									</li>
								</ul>
							</div>
						</div>

						<p class="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
							Data fresh as of: 2026-03-16 08:00 UTC
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Problem -->
	<section class="bg-slate-50 py-16">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="section-reveal mb-10 text-center">
				<h2 class="mb-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
					AWS gives you billing data. Not always a clear weekly explanation.
				</h2>
				<p class="mx-auto max-w-xl text-base text-slate-500">
					Most small teams do not need another giant cost dashboard. They need to know what changed,
					what is driving it, and what to do next.
				</p>
			</div>
			<div class="mx-auto max-w-lg">
				<ul class="space-y-3">
					{#each problems as item, i (item)}
						<li
							class="section-reveal hover-lift flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm"
							style={`animation-delay: ${i * 70}ms`}
						>
							<span
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50"
							>
								<X size={13} class="text-red-500" strokeWidth={2.5} />
							</span>
							<span class="text-sm font-medium text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<!-- What you get -->
	<section id="what-you-get" class="py-20 sm:py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="section-reveal mb-14 text-center">
				<h2
					class="mb-3 inline-flex items-center gap-2 text-2xl font-extrabold text-slate-900 sm:text-3xl"
				>
					<ChartNoAxesColumn size={22} class="text-indigo-500" />
					What you get in every digest
				</h2>
				<p class="mx-auto max-w-xl text-base text-slate-500">
					A focused AWS cost digest built for founders, engineers, and small teams who want clarity
					without learning FinOps.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each features as feature, i (feature.title)}
					<div
						class="section-reveal hover-lift rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-md"
						style={`animation-delay: ${i * 80}ms`}
					>
						<div
							class={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feature.iconBg}`}
						>
							<feature.icon size={20} class={feature.iconText} />
						</div>
						<h3 class="mb-1.5 text-base font-semibold text-slate-900">{feature.title}</h3>
						<p class="text-sm leading-relaxed text-slate-500">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Why different -->
	<section class="py-20 sm:py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="items-center lg:grid lg:grid-cols-2 lg:gap-16">
				<div>
					<h2
						class="mb-4 inline-flex items-center gap-2 text-2xl font-extrabold text-slate-900 sm:text-3xl"
					>
						<Sparkles size={22} class="text-indigo-500" />
						Built for clarity, not complexity
					</h2>
					<p class="mb-8 text-base leading-relaxed text-slate-500">
						InfraLetter is intentionally narrow. It starts with AWS, focuses on weekly summaries,
						and helps small teams understand cost changes without adopting a full FinOps platform.
					</p>
					<ul class="space-y-3">
						{#each differentiators as item (item)}
							<li class="flex items-center gap-3">
								<span
									class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50"
								>
									<Check size={11} class="text-green-600" strokeWidth={3} />
								</span>
								<span class="text-sm text-slate-700">{item}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="relative mt-12 lg:mt-0">
					<div class="absolute inset-0 rotate-2 rounded-2xl bg-indigo-50"></div>
					<div class="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
						<div class="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
							<div>
								<p class="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
									Mini preview
								</p>
								<p class="text-sm font-semibold text-slate-800">What a weekly digest looks like</p>
							</div>
							<div class="flex gap-1.5">
								<span class="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
								<span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
								<span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
							</div>
						</div>

						<div class="space-y-2.5">
							<div class="digest-row">
								<span class="metric-icon bg-blue-50 text-blue-600"
									><CircleDollarSign size={14} /></span
								>
								<span class="text-sm text-slate-700">Total this week</span>
								<span class="ml-auto text-sm font-semibold text-slate-900">$412</span>
							</div>
							<div class="digest-row">
								<span class="metric-icon bg-violet-50 text-violet-600"
									><TrendingUp size={14} /></span
								>
								<span class="text-sm text-slate-700">Change vs last week</span>
								<span class="ml-auto text-sm font-semibold text-rose-600">+18%</span>
							</div>
							<div class="digest-row">
								<span class="metric-icon bg-cyan-50 text-cyan-600"><Server size={14} /></span>
								<span class="text-sm text-slate-700">Top driver: EC2</span>
								<span class="ml-auto text-sm font-semibold text-slate-900">$168</span>
							</div>
						</div>

						<div class="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2.5">
							<p class="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
								<ShieldCheck size={13} /> Secure AWS connection, no risky changes
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing -->
	<section
		id="pricing"
		class="border-y border-slate-100 bg-linear-to-b from-slate-50 to-white py-20 text-slate-900"
	>
		<div class="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-12 inline-flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
				<Rocket size={22} class="text-indigo-500" />
				Simple pricing for the first version
			</h2>

			<div
				class="hover-lift mx-auto max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-xl"
			>
				<div class="p-8">
					<div
						class="mb-5 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold tracking-wider text-indigo-700 uppercase"
					>
						Founding customer offer
					</div>

					<div class="mb-2 flex items-baseline justify-center">
						<span class="text-5xl font-extrabold tracking-tight">$79</span>
						<span class="ml-1 text-base text-slate-400">/ month</span>
					</div>
					<p class="mb-7 text-sm text-slate-500">
						AWS only. Weekly digest. Up to 3 recipients. Manual onboarding help included.
					</p>

					<ul class="mb-7 space-y-3 text-left">
						{#each pricingFeatures as item (item)}
							<li class="flex items-center gap-3">
								<span
									class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50"
								>
									<Check size={11} class="text-indigo-600" strokeWidth={3} />
								</span>
								<span class="text-sm text-slate-700">{item}</span>
							</li>
						{/each}
					</ul>

					<div class="space-y-2.5">
						<a
							href={resolve('/apply')}
							class="btn btn-primary flex w-full items-center justify-center gap-2"
						>
							Request founding access
							<ArrowRight size={15} />
						</a>
						<a
							href={resolve('/aws-setup')}
							class="btn btn-ghost flex w-full items-center justify-center gap-2"
						>
							<HelpCircle size={14} class="text-slate-400" />
							How AWS setup works
						</a>
					</div>
				</div>
			</div>

			<p class="mt-6 text-xs text-slate-500">
				Subscription billed monthly. By joining, you agree to the
				<a class="text-indigo-600 underline hover:text-indigo-700" href={resolve('/terms')}
					>Terms of Service</a
				>
				and
				<a class="text-indigo-600 underline hover:text-indigo-700" href={resolve('/refund-policy')}
					>Refund Policy</a
				>.
			</p>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="py-20 sm:py-24">
		<div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
			<h2
				class="mb-12 inline-flex w-full items-center justify-center gap-2 text-center text-2xl font-extrabold text-slate-900 sm:text-3xl"
			>
				<HelpCircle size={22} class="text-indigo-500" />
				Frequently asked questions
			</h2>

			<div class="space-y-6">
				{#each faqs as faq (faq.q)}
					<div class="border-l-2 border-slate-200 pl-5">
						<h3 class="mb-2 flex items-center gap-2 text-base font-semibold text-slate-900">
							<HelpCircle size={15} class="shrink-0 text-indigo-400" />
							{faq.q}
						</h3>
						{#if faq.linkText}
							<p class="text-sm leading-relaxed text-slate-500">
								{faq.aPrefix}<a
									class="text-indigo-600 underline hover:text-indigo-700"
									href={resolve('/aws-setup')}>{faq.linkText}</a
								>{faq.aSuffix}
							</p>
						{:else}
							<p class="text-sm leading-relaxed text-slate-500">{faq.a}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="border-t border-indigo-100 bg-indigo-50 py-20">
		<div class="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
				Ready to see if InfraLetter fits your AWS setup?
			</h2>
			<p class="mx-auto mb-8 max-w-md text-base text-slate-600">
				Review the AWS setup flow or request founding access if you are ready to get started.
			</p>
			<div class="flex flex-col justify-center gap-3 sm:flex-row">
				<a href={resolve('/apply')} class="btn btn-primary">
					Request founding access
					<ArrowRight size={16} />
				</a>
				<a href={resolve('/aws-setup')} class="btn btn-ghost">
					<HelpCircle size={14} class="text-slate-400" />
					How AWS setup works
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-slate-100 bg-white py-10">
		<div
			class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8"
		>
			<p class="inline-flex items-center gap-2 text-sm text-slate-400">
				<Favicon width={14} height={14} />

				© 2026 InfraLetter
			</p>
			<div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
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
</div>
