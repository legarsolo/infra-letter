<script lang="ts">
	import LegalPage from '$lib/components/LegalPage.svelte';

	const effectiveDate = 'March 23, 2026';
</script>

<LegalPage title="Privacy Policy" {effectiveDate}>
	<p>InfraLetter respects your privacy.</p>

	<p>
		This Privacy Policy explains what information InfraLetter collects, how it is used, and how you
		can contact us about it.
	</p>

	<h2>1. Information we collect</h2>
	<p>InfraLetter may collect the following types of information:</p>

	<p><strong>Information you provide directly</strong></p>
	<ul>
		<li>your name</li>
		<li>email address</li>
		<li>company name</li>
		<li>information submitted through the founding access form</li>
		<li>onboarding and support communications</li>
	</ul>

	<p><strong>Service-related information</strong></p>
	<ul>
		<li>AWS account and billing-related setup details you provide during onboarding</li>
		<li>recipient email addresses for digests</li>
		<li>customer support messages and related context</li>
	</ul>

	<p><strong>Payment-related information</strong></p>
	<p>
		Payments may be processed by a third-party payment provider. InfraLetter may receive limited
		billing information such as payment status, customer name, customer email, subscription details,
		and transaction identifiers, but does not necessarily store full payment card details.
	</p>

	<h2>2. How we use information</h2>
	<p>InfraLetter uses collected information to:</p>
	<ul>
		<li>review applications and determine fit</li>
		<li>onboard customers</li>
		<li>provide AWS cost digests and related service communications</li>
		<li>respond to questions and support requests</li>
		<li>process subscriptions and related administrative tasks</li>
		<li>improve the service over time</li>
	</ul>

	<h2>3. What we do not intentionally collect</h2>
	<p>InfraLetter is not designed to collect:</p>
	<ul>
		<li>your source code</li>
		<li>application database contents</li>
		<li>secrets or environment variables</li>
		<li>customer content from your workloads</li>
		<li>write access to AWS resources as part of normal operation</li>
	</ul>

	<h2>4. Sharing information</h2>
	<p>
		InfraLetter may share information with trusted service providers that help operate the service,
		such as:
	</p>
	<ul>
		<li>payment providers</li>
		<li>email hosting or sending providers</li>
		<li>form processing tools</li>
		<li>website hosting providers</li>
		<li>analytics or infrastructure tools used to operate InfraLetter</li>
	</ul>
	<p>Information is shared only to the extent reasonably necessary to run the service.</p>
	<p>InfraLetter does not sell your personal information.</p>

	<h2>5. Data retention</h2>
	<p>
		InfraLetter keeps information for as long as reasonably necessary to operate the service,
		provide support, maintain records, and meet legal or business obligations.
	</p>
	<p>
		You may request deletion of certain information by contacting us, subject to operational,
		contractual, and legal requirements.
	</p>

	<h2>6. Security</h2>
	<p>
		InfraLetter takes reasonable steps to protect information from unauthorized access, misuse, or
		disclosure. However, no method of storage or transmission is completely secure.
	</p>

	<h2>7. Your choices</h2>
	<p>You may contact InfraLetter to:</p>
	<ul>
		<li>update your contact details</li>
		<li>ask questions about your information</li>
		<li>request deletion where appropriate</li>
		<li>request cancellation of service communications other than essential operational emails</li>
	</ul>

	<h2>8. International use</h2>
	<p>
		InfraLetter may use service providers located in different countries. By using the service, you
		understand that information may be processed outside your home jurisdiction.
	</p>

	<h2>9. Changes to this Privacy Policy</h2>
	<p>
		InfraLetter may update this Privacy Policy from time to time. The updated version will be posted
		on this page with a revised effective date.
	</p>

	<h2>10. Contact</h2>
	<p>If you have questions about this Privacy Policy, contact:</p>
	<p>
		<a href="mailto:contact@infraletter.com"><strong>contact@infraletter.com</strong></a>
	</p>
</LegalPage>
