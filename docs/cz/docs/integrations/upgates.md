---
title: UpGates
description: Upgates návod na zprovoznění pluginu

head:
  - - meta
    - name: description
      content: Upgates návod na zprovoznění pluginu
  - - meta
    - name: keywords
      content: upgates integrace
      
editLink: true
outline: deep
lastUpdated: true
---

# UpGates eshop

## Návod na spuštění integrace Upgates s Manažerem zásilek

::: info NÁVOD
➡️ Chcete si stáhnout návod k vám do počítače? PDF s návodem najdete zde:
::: 

S naší integrací nemusíte objednávky přepravy zásilek do Zaslat zadávat ručně, stačí si na pár kliknutí nastavit propojení a objednávky odbavovat jedním tahem.

::: tip TIP 
Díky tomuto řešení odpadá veškeré stahování a nahrávání CSV souborů nebo ruční editace souborů v tabulkovém procesoru.
:::
Díky integraci se vám údaje o zásilkách z Upgates nahrají do Manažeru zásilek automaticky. A co více, pokud bude v datech nějaký nedostatek (například zákazník vyplní chybné telefonní číslo), tak můžete tento nedostatek přímo v Manažeru zásilek napravit.

Následně lze vše naráz objednat, objednat jen některé zásilky nebo snadno změnit dopravce. Možností je mnoho.

## Nastavení integrace

### Aktivace pluginu do Upgates

Navštivte webové stránky Upgates na následující adrese:[**https://doplnky.upgates.cz/detail/zaslat**](https://doplnky.upgates.cz/detail/zaslat)

Dostanete se na stránku pluginu Zaslat, který si nyní aktivujte (Obr. 1).


_Obrázek 1: Karta pluginu Zaslat v Upgates_

Plugin Zaslat se vám nahraje přímo do administrace doplňků ve vašem e-shopu od Upgates. Tady opět klikněte na tlačítko Aktivovat (Obr. 2).


## **Nastavení v Zaslat**

Zvolte si libovolný Název této integrace (Obr. 5, krok 1). V řádku **Stahovat objednávky** (Obr. 5, krok 2) zvolte jednu z možností - **Všechny objednávky**, **Jen ve stavu Zaslat**, **Jen ve stavu Zpracovává se**, nebo si případně můžete definovat **Vlastní stav**.

Pokud máte nastavený v administraci Upgates vlastní stav Zaslat, pak zde zvolte možnost **Jen ve stavu Zaslat** pro stahování pouze objednávek v tomto stavu.

V Manažeru zásilek si poté zvolte **Výchozí adresu odesílatele** (Obr. 5, krok 3) z vašeho adresáře. Na vybrané adrese si dopravce zásilky vyzvedne. Pokud budete chtít u některé zásilky nastavit adresu odesílatele jinou, nevadí, změnu můžete provést později.

Pokud má každá vaše zásilka jiný rozměru a váhu, můžete tuto možnost ponechat prázdnou a rozměry poté doplnit ručně. Pokud posíláte všechny zásilky stejného tvaru a váhy, zvolte si nyní váš požadovaný rozměr v řádku **Výchozí balík** (Obr. 5, krok 4). V možnostech si vybíráte z vašich uložených Šablon zásilek.

Na závěr klikněte na tlačítko **Uložit změny** (Obr. 5, krok 5).

## **Další nastavení v Upgates**

### **Zapnutí mapy výdejních míst**

Abyste mohli na svém e-shopu využít nejen službu dodání na adresu, ale i do výdejního místa (boxu nebo prodejny), je nutné ještě nastavit výběr dopravců, díky kterým se ve vašem e-shopu při objednávání dopravy zobrazí naše mapa výdejních míst.

**Zaslat v současné době nabízí v Česku více než 33 000 sběrných a výdejních míst. To je nejvíce na českém trhu v jediném uživatelském účtu.**

Otevřete si v levém menu záložku **Doplňky** (Obr. 6, krok 1), dále možnost **Vlastní konverzní kódy** (Obr. 6, krok 2). Do textového pole "Kód je umístěn před tagem body" vložte následující kód:

```javascript
<script>(function(d){var s=d.createElement('script');s.async=true;s.src="https://app.zaslat.cz/map/upgates.js";d.head.appendChild(s);})(document)</script>
```

Na závěr uložte oranžovým tlačítkem Uložit (Obr. 6, krok 4).

## Nastavení stavů objednávek

Aby se nepřenášely do Zaslat všechny objednávky z vašeho Upgates, ale jen ty, které chcete přes Zaslat skutečně poslat, musíte si v Upgates nastavit vlastní Stav objednávky. V levém menu klikněte na položku **Nastavení** (Obr. 7, krok 1), zvolte možnost **Objednávky** (Obr. 7, krok 2), poté klikněte v menu na možnost **Stavy** (Obr. 7, krok 3) a v pravém horním roku klikněte na tlačítko **Nový** (Obr. 7, krok 4).

_Obrázek 7: Nastavení stavů objednávek_

Do políčka Název (Obr. 8, krok 1) vepište Zaslat a klikněte na tlačítko Uložit (Obr. 8, krok 2).

_Obrázek 8: Vytvoření nového stavu Zaslat_

## Přiřazení stavů k objednávkám

Nyní máte nový stav objednávek vytvořený a můžete jej přiřadit ve vašich objednávkách. V detailu objednávky můžete změnit stav objednávky na nový vámi vytvořený stav [Zaslat.cz](http://zaslat.cz/) (Obr. 9).

_Obrázek 9: Přiřazení stavů k objednávkám_

## Přidání dopravců

Dalším krokem na straně Upgates je definice dopravy. Abyste mohli využívat služeb Zaslat, je nezbytné při definici (přidávání) dopravců dodržet správné pojmenování dopravce dle seznamu níže.

Pro nastavení dopravy klikněte v levém menu na položku **Nastavení** (Obr. 10, krok 1), dále možnost **Objednávky** (Obr. 10, krok 2) a zde zvolte možnost **Doprava** (Obr. 10, krok 3). Na pravé straně poté klikněte na tlačítko **Nové** a pod ním **Vlastní doprava** (Obr. 10, krok 4).