import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import RenderReservations from './RenderReservations'

export default function ReservationsPage() {

  return (
    <>
      <NavBar/>
      <RenderReservations/>
    </>
  )
}
