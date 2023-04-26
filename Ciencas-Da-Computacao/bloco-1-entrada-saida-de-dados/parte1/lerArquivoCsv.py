import json

with open("list.json") as file:
    categories = {}
    listRead = json.load(file)
    for book in listRead:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    print(categories)
