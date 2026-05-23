export interface NavItem {
  label: string
  href: string
}

export interface Stats {
  users: number
  platforms: number
  guides: number
  reviews: number
}

export interface Platform {
  id: string
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  pros: string[]
  cons: string[]
  link: string
}