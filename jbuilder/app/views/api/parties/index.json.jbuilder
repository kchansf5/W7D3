json.array! @parties do |party|
  json.name party.name
  json.location party.location
  json.guests(party.guests) do |guest|
    json.name guest.name
    json.age guest.age
    json.favorite_color guest.favorite_color
  end
end
