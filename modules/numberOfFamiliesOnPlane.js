function numberOfFamiliesOnPlane(rows, reservedSeatsList) {
  if (!rows || typeof reservedSeatsList === undefined) {
    throw new TypeError('Missing arguments: One or more arguments are missing')
  }

  const reservedSeats = reservedSeatsList.split(/[\s-,|]/)
  const noSeatsReserved = !reservedSeatsList.length

  const availableOptions = [['BCDE'], ['DEFG'], ['FGHJ']]

  if (noSeatsReserved) return rows * 2

  const getFamilies = groups => {
    const groupsString = groups.toString()

    if (!groupsString) return 0

    if (groupsString.includes('DEFG')) return 1

    if (groupsString.includes('BCDE') && groupsString.includes('FGHJ')) return 2

    if (groups.length === 1) return 1
  }

  const rowsList = []
  for (let i = 1; i <= rows; i++) rowsList.push(i)

  let families = 0

  rowsList.forEach(row => {
    let availableOptionsStack = [...availableOptions]

    reservedSeats.forEach(seat => {
      const [, seatRow, seatLetter] = seat.split(/(\d+)([a-zA-Z])/)

      if (row === parseInt(seatRow)) {
        availableOptions.forEach(option => {
          if (option.toString().includes(seatLetter)) {
            availableOptionsStack = availableOptionsStack.filter(
              sup => !sup.toString().includes(seatLetter),
            )
          }
        })
      }
    })

    families += getFamilies(availableOptionsStack)
  })

  return families
}

export default numberOfFamiliesOnPlane
