import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import Header from '../components/header'
import '../layouts/layout.css'

export default function Home() {
	return (
		<>
			<SEO title="Home" keywords={['Chem Competition']} />
			<Header siteTitle="CODSite" />
			<div style={{margin: '0 auto',	paddingTop: 0}}>
				<StaticImage src="../images/cods_banner.png" placeholder="blurred"/>

				<div class="bg-gray-200" style={{padding: '1.45rem 1.0875rem 1.45rem'}}>
					<h2 class="text-center">CODS is a global community made for Chemistry Olympiad participants</h2>
					<h3 class="text-center font-normal">Haven't joined the community yet? You can join here.</h3>
					<h3>Our Mission is to make Competitive Chemistry more...</h3>
					<dl class="md:grid md:grid-cols-3">
						<div class="relative">
							<dt>
								<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
									Accessible
								</p>
							</dt>
							<dd class="text-base">
								to a wider audience. We run four annual competitions for anyone around the world to compete in and provide guides for anyone to get started.
							</dd>
						</div>
						<div class="relative">
							<dt>
								<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
									Fair
								</p>
							</dt>
							<dd class="text-base">
								for everyone by providing guides for all levels of participants. We also provide high quality custom study resources to asssist your journey.
							</dd>
						</div>
						<div class="relative">
							<dt>
								<p class="mb-2 text-lg leading-5 front-medium text-gray-900">
									Competitive
								</p>
							</dt>
							<dd class="text-base">
								by leveling out the playing field of competitive chemistry, we hope to increase the standards of Chemistry Olympiads
							</dd>
						</div>
					</dl>
				</div>

				<div style={{padding: '1.45rem 1.0875rem 1.45rem'}}>
					<h2>What is CODSite for?</h2>
					<p>
						CODSite is an all-purpose website made for our community (competitive Chemistry enthusiasts).
						Everything on CODSite is free to use for anybody, no sign-ups or memberhsip required.
						We provide custom <b>open educational resources</b> such as lectures, detailed notes, useful websites, problem sets, guides, tools, and all of our past competition papers.
						Anything a chemistry freak could dream of lies within this website.
					</p>

					<div class="text-center">
						<h2>Open Educational Resources at CODSite</h2>
						<dl class="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
							<div class="relative border border-gray-400">
								<Link to="https://www.youtube.com/channel/UCyO5Wn2qKDRYWC-F5EfN2kA">
								<dt>
									<h2 class="mt-2 mb-2">
										Lectures
									</h2>
								</dt>
								<dd class="text-base">
									We provide lectures for everyone, from introductory lectures to problem solving and advanced topic lectures. You can watch our lectures on our YouTube channel.
								</dd>
								</Link>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										CODSNotes
									</h2>
								</dt>
								<dd class="text-base">
									Made specially for the CODS community, these notes cover the fundamentals required for competitive Chemistry, from Atomic structures to Organic Chemistry.
								</dd>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										Guides
									</h2>
								</dt>
								<dd class="text-base">
									Our staff is dedicated to writing guides for all levels. From introductory guides to those for the IChO level, there is a guide for anyone written by the best in the competitive chemistry scene.
								</dd>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										Past Papers
									</h2>
								</dt>
								<dd class="text-base">
									All of our past competition papers are released to the public and can be accessed immediately. Click here to access our list of past exams.
								</dd>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										Competitions
									</h2>
								</dt>
								<dd class="text-base">
									We provide four annual chemistry competitions for anyone to participate. For more information:
									<ul>
										<li>Q1: <Link to="competitions/stc">STC</Link></li>
										<li>Q2: <Link to="competitions/scho">SChO (CODSchO)</Link></li>
										<li>Q3: <Link to="competitions/acot">ACOT</Link></li>
										<li>Q4: <Link to="compeitions/wcc">WCC</Link></li>
									</ul>
								</dd>
							</div>
							<div class="relative border border-gray-400">
								<dt>
									<h2 class="mt-2 mb-2">
										CODSNotes
									</h2>
								</dt>
								<dd class="text-base">
								Made specially for the CODS community, these notes cover the fundamentals required for competitive Chemistry, from Atomic structures to Organic Chemistry.
								</dd>
							</div>
						</dl>
					</div>
				</div>

			</div>
		</>
	)
}
