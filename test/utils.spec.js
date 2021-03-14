const { expect } = require('chai')
const {
  addPrefix,
  deletePrefix,
  getCalendar,
  getMonthWeek,
  getWeek,
  getYearWeek,
  getDays,
  getHours,
  getMinutes,
  getSeconds
} = require('../lib')

describe('Test addPrefix Function', () => {
  it('It should be return 01 when parameter is 1', () => {
    expect(addPrefix(1)).to.equal('01')
  })
  it('It should be return 10 when parameter is 10', () => {
    expect(addPrefix(10)).to.equal('10')
  })
})

describe('Test deletePrefix Function', () => {
  it('It should be return 1 when parameter is 01', () => {
    expect(deletePrefix('01')).to.equal(1)
  })

  it('It should be return 10 when parameter is 10', () => {
    expect(deletePrefix('10')).to.equal(10)
  })
})

describe('Test getCalendar Function', () => {
  it('It should return an array that contains 3 items', () => {
    expect(getCalendar('2020-02-01', '2020-02-03')).to.deep.equal([
      { year: 2020, month: 1, day: 1, week: 6 },
      { year: 2020, month: 1, day: 2, week: 0 },
      { year: 2020, month: 1, day: 3, week: 1 }
    ])
  })

  it('It should return an array that contains 2 items', () => {
    expect(getCalendar('2020-02-29', '2020-03-01')).to.deep.equal([
      { year: 2020, month: 1, day: 29, week: 6 },
      { year: 2020, month: 2, day: 1, week: 0 }
    ])
  })
})

describe('Test getMonthWeek Function', () => {
  it('It should be return 2 when parameter are [2020, 2, 7]', () => {
    expect(getMonthWeek(2020, 2, 7)).to.equal(2)
  })

  it('It should be return 3 when parameter are [2020, 2, 9]', () => {
    expect(getMonthWeek(2020, 2, 9)).to.equal(3)
  })
})

describe('Test getWeek Function', () => {
  it('It should be return 6 when parameter is 2020-02-01', () => {
    expect(getWeek('2020-02-01')).to.equal(6)
  })

  it('It should be return 6 when parameter is 2020/02/01', () => {
    expect(getWeek('2020/02/01')).to.equal(6)
  })

  it('It should be return 6 when parameter is 1580515200000', () => {
    expect(getWeek(1580515200000)).to.equal(6)
  })
})

describe('Test getYearWeek Function', () => {
  it('It should be return 5 when parameter are [2020, 2, 1]', () => {
    expect(getYearWeek(2020, 2, 1)).to.equal(5)
  })

  it('It should be return 7 when parameter are [2020, 2, 10]', () => {
    expect(getYearWeek(2020, 2, 10)).to.equal(7)
  })
})

describe('Test getDays Function', () => {
  it('It should be return 2 when parameter are "2020-02-01T10:45:20+0000" && "2020-02-03T12:15:50+0000"', () => {
    expect(getDays('2020-02-01T10:45:20+0000', '2020-02-03T12:15:50+0000')).to.equal(2)
  })

  it('It should be return 2 when parameter are "2020-02-01T10:45:20" && "2020-02-03T12:15:50"', () => {
    expect(getDays('2020-02-01T10:45:20', '2020-02-03T12:15:50')).to.equal(2)
  })

  it('It should be return 2 when parameter are "2020-02-01T10:45" && "2020-02-03T12:15"', () => {
    expect(getDays('2020-02-01T10:45', '2020-02-03T12:15')).to.equal(2)
  })

  it('It should be return 2 when parameter are "2020-02-01" && "2020-02-03"', () => {
    expect(getDays('2020-02-01', '2020-02-03')).to.equal(2)
  })
})

describe('Test getHours Function', () => {
  it('It should be return 1 when parameter are "2020-02-01T10:45:20+0000" && "2020-02-03T12:15:50+0000"', () => {
    expect(getHours('2020-02-01T10:45:20+0000', '2020-02-03T12:15:50+0000')).to.equal(1)
  })

  it('It should be return 1 when parameter are "2020-02-01T10:45:20" && "2020-02-03T12:15:50"', () => {
    expect(getHours('2020-02-01T10:45:20', '2020-02-03T12:15:50')).to.equal(1)
  })

  it('It should be return 1 when parameter are "2020-02-01T10:45" && "2020-02-03T12:15"', () => {
    expect(getHours('2020-02-01T10:45', '2020-02-03T12:15')).to.equal(1)
  })

  it('It should be return 0 when parameter are "2020-02-01" && "2020-02-03"', () => {
    expect(getHours('2020-02-01', '2020-02-03')).to.equal(0)
  })
})

describe('Test getMinutes Function', () => {
  it('It should be return 30 when parameter are "2020-02-01T10:45:20+0000" && "2020-02-03T12:15:50+0000"', () => {
    expect(getMinutes('2020-02-01T10:45:20+0000', '2020-02-03T12:15:50+0000')).to.equal(30)
  })

  it('It should be return 30 when parameter are "2020-02-01T10:45:20" && "2020-02-03T12:15:50"', () => {
    expect(getMinutes('2020-02-01T10:45:20', '2020-02-03T12:15:50')).to.equal(30)
  })

  it('It should be return 30 when parameter are "2020-02-01T10:45" && "2020-02-03T12:15"', () => {
    expect(getMinutes('2020-02-01T10:45', '2020-02-03T12:15')).to.equal(30)
  })

  it('It should be return 0 when parameter are "2020-02-01" && "2020-02-03"', () => {
    expect(getMinutes('2020-02-01', '2020-02-03')).to.equal(0)
  })
})

describe('Test getSeconds Function', () => {
  it('It should be return 30 when parameter are "2020-02-01T10:45:10+0000" && "2020-02-03T12:15:20+0000"', () => {
    expect(getSeconds('2020-02-01T10:45:20+0000', '2020-02-03T12:15:50+0000')).to.equal(30)
  })

  it('It should be return 30 when parameter are "2020-02-01T10:45:20" && "2020-02-03T12:15:50"', () => {
    expect(getSeconds('2020-02-01T10:45:20', '2020-02-03T12:15:50')).to.equal(30)
  })

  it('It should be return 0 when parameter are "2020-02-01T10:45" && "2020-02-03T12:15"', () => {
    expect(getSeconds('2020-02-01T10:45', '2020-02-03T12:15')).to.equal(0)
  })

  it('It should be return 0 when parameter are "2020-02-01" && "2020-02-03"', () => {
    expect(getSeconds('2020-02-01', '2020-02-03')).to.equal(0)
  })
})
