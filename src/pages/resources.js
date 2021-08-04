import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Base from '../layouts/base'
import stuff from './resources.json'

const GeneralResources = [
	{
		"title": "CODS Courses (WIP)",
		"description": "We provide over 60 courses for all participants to use, from topics that are regularly covered in your classroom to Olympiad-specific topics. These courses are designed specifically for the chemistry Olympiad competitors and those who plan on competing in CODS Competitions.\n\nEach module provides resources, special guidance, and problems for participants to use for thier learning experience. We updte the courses every week and anyone can contribute to the project. Check it out!",
		"image": "https://imgur.com/1NOksZT.png"
	},
	{
		"title": "Chemguide",
		"description": "Chemguide is a very good learning resource. Made by Jim Clark, its initial purpose was to provide U.K. students a place to learn about chemistry. However, this resource is extremely helpful for chemistry Olympiad participants as well, and the inorganic chemistry section in particular has been proven to be invaluable.",
		"image": "https://imgur.com/upd9Nwt.png",
		"link": "https://www.chemguide.co.uk/"
	},
	{
		"title": "Chemistry LibreTexts",
		"description": "Chemistry LibreTexts can also be great help as well. Content that is present in Chemistry Olympiads that aren't taught in high school can often be learned from this website. You should check it out!",
		"image": "https://imgur.com/F2HO00G.png",
		"link": "https://chem.libretexts.org/"
	},
	{
		"title": "CODSNotes",
		"description": "Detailed notes on competitive chemistry topics, based on Atkins Chemical Principles",
		"image": "https://imgur.com/1NOksZT.png",
		"link": "https://drive.google.com/drive/folders/195kcNDwljvw1w5ZKVWzpE7LCdbvwQzVL?usp=sharing"
	}
]

const numcols = function (num) {
	let three = num % 3
	let four = num % 4

	if (three != 1) {
		return ("md:grid-cols-3")
	} else if (four != 1) {
		return ("md:grid-cols-4")
	} else {
		return ("md:grid-cols-3")
	}
}

export default function resources() {
	return (
		<Base>
			<SEO title="Resources"/>
			<h1 class="text-center">Resources</h1>

			<div class="bg-gray-200 pt-5 pb-1 mt-10 mb-5">
				<h2 class="text-center">General Resources</h2>
			</div>
			{GeneralResources.map(r => {
				return (
					<div class="md:grid md:grid-cols-3 gap-5 px-5 md:px-20">
						<div>
							{r.image ? <img src={r.image}/> : <></>}
						</div>
						<div class="col-span-2 mb-10">
							{r.title ? <h1 class="font-bold mt-0 mb-1">{r.title}</h1> : <></>}
							<p class="text-sm mt-2 mb-1">{r.description}</p>
							{r.link ? <Link class="text-blue-400 font-bold mt-0" to={r.link}>Link</Link> : <></>}
							{r.download? <Link class="text-blue-400 font-bold mt-0" to={r.download}>Download</Link> : <></>}
						</div>
					</div>
				)
			})}

			{stuff.map(c => {
				return (
					<div>
						<div class="bg-gray-200 pt-5 pb-1 mt-10 mb-5">
							<h2 class="text-center">{c.category}</h2>
							{c.description ? <p class="text-center">{c.description}</p> : <></>}
						</div>
						<div class={`md:grid gap-5 place-items-center ${numcols(c.resources.length)} px-5 md:px-20`}>
							{c.resources.map(r => {
									return (
										<div class="text-center mb-10">
											{r.image ? <img src={r.image} class="h-64 mb-1"/> : <></>}
											{r.title ? <p class="font-bold mt-0 mb-1">{r.title}</p> : <></>}
											<p class="text-sm mb-1">{r.description}</p>
											{r.link ? <Link class="text-blue-400 font-bold mt-0" to={r.link}>Link</Link> : <></>}
											{r.download? <Link class="text-blue-400 font-bold mt-0" to={r.download}>Download</Link> : <></>}
										</div>
									)
							})}
						</div>
					</div>
				)
			})}
		</Base>
	)
}