import PackageBookingCard from './PackageBookingCard/PackageBookingCard'

export default function BookingCard({bookingData}) {
  return (
    <>
        {
            bookingData.Booking_Type === "Package" &&
            <PackageBookingCard bookingData={bookingData} />
        }
    </>
  )
}
