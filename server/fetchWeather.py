import requests

api_key = "cadcac0a6f0d7364dcb0d91ac3622abb"


def fetchData(city):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return -1
