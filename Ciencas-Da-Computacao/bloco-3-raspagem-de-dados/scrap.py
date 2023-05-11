import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector.css("div.image_container").getall()[0])
