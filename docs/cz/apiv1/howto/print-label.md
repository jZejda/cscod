---
title: Vlastní tisk štítků
description: Jak vytvořit objednávku s vlastním tiskem štítků

head:
  - - meta
    - name: description
      content: Jak vytvořit objednávku s vlastním tiskem štítků
  - - meta
    - name: keywords
      content: objednávka tisk štítků
      
editLink: true
outline: deep
lastUpdated: true
---

# Vlastní tisk štítků

## Typ svozu

Pokud si přeje klient vlastní tisk štítků, kterými balíky sám polepí a následně v jednorázové nebo pravidelné objednávce svozu kurýrovy předá, je potřeba zvolit typ `OCCASIONAL`.

U jednorázové objednávky je používán typ `ONDEMAND`. Značí jednorázovou objednávku z adresy, která nemusí být smluvní. Kurýr na tuto adresu přijede s připraveným štítkem, tímto opatří přepravovaný balík.

---

**Předpoklad k tomu aby bylo možné vytvářet zásilky s vlastním tiskem štítků**

- pod uživatelem daného `x-apikey` musí být vytvořena svozová adresa s aktivní přepravní službou.
    - adresa musí být aktivní
    - ke svozové adrese jsou registrování smluvní přepravci (zajistí se automaticky při vytváření svozové adresy nebo dodatečně kontaktování konkrétního dopravce do)
    - na adrese může být naplánován pravidelný svoz
- zákazník musí mít aktivní smlouvu s možností platby na fakturu
  
::: warning 💡 VYTVOŘENÍ OBJEDNÁVKY
**Při volání metody `create` je pak potřeba uvést právě tyto parametry:**

- platba na fakturu
- typ svozu
- ID svozové adresy
- kód přepravní společnosti registrované na ID svozové adrese
:::

## Kde zkontroluji náležitosti

Kontrolu náležitostí mohu provést v **Manažéru zásilek** ([app.zaslat.cz](https://app.zaslat.cz)).

Zákazník musí mít platnou smlouvu kterou mohu zkuntrolovat na stránce `Přehled` U své firmy vidím smlouvu `Profi`, `Flexi` … .

Svozovou adresu mohu zkontrolovat na stránce `Svozy → Svozové adresy`, nebo tamtéž vytvořit novou svozovou adresu. U každé svozové adresy je dostupné **Nastavení dopravců**, 
které zobrazuje kteří přepravci jsou aktivní případně u kterých je naplánován pravidelný svoz. Samotné _ID svozové adresy_ naleznu na v závorce za názvem svozové adresy (_ID 123456789_). 
Do API volání je nutné použít uvedené **ID svozové adresy** a textové označení přepravní společnosti.

### Export zásilek ze svozové adresy s vlastním tiskem štítků

::: details Příklad `json` objektu volání order create s vlastním tiskem stítku {open}
```json
{
  "payment_type": "INVOICE", // [!code highlight] [!code focus]
  "currency": "CZK",
  "payer": {
    ...
  },
  "shipments": [
    {
      "from": { // [!code highlight] [!code focus]
        "id": 123654 // [!code highlight] [!code focus]
      }, // [!code highlight] [!code focus]
      "to": {
        .....
      },
      "type": "OCCASIONAL",// [!code highlight] [!code focus]
      "packages": [
        {
          .....
        }
      ],
      "carrier": "DPD", // [!code highlight] [!code focus]
      "currency": "CZK",
      "pickup_date": "2023-11-30",
    }
  ],
}
```
:::

**Nutné údaje volání metody create**

| Parametr | Typ | Popis | Povinný |
| --- | --- | --- | --- |
| `payment_type` | string | platba na fakturu = `INVOICE` | Ano |
| `shipments.[].type` | string | příležitostný svoz = `OCCASIONAL`  | Ano |
| `shipments.[].from.id` | int | ID aktivní svozové adresy | Ano |
| `shipments.[].carrier**` | string(20) | kód přepravní společnosti podle číslelníku [číselníku](https://www.zaslat.cz/dokumentace/api#carriers) | Ano |

::: tip 💡 Tip 
\* v objektu `from` neuvádějte další parametry krom `id`

** přepravce musí být na dané ID svozové adresy aktivován
:::

## Jak získám štítek

Po dokončení exportu zásilky, získáte identifikátor zásilky `tracking_number` na základě kterého můžete dle [dokumentace získat štítek](https://www.zaslat.cz/dokumentace/api). Štítky je možné získat hromadně i z více různých zásilek. V rámci API volání můžete specifikovat různé další parametry dle formátu tiskárny štítků a pod.

V případě exportu zásilky s vlastním tiskem štítků se ještě tento štítek posílá v příloze e-mailu objednateli. Oproti API volání, v e-mailu obdržíte pouze štítky, které se vztahují k balíkům zásilky.

