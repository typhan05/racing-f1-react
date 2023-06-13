import puppeteer from 'puppeteer'
import fs from 'fs'

export const getYears = (): string[] => {
  const startYear = 2013 // start year 2013 - Present year
  const now = new Date()
  const currentYear = now.getFullYear()
  const yearLen = currentYear - startYear + 1
  return Array.from({ length: yearLen }).map((_, idx) => (currentYear - idx).toString())
}

const scraperData = async () => {
  const url = 'https://www.formula1.com/en/results.html/'
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  let races = <any>[]
  let drivers = <any>[]

  for (const value of getYears()) {
    let objRace = <any>{}
    let objDriver = <any>{}

    //goto page races
    await page.goto(url + value + '/races.html')
    const racesData = await page.evaluate(() => {
      const racesRows = Array.from(document.querySelectorAll('.resultsarchive-table tbody tr'))
      const data = racesRows.map((race: any) => ({
        nation: race.querySelector('td:nth-child(2)').innerText,
        date: race.querySelector('td:nth-child(3)').innerText,
        driver:
          race.querySelector('td:nth-child(4) span:nth-child(1)').innerText +
          race.querySelector('td:nth-child(4) span:nth-child(2)').innerText,
        team: race.querySelector('td:nth-child(5)').innerText,
        laps: race.querySelector('td:nth-child(6)').innerText,
        time: race.querySelector('td:nth-child(7)').innerText
      }))
      return data
    })
    objRace[value] = racesData
    races.push(objRace)

    //goto page drivers
    await page.goto(url + value + '/drivers.html')
    const driverData = await page.evaluate(() => {
      const driverRows = Array.from(document.querySelectorAll('.resultsarchive-table tbody tr'))
      const data = driverRows.map((driver: any) => [
        driver.querySelector('td:nth-child(3) span:nth-child(1)').innerText +
          driver.querySelector('td:nth-child(3) span:nth-child(2)').innerText,
        parseInt(driver.querySelector('td:nth-child(6)').innerText)
      ])
      return data
    })
    objDriver[value] = driverData
    drivers.push(objDriver)
  }

  await browser.close()

  /* Races data */
  fs.writeFile('src/data/races.json', JSON.stringify(races), (err: any) => {
    if (err) throw err
    console.log('Successfully Races saved')
  })

  /* Drivers data */
  fs.writeFile('src/data/drivers.json', JSON.stringify(drivers), (err: any) => {
    if (err) throw err
    console.log('Successfully Drivers saved')
  })
}
scraperData()
