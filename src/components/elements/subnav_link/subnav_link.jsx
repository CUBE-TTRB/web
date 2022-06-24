import Link from 'next/link'

export default function subnav_link({name, link, event}) {
  return (
    <Link href={link}><li onClick={event}>{name}</li></Link>
  )
}
