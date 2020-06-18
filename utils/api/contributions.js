// https://stackoverflow.com/questions/18262288/finding-total-contributions-of-a-user-from-github-api

import ContributionsTransformer from '~/transformers/Contributions'

export async function getContributions(token, username, year) {
  let years = []
  let from = null
  let to = null
  const headers = {
    Authorization: `bearer ${token}`
  }
  if (!year) {
    years = await getYears(token)
    from = new Date(years[0], 0, 1).toISOString()
    to = new Date(years[0], 11, 31).toISOString()
  } else {
    from = new Date(year, 0, 1).toISOString()
    to = new Date(year, 11, 31).toISOString()
  }

  const body = {
    query: `query {
        user(login: "${username}") {
          name
          avatarUrl
          id
          followers {
            totalCount
          }
          contributionsCollection(from: "${from}", to: "${to}") {
            contributionCalendar {
              colors
              totalContributions
            }
          }
        }
      }`
  }
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers
  })
  const data = await response.json()
  if (data.errors && data.errors.length) {
    return data
  } else {
    const parsedData = ContributionsTransformer.fetch(data.data)
    return parsedData
  }
}

export async function getYears(token, username) {
  const headers = {
    Authorization: `bearer ${token}`
  }
  const body = {
    query: `query {
        user(login: "${username}") {
          contributionsCollection {
            contributionYears
          }
        }
      }`
  }
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers
  })
  const { data } = await response.json()
  return data.user.contributionsCollection.contributionYears
}
