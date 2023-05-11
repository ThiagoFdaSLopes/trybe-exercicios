import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
container = selector.css("div.image_container a::attr(href)").getall()

for url in selector.css("div.image_container a::attr(href)").getall():
    request_thumn = requests.get("http://books.toscrape.com/" + url)
    thumbs_selector = Selector(text=request_thumn.text)
    titles = thumbs_selector.css("div.product_main h1")
    print(titles.get())
