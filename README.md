# Szachy

## Informacje:

##### Role w projekcie:

- TechLead - Maciej
- Development Manager - Joanna
- Product Owner - Radek

##### Deadline 16.02.2021

## Opis projektu:

Gra w szachy, która pozwala na rozgrywkę między dwoma graczami za pomocą jednego komputera.

## Założenia projektowe

Ponieważ aplikacja ma być sygnowana przez CodersCrew, spróbujcie przygotować ją zgodnie z identyfikacją wizualną stowarzyszenia - Brand Book znajdziecie [TUTAJ](https://www.behance.net/gallery/94155751/Brand-Book-Project). Nie jest to konieczność, ale fajna możliwość wypróbowania swojej skuteczności z takim wymaganiem (które jest częste w praktyce).

##### Lista funkcjonalności, jakie należy zaimplementować w silniku gry:

1. Ruchy wszystkich bierek (wykonanie ruchu, jak i pokazywanie możliwych):
  - Pionek
  - Hetman
  - Wieża
  - Goniec
  - Król.
2. Promowanie pionka na dowolną inną figurę (oprócz króla) na końcu planszy.
3. Roszada: [https://pl.wikipedia.org/wiki/Roszada](https://pl.wikipedia.org/wiki/Roszada)
4. Szachowanie króla: [https://pl.wikipedia.org/wiki/Szach\_(szachy)](https://pl.wikipedia.org/wiki/Szach_(szachy))
5. Szach mat: [https://pl.wikipedia.org/wiki/Mat\_(szachy)](https://pl.wikipedia.org/wiki/Mat_(szachy))
6. Kończenie gry przez Pat: [https://www.chess.com/pl/article/view/czym-jest-pat-szachowe-terminy](https://www.chess.com/pl/article/view/czym-jest-pat-szachowe-terminy)
7. Bicie w przelocie: [https://www.chess.com/pl/article/view/bicie-w-przelocie-specjalne-ruchy-w-szachach](https://www.chess.com/pl/article/view/bicie-w-przelocie-specjalne-ruchy-w-szachach)
8. Możliwość cofania ruchów (aż do początkowego układu).

Uwaga: Pamiętajcie, że na ruchy bierek, promocję pionka i możliwość roszady wpływa na szachowanie króla. Najlepiej zagrajcie kilka partii w zespole, żeby zapoznać się z tą domeną. No chyba, że macie w swoim zespole eksperta? Dokładnie poznajcie domenę, w jakiej działa wasze oprogramowanie, czyli grę w szachy, aby nie wprowadzić jakiegoś zachowania niezgodnego z zasadami i żeby nic nie przeoczyć. Starajcie się przewidzieć przypadki brzegowe i implementuje do nich odpowiednie testy.

##### Mockup z użyciem figmy:

[TUTAJ](https://www.figma.com/file/ZllWbpJCCCCKVl7QEfNWbl/CodersCamp2020.Project.TypeScript.Chess?node-id=4461%3A3896)

Waszym zadaniem będzie zaimplementować aplikację, aby działała wg wymagań klienta, a także przygotować i wykonać wersję responsywną aplikacji (dostosowaną do wyświetlania na Tabletach i Telefonach — możecie przygotować najpierw projekt interfejsu, lub od razu przejść do implementacji). W celu zaprezentowania działania aplikacja musi być możliwa do odwiedzenia w internecie. Klient nie chce ponosić za to żadnych dodatkowych kosztów, dlatego należy wykorzystać jedną z usług oferujących darmowe uruchomienie takiej aplikacji (np. GitHub Pages lub Netlify). Klient wymaga także, aby aplikacja nie tylko działała, ale była odpowiednio pokryta testami. Naprawdę macie szczęście co do klienta! Wielu uważa testy za niepotrzebne i jedynie stratę pieniędzy. A co znaczy „odpowiednio pokryta&quot;, to już należy właśnie ustalić z samym Klientem.

## Wymagania wykonania projektu:

- typy podstawowe,
- definiowanie własnych typów,
- składanie typów,
- typy / klasy / interfejsy,
- implementacja / dziedziczenie / kompozycja /implementacja interfejsu,
- modyfikatory dostępu,
- typy generyczne,
- testy jednostkowe i TDD,

## Git Flow:

1. przechodzimy do gałęzi **develop** ,
2. tworzymy nową gałąź **feature** ,
3. wprowadzamy modyfikacje do **feature** ,
4. wracamy do gałęzi **develop** ,
5. scalamy modyfikacje,
6. usuwamy zbędną gałąź **feature** ,
7. W momencie wydawania aplikacji tworzymy nową gałąź **release** co gwarantuje nam, że nikt nie doda nam żadnych modyfikacji w trakcie pracy na niej. W gałęzi tej możemy wprowadzać jedynie poprawki i zmianę numeru wersji,
8. Po zakończeniu pracy z gałęzią **release** scalamy ją z **master-em** oraz **develop** ,

![](RackMultipart20210216-4-1s1veox_html_d5625f9acc82b2a.png)

## Użyte narzędzia:

1.

## Użyte biblioteki:

1.

## Etapy:

### Sprint I:

Wizualizacja Szachownicy w przeglądarce z uwzględnieniem responsywności dla tabletów i telefonów. Dodanie figur szachowych. Stworzenie testów do wyznaczonych przez klienta wymagań. Implementacja ruchu szachów oraz możliwość kontroli szachów poprzez gracza. Dopracowanie podstaw szachowych.

Historia ruchów w partii.

### Sprint II:

Dodanie zegara szachowego. Możliwość personalizacji szachownicy za pomocą własnych customowych zestawów bierków. Stworzenie bardziej atrakcyjnego UI.

Cokolwiek przyjdzie nam jeszcze do głowy. Identyfikacja wizualna stowarzyszenia - Brand Book ( [TUTAJ](https://www.behance.net/gallery/94155751/Brand-Book-Project) ).

## Ruch szachowy:

1. Klikam se pionka - jaka funkcja sie wykonuje
2. Wyswietla sie siatka ruchow- jaka funkcja sie wykonuje
3. Kilkam se pole- jaka funkcja sie wykonuje
4. Pionek rusza sie:
  1. na te pole- jaka funkcja sie wykonuje
  2. nie rusza sie na te pole bo nie moze (dlaczego?)
5. Pionek
