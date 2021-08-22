// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Image = {
  [key: string]: any
}

const API_URL = 'https://pixabay.com/api/';
const API_KEY = process.env.PIXBAY_API;

async function search(term) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: term,
    category: 'education',
    image_type: 'illustration',
    safesearch: 'true',
  })

  return fetch(`${API_URL}?${params}`)
    .then(response => {
      // Note rate-limiting info
      /*
      response.headers.get('X-RateLimit-Limit')
      response.headers.get('X-RateLimit-Remaining')
      response.headers.get('X-RateLimit-Reset')
      */

      return response.json()
    })
    .then(result => {
      console.log(result.hits)
      return result.hits.map(({id, previewURL}) => ({id, url: previewURL}))
    })
}

export default async (req: NextApiRequest, res: NextApiResponse<Image[]>) => {
  const {term} = req.query
  const result = await search(term)

  res.status(200).json(result)
}
