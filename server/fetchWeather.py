import requests
import creds


def fetchData(city):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={creds.api_key}"

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return -1
