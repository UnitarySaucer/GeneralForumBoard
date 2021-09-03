export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api/forum`
    : 'http://localhost:3001/api/forum'
export const MAIN_POSTS = `${BASE_URL}/mainposts`
export const POST_MAIN = `${BASE_URL}/post`
export const MAIN_DELETE = `${BASE_URL}/delete`

export const GET_REPLIES = `${BASE_URL}/replies`
