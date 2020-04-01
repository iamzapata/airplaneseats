import familiesSeatConfiguration from 'modules/familiesSeatConfiguration'

const getTotalFamiliesCount = families =>
  families.reduce((accum, current) => accum + current.count, 0)

describe('familiesSeatConfiguration', () => {
  it('errors if is not defined', () => {
    expect(familiesSeatConfiguration).toBeDefined()
  })

  it('throws error if passed in invalid arguments', () => {
    expect(() => familiesSeatConfiguration()).toThrow(TypeError)
  })

  it('returns 2 for 1 row and no reserved seats', () => {
    const rows = 1
    const reservedSeats = ''
    const families = familiesSeatConfiguration(rows, reservedSeats)

    expect(getTotalFamiliesCount(families)).toBe(1)
  })

  it('returns 4 for 2 rows and no reserved seats', () => {
    const rows = 2
    const reservedSeats = ''

    const families = familiesSeatConfiguration(rows, reservedSeats)

    expect(getTotalFamiliesCount(families)).toBe(2)
  })

  it('returns 20 for 10 rows and no reserved seats', () => {
    const rows = 10
    const reservedSeats = ''

    const families = familiesSeatConfiguration(rows, reservedSeats)

    expect(getTotalFamiliesCount(families)).toBe(10)
  })

  it('returns 2 for 2 rows and 1A 2F 1C', () => {
    const rows = 2
    const reservedSeats = '1A 2F 1C'

    const families = familiesSeatConfiguration(rows, reservedSeats)

    expect(getTotalFamiliesCount(families)).toBe(2)
  })

  it('returns 1 for 1 row and C1 H1', () => {
    const rows = 1
    const reservedSeats = '1C 1H'

    const families = familiesSeatConfiguration(rows, reservedSeats)

    expect(getTotalFamiliesCount(families)).toBe(1)
  })

  it('returns 10 for 7 rows and 1C 1D 1H 2F 2G 2H 2K 2J 3A 3K 4E 5A 6K', () => {
    const rows = 7
    const reservedSeats = '1C 1D 1H 2F 2G 2H 2J 2K 3A 3K 4E 5A 6K'
    const expectedSeatConfiguration = {
      1: [''],
      2: ['BCDE'],
      3: ['DEFG'],
      4: ['FGHJ'],
      5: ['DEFG'],
      6: ['DEFG'],
      7: ['DEFG'],
    }

    const families = familiesSeatConfiguration(rows, reservedSeats)

    families.forEach(family => {
      const { seatConfiguration } = family
      const expectedSeats = expectedSeatConfiguration[family.row]

      expect(seatConfiguration).toEqual(expectedSeats)
    })

    expect(getTotalFamiliesCount(families)).toBe(6)
  })
})
