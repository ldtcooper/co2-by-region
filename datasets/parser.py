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
import json

ind_to_year = {}
data_dict = {}

with open('raw_csv_data.csv', 'rt') as f:
    reader = csv.reader(f)
    for row in reader:
        if row[0] == "Country Name":
            for ind, el in enumerate(row):
                if el == "Country Name":
                    continue
                else:
                    yr = int(el)
                    data_dict[yr] = {"year": yr}
                    ind_to_year[ind] = yr
        else:
            region = row[0]
            for ind, datapoint in enumerate(row):
                if ind == 0:
                    continue
                else:
                    data_year = ind_to_year[ind]
                    data_dict[data_year][region] = datapoint

array_of_objects = []
for k in data_dict.keys():
    array_of_objects.append(data_dict[k])

print(array_of_objects)
