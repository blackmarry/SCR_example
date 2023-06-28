import axios from 'axios'


export interface BlogContent {
	type: 'text' | 'image' | 'quote'
	value: string
}

export interface BlogPost {
	id: number
	title: string
	preview: string
	group: string
	image: string
	content: BlogContent[]
}

export interface Blog {
	posts: BlogPost[]
}

export const blogService = {
	getAllPosts: async () => {
		// https://www.mockaroo.com/
		const res = await axios.get<Blog>('blog-api.json')
		const posts = res.data.posts

		// refine json data
		const len = posts.length
		for (let i = 0; i < len; i++) {
			posts[i].preview = posts[i].preview.replace('\n\n', '')
			posts[i].image = ''
			
			const clen = posts[i].content.length
			for (let j = 0; j < clen; j++) {
				if (posts[i].content[j].type === 'image') {
					posts[i].content[j].value = ''
				}
				else {
					posts[i].content[j].value = posts[i].content[j].value.replace('\n\n', '')
				}
			}
		}
		
		return posts
	},

	getImage: async () => {
		const result = await axios.get('https://picsum.photos/1280/760/')
		return result.request.responseURL as string
	}
}
