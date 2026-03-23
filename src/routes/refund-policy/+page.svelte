<script lang="ts">
	import LegalPage from '$lib/components/LegalPage.svelte';

	const effectiveDate = 'March 23, 2026';
</script>

<LegalPage title="Refund Policy" {effectiveDate}>
	<p>InfraLetter wants early customers to feel comfortable trying the service.</p>

	<h2>1. Initial subscription refunds</h2>
	<p>
		If you purchase InfraLetter for the first time and decide it is not the right fit, you may
		request a refund within <strong>14 days</strong> of your initial payment.
	</p>
	<p>Refund requests should be sent to:</p>
	<p>
		<a href="mailto:hello@infraletter.com"><strong>hello@infraletter.com</strong></a>
	</p>
	<p>Please include:</p>
	<ul>
		<li>the email used for purchase</li>
		<li>your company name, if applicable</li>
		<li>a short note that you are requesting a refund</li>
	</ul>

	<h2>2. Renewals</h2>
	<p>
		Unless required by law or agreed otherwise in writing, renewal payments are generally not
		refunded once a new billing period has started.
	</p>

	<h2>3. Cancellation</h2>
	<p>
		You may cancel your subscription at any time before the next billing cycle. Cancellation
		prevents future renewals and access continues through the end of the current paid period unless
		otherwise stated.
	</p>

	<h2>4. Non-payment</h2>
	<p>
		If payment fails or your subscription is not active, InfraLetter may pause or stop service until
		payment is resolved.
	</p>

	<h2>5. Exceptions</h2>
	<p>InfraLetter may, at its discretion, offer refunds outside this policy in individual cases.</p>

	<h2>6. Changes to this policy</h2>
	<p>
		InfraLetter may update this Refund Policy from time to time. The updated version will be posted
		on this page with a revised effective date.
	</p>

	<h2>7. Contact</h2>
	<p>For refund requests or billing questions, contact:</p>
	<p>
		<a href="mailto:hello@infraletter.com"><strong>hello@infraletter.com</strong></a>
	</p>
</LegalPage>
