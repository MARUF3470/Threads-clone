import vine from '@vinejs/vine'
export const commentSchema = vine.object({
  content: vine.string().trim().minLength(5),
  post_id: vine.number(),
  toUserId: vine.number()
})
