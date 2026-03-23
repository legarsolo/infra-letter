<script lang="ts">
	import { resolve } from '$app/paths';
	import LegalPage from '$lib/components/LegalPage.svelte';

	const effectiveDate = 'March 23, 2026';
</script>

<LegalPage title="Terms of Service" {effectiveDate}>
	<p>Welcome to InfraLetter.</p>

	<p>
		These Terms of Service govern your use of InfraLetter and any related services provided through
		infraletter.com.
	</p>

	<p>
		InfraLetter is a subscription service that provides AWS cost summaries, billing-related
		insights, and digest emails for small teams. By using InfraLetter, requesting access, or
		purchasing a subscription, you agree to these Terms.
	</p>

	<h2>1. About InfraLetter</h2>
	<p>
		InfraLetter is an AWS-first service designed to help small teams understand cloud cost changes
		through periodic digest emails and related onboarding support.
	</p>
	<p>InfraLetter currently focuses on AWS billing and usage visibility and may evolve over time.</p>

	<h2>2. Eligibility</h2>
	<p>
		You may use InfraLetter only if you are authorized to act on behalf of yourself or your
		organization and to provide the information needed for onboarding.
	</p>
	<p>
		If you are using InfraLetter on behalf of a company or team, you represent that you have
		authority to accept these Terms on its behalf.
	</p>

	<h2>3. Service description</h2>
	<p>
		InfraLetter provides periodic cost digests, onboarding support, and related reporting based on
		AWS billing and usage data made available through your approved setup.
	</p>
	<p>
		InfraLetter is not a real-time monitoring service, full FinOps platform, accounting service, or
		financial advisory service.
	</p>

	<h2>4. Customer responsibilities</h2>
	<p>You are responsible for:</p>
	<ul>
		<li>providing accurate application and contact information</li>
		<li>ensuring you are authorized to connect the relevant AWS account or accounts</li>
		<li>reviewing any AWS access configuration before enabling it</li>
		<li>keeping control of your own AWS environment and permissions</li>
		<li>reviewing outputs before making business or technical decisions based on them</li>
	</ul>

	<h2>5. AWS access and permissions</h2>
	<p>
		InfraLetter is designed to use read-only access to AWS billing and usage data required to
		prepare your digest.
	</p>
	<p>
		InfraLetter does not intentionally create, modify, or delete your AWS resources as part of the
		normal service.
	</p>
	<p>
		You may revoke access at any time by changing or removing the relevant AWS permissions in your
		own environment.
	</p>

	<h2>6. Billing and subscriptions</h2>
	<p>InfraLetter is offered as a paid subscription unless otherwise stated in writing.</p>
	<p>
		Pricing, billing frequency, and payment terms are shown at the time of purchase or in direct
		communication before onboarding. Payments may be processed by a third-party payment provider.
	</p>
	<p>Unless otherwise stated, subscriptions renew on a recurring basis until canceled.</p>

	<h2>7. Cancellation</h2>
	<p>
		You may cancel your subscription at any time before the next billing cycle. Cancellation will
		stop future renewals, and your service will continue until the end of the current paid period
		unless otherwise stated.
	</p>

	<h2>8. Refunds</h2>
	<p>Refunds are handled according to the InfraLetter Refund Policy available at:</p>
	<p>
		<a href={resolve('/refund-policy')}>https://infraletter.com/refund-policy</a>
	</p>

	<h2>9. Data freshness and service limitations</h2>
	<p>
		Cloud billing and usage information is not always available in real time. InfraLetter may rely
		on delayed, estimated, or incomplete provider data.
	</p>
	<p>
		Because of this, InfraLetter does not guarantee that any digest, estimate, forecast, or billing
		insight will be complete, final, or error-free.
	</p>

	<h2>10. Acceptable use</h2>
	<p>You agree not to:</p>
	<ul>
		<li>misuse the service</li>
		<li>interfere with its operation</li>
		<li>attempt unauthorized access</li>
		<li>use InfraLetter in violation of applicable law</li>
		<li>misrepresent your identity or authority to connect AWS accounts</li>
	</ul>

	<h2>11. Intellectual property</h2>
	<p>
		InfraLetter and its original content, branding, and service materials are owned by InfraLetter
		unless otherwise stated.
	</p>
	<p>You retain ownership of your own data and materials.</p>

	<h2>12. No warranty</h2>
	<p>
		InfraLetter is provided on an "as is" and "as available" basis to the maximum extent permitted
		by law.
	</p>
	<p>
		InfraLetter makes no guarantee that the service will always be available, uninterrupted, secure,
		or error-free.
	</p>

	<h2>13. Limitation of liability</h2>
	<p>
		To the maximum extent permitted by law, InfraLetter will not be liable for indirect, incidental,
		special, consequential, or punitive damages, or for loss of profits, revenue, business
		opportunity, or data resulting from your use of the service.
	</p>

	<h2>14. Changes to these Terms</h2>
	<p>
		InfraLetter may update these Terms from time to time. The updated version will be posted on this
		page with a revised effective date.
	</p>

	<h2>15. Contact</h2>
	<p>If you have questions about these Terms, contact:</p>
	<p>
		<a href="mailto:hello@infraletter.com"><strong>hello@infraletter.com</strong></a>
	</p>
</LegalPage>
