import csv
import math

with open('PokemonStatus.csv', mode="r", encoding="utf-8") as f:
    reader = csv.reader(f)
    pokedex = [row for row in reader]

Garchomp = pokedex[529]
Cinderace = pokedex[948]

# 実数値の計算
attack = (int(Garchomp[8]) + 52) * 1.1
deffence = (int(Cinderace[9]) + 20)
print(attack, deffence)
# 基本の計算
damage_base = 22 * 120
x = math.floor(damage_base * attack / deffence)
y = math.floor(x / 50 + 2)
# 乱数一覧
ransu = [math.floor(y*i/100) for i in range(85,101,1)]
z = sorted(list(set(ransu)))
# タイプ一致補正
damage = [math.floor(i * 1.5) for i in z]
print(damage)

# 144, 145, 147, 148, 150, 151, 153, 154, 157, 159, 160, 162, 163, 165, 166, 169

damage = math.floor(
    (math.floor(
        math.floor(
            (22*120*(int(Garchomp[8])+52)*1.1)/(int(Cinderace[9])+20))/50+2))*1.5)
damage_max = damage
damage_mini = math.floor(damage*0.85)
print(damage_max, damage_mini)
print((int(Garchomp[8]))+52)

# def fiveFloor(num):

def get_status(poke_name):
    for row in pokedex:
        if poke_name == row[1]:
            print(row)
            return row


def damage_calc(attack_name, deffence_name, move):
    # 攻撃と防御のポケモンのデータを取得
    attack_poke = get_status(attack_name)
    deffence_poke = get_status(deffence_name)

    # ここに色々実装していく
    # return damage


# damage_calc("ゲッコウガ", "ニンフィア", "れいとうビーム")
get_status("ゲッコウガ")

