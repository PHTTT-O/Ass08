export interface VenueItem {
  _id: string
  name: string
  address: string
  province: string
  postalcode: string
  tel: string
  picture: string
  dailyrate: number
}

export interface VenueJson {
  success: boolean
  count: number
  data: VenueItem[]
}