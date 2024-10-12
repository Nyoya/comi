export type Recipe = {
  id: string
  user_id: number
  bean_id: number
  description: string
  star: number
  created_at: string
  updated_at: string
  t_beans: Bean
}

export type Bean = {
  id: string
  user_id: number
  name: string
  origin: string
  process: string
  roastad: string
  star: number
  roasted_at?: string
  created_at: string
  updated_at: string
}