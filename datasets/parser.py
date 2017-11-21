# needs to parse into format:
# {
#     2000: {
#         year: 2000,
#         Africa: 10,
#         Asia: 20,
#         North America: 30
#     },
#     2001: {
#         year: 2001,
#         Africa: 11,
#         Asia: 22,
#         North America: 33
#     }
# }

import csv

template_dict = {}
data_dict = {}

with open('raw_csv_data.csv', 'rt') as f:
    reader = csv.reader(f)
    for row in reader:
        if row[0] == "Country Name":
            for ind, el in enumerate(row):
                if el == "Country Name":
                    next
                else:
                    data_dict[el] = {}
                    template_dict[ind] = el
        else:
            region = row[0]
            for ind, el in enumerate(row):
                data_dict[template_dict[ind]] = el
    print(data_dict)
