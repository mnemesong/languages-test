# languages-test
Данный проект затеян как попытка сравнить языки программирования, и выбрать один наиболее подходящий, перспективный и удобный для fullstack-разработки, чтобы свитчнуться с php на него.


## Преимущества, которые ищу
- Гомогенность: возможность писать на одном языке и frontend и backend (должен компилироваться в js, либо иметь обертку над ним)
- Лаконичность и легкость записи и чтения логики
- Простота сборки проекта и удобный пакетный менеджер
- Простой параллелизм
- Популярность и развитость инфраструктуры
- Легкость тестирования и быстрый цикл обратной связи
- Наличие механизмов типо-безопасности и подсказки по типам при работе
- Быстрые вычисления
- Скорость обработки запросов
- Возможность писать под разные платформы: web, mobile, desktop
- Совместимость с Win7 и Linux


## Описание тестов
0. Базовые предпосылки: 
    А. Запустить проект под Win7 на типовом стеке. 
    B. Проверить статическую типизацию.
    C. Есть возможность хоть как-то скомпилировать приложение в JS или WA из под Win7
    D. Пакетный менеджер присутствует и корректно работает под Win7
1. Решить 3 задачи с собеседования Яндекс по kitlin, на каждом из проверяемых языков. Оценить лаконичность и читаемость коода и опыт написания программы. Оформить решение в виде проекта.
2. Оценить управление зависимостями. Написать программу, состоящую из 4 пакетов:
    - Описывает абстракции и хранится в приватном github-репозитории
    - Реализует абстракции из пакета #1 и подтягивается из папки
    - Хранится в публичном пакетном хранилище
    - Подтягивает все модули и композирует их
3. Нейросеть. Написать программу, порождающую и обучающую нейросеть из 3 слоев по 100 нейронов и обучается по пресету из 1000 начальных/конечных значений. Извмерить скорость обучения и выдачи результата.


## Результаты тестов
----------------------------------------------------------------------------------------------------
           | 0.A | 0.B | 0.C | 0.D |  1  |  2  |  3  |
----------------------------------------------------------------------------------------------------
Kotlin     |  +  |  +  |  -  |
----------------------------------------------------------------------------------------------------
PHP        |  +  |  +  |  -  |
----------------------------------------------------------------------------------------------------
Java       |  +  |  +  |  -  |
----------------------------------------------------------------------------------------------------
.NET       |  -  |
----------------------------------------------------------------------------------------------------
Haskell    |  +  |  +  |  -  |
----------------------------------------------------------------------------------------------------
Clojure    |  +  |  -  |
----------------------------------------------------------------------------------------------------
Typescript |  +  |  +  |  +  |  +  |  ?  |
----------------------------------------------------------------------------------------------------
Rescript   |  +  |  +  |  +  |  +  |  +  |
----------------------------------------------------------------------------------------------------
Scala      |  +  |  +  |  -  |
----------------------------------------------------------------------------------------------------
Ocaml      |  -  |
----------------------------------------------------------------------------------------------------
Nim        |  +  |  +  |  +  |  +  |
----------------------------------------------------------------------------------------------------
Racket     |  +  |  +  |
----------------------------------------------------------------------------------------------------