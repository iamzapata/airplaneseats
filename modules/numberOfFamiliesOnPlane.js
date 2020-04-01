function numberOfFamiliesOnPlane(rows, reservedSeatsList) {
  if (!rows || typeof reservedSeatsList === undefined) {
    throw new TypeError('Missing arguments: One or more arguments are missing')
  }

  const reservedSeats = reservedSeatsList.split(/[\s-,|]/)
  const noSeatsReserved = !reservedSeatsList.length

  const availableOptions = [['BCDE'], ['DEFG'], ['FGHJ']]

  if (noSeatsReserved)
    return [
      {
        fullyAvailable: true,
        seatConfiguration: ['DEFG'],
        count: rows * 2,
      },
    ]

  const getFamilies = (row, groups) => {
    const seatConfiguration = groups.toString()

    if (!seatConfiguration) return { row, seatConfiguration, count: 0 }

    if (seatConfiguration.includes('DEFG'))
      return { row, seatConfiguration: ['DEFG'], count: 1 }

    if (
      seatConfiguration.includes('BCDE') &&
      seatConfiguration.includes('FGHJ')
    )
      return { row, seatConfiguration: ['BCDE', 'FGHJ'], count: 2 }

    if (groups.length === 1)
      return { row, seatConfiguration: [seatConfiguration], count: 1, sup: 's' }
  }

  const rowsList = []
  for (let i = 1; i <= rows; i++) rowsList.push(i)

  let families = []

  rowsList.forEach(row => {
    let remainingSeatOptions = [...availableOptions]

    reservedSeats.forEach(seat => {
      const [, seatRow, seatLetter] = seat.split(/(\d+)([a-zA-Z])/)

      if (row === parseInt(seatRow)) {
        availableOptions.forEach(option => {
          if (option.toString().includes(seatLetter)) {
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

export default numberOfFamiliesOnPlane
