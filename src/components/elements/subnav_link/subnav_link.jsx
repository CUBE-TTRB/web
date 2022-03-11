import React from 'react'
import Link from 'next/link'

export default function subnav_link({name, link}) {
  return (
    <Link href={link}><li>{name}</li></Link>
  )
}
