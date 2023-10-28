import requests
import creds


def get_current_weather(city):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={creds.api_key}"

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return -1


def get_daily_forecast(city, num_days=5):
    url = f"https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={creds.api_key}&cnt={num_days * 8}"

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return -1


def get_weekly_forecast(city):
    url = f"https://api.openweathermap.org/data/2.5/forecast/daily?q={city}&appid={creds.api_key}&cnt=7"

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return -1
