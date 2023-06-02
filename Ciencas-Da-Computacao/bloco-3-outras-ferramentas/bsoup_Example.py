import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)

html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

title = soup.title

print(title)

print(type(title))

print(title.name)

footer = soup.footer

print(footer['class'])

print(title.string)
