import requests

def get_weather_data():
    # Fetch weather data from an API and return it
    api_key = "827fabc923b6cb24631d89b6449896c8"
    city = "London"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    response = requests.get(url)
    return response.json()