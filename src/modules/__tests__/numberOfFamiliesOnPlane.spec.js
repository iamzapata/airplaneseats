import numberOfFamiliesOnPlane from 'src/modules/numberOfFamiliesOnPlane'

describe('numberOfFamiliesOnPlane', () => {
  it('errors if is not defined', () => {
    expect(numberOfFamiliesOnPlane).toBeDefined()
  })

  it('throws error if passed in invalid arguments', () => {
    expect(() => numberOfFamiliesOnPlane()).toThrow(TypeError)
  })

  it('returns 2 for 1 row and no reserved seats', () => {
    const rows = 1
    const reservedSeats = ''

    expect(numberOfFamiliesOnPlane(rows, reservedSeats)).toBe(2)
  })

  it('returns 4 for 2 rows and no reserved seats', () => {
    const rows = 2
    const reservedSeats = ''

    expect(numberOfFamiliesOnPlane(rows, reservedSeats)).toBe(4)
  })

  it('returns 20 for 10 rows and no reserved seats', () => {
    const rows = 10
    const reservedSeats = ''

    expect(numberOfFamiliesOnPlane(rows, reservedSeats)).toBe(20)
  })

  it('returns 2 for 2 rows and 1A 2F 1C', () => {
    const rows = 2
    const reservedSeats = '1A 2F 1C'

    expect(numberOfFamiliesOnPlane(rows, reservedSeats)).toBe(2)
  })

  it('returns 1 for 1 row and C1 H1', () => {
    const rows = 1
    const reservedSeats = '1C 1H'

    expect(numberOfFamiliesOnPlane(rows, reservedSeats)).toBe(1)
  })

  it('returns 10 for 7 rows and 1C 1D 1H 2F 2G 2H 2K 2J 3A 3K 4E 5A 6K', () => {
    const rows = 7
    const reservedSeats = '1C 1D 1H 2F 2G 2H 2J 2K 3A 3K 4E 5A 6K'

    expect(numberOfFamiliesOnPlane(rows, reservedSeats)).toBe(6)
  })
})