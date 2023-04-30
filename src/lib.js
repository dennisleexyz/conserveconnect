const haversine = require('haversine')

let user = {
	name: "John Treo",
	email: "rontreo@cpp.edu",
	eventPref: new Set(["health"]),
	sizePref: [6, 9],
	defaultCoords:[33.980163, -117.328771],
}

export function intersection(s, t) {
  return new Set([...s].filter(x => t.has(x)))
}

export function filter(events, threshold) {
  return events.filter(event => haversine(user.defaultCoords, event.coords, {threshold: threshold, unit: 'mile', format: '[lat,lon]'}))
}

export function sortTag(events, tags) {
  let n = Math.min(tags.size, Math.max([...events].map(event => event.tags.size)))
  let matches = []
  for (let i = 0; i <= n; i++)
    matches[i] = new Set()
  events.forEach(event => matches[intersection(tags, event.tags).size].add(event))
  let sorted = new Set()
  for (let i = n; i >= 0; i--)
    matches[i].forEach(event => sorted.add(event))
  return sorted
}
