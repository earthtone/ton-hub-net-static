import { ref } from '@vue/composition-api'
import addressData from '@/data/address.data.json'
import educationData from '@/data/education.data.json'
import socialLinks from '@/data/social-links.data.json'

export function usePersonalData () {
  const address = ref(addressData)
  const education = ref(educationData)
  const links = ref(socialLinks)
  const name = ref('Tonio Hubilla')

  return {
    name,
    address,
    education,
    links
  }
}
