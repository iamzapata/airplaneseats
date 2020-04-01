/**
 * This function returns a an array containing seat configurations
 * for famiiles of four members. Members are preferably seating in groups
 * of 4, so the DEFG takes precedence. If DEFG is not available, than
 * family members can be arranged in pairs, but must be separated by an isle.
 *
 * @param {*} rows The rows that the airplane has
 * @param {*} reservedSeatsList The list of seats that have been reserved
 */
function familiesSeatConfiguration(rows, reservedSeatsList) {
  if (!rows || typeof reservedSeatsList === 'undefined') {
    throw new TypeError('Missing arguments: One or more arguments are missing')
  }

  const reservedSeats = reservedSeatsList.split(/[\s-,|]/)
  const noSeatsReserved = !reservedSeatsList.length

  // ABC| |DEFG| |HJK
  //  BC| |DEFG| |HJ
  const availableOptionsSequence = [['BCDE'], ['DEFG'], ['FGHJ']]

  // Full plain is avaible for configuration. This means
  // that all families are arranged in the DEFG configuration.
  if (noSeatsReserved)
    return [...Array(rows).keys()].map(row => ({
      row,
      seatConfiguration: ['DEFG'],
      count: 1,
    }))

  const getFamilies = (row, groups) => {
    const seatConfiguration = groups.toString()

    if (!seatConfiguration) return { row, seatConfiguration: [''], count: 0 }

    if (seatConfiguration.includes('DEFG'))
      return { row, seatConfiguration: ['DEFG'], count: 1 }

    if (groups.length === 1)
      return { row, seatConfiguration: [seatConfiguration], count: 1, sup: 's' }

    return {}
  }

  const rowsList = []
  for (let i = 1; i <= rows; i += 1) rowsList.push(i)

  const families = []

  rowsList.forEach(row => {
    let remainingSeatOptions = [...availableOptionsSequence]

    reservedSeats.forEach(seat => {
      const [, seatRow, seatLetter] = seat.split(/(\d+)([a-zA-Z])/)

      // Only check for conflicts in seats in the correspoinding row.
      if (row === parseInt(seatRow, 10)) {
        // 'BCDE', 'DEFG' or 'FGHJ'
        availableOptionsSequence.forEach(option => {
          // Conflict bewteen available options and current seat
          if (option.toString().includes(seatLetter)) {
            // We need to remove any seat configuration that
            // has conflicts with reserved seats.
            remainingSeatOptions = remainingSeatOptions.filter(
              sup => !sup.toString().includes(seatLetter),
            )
          }
        })
      }
    })

    families.push(getFamilies(row, remainingSeatOptions))
  })

  return families
}

export default familiesSeatConfiguration
