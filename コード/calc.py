import csv
import json

with open('ranking.csv', mode='r', encoding='utf-8') as f:
    reader = csv.reader(f)
    l = [row for row in reader]
    title = l[0]
    
    L = [list(x) for x in zip(*l)]

ranking = {}
for j in range(3, 17, 2):

    dic = {}
    for i in range(1, 20):
        if L[2][i] == '２年以上':
            point = 7
        elif L[2][i] == '１年〜２年未満':
            point = 6
        elif L[2][i] == '半年〜１年未満':
            point = 5
        else:
            point = 4

        if L[j][i] in dic:
            dic[L[j][i]]['point'] += point
            dic[L[j][i]]['comment'].append(L[j+1][i])
        else:
            dic[L[j][i]] = {}
            dic[L[j][i]]['point'] = point
            dic[L[j][i]]['comment'] = [L[j+1][i]]

        
    
    ranking[L[j][0]] = dic

print(ranking)
text = json.dumps(ranking)

with open('result.json', mode='w', encoding='utf-8') as f:
    json.dump(ranking, f, indent=4, ensure_ascii=False)

# for l in ranking:
#     print(l)
#     print(sorted(ranking[l].items(), key=lambda i: i[1], reverse=True))
