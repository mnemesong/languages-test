# languages-test
Данный проект затеян как попытка сравнить языки программирования, и выбрать один наиболее подходящий и перспективный, чтобы свитчнуться с php на него.


# Варианты
- Typescript + node.js
- Clojure + clojurescript
- Haxe
- Rescript + node.js

## Варианты, которые не рассмотрены
- Kotlin - не удалось запустить web-проект
- PHP трансляторы под js
- Livescript/coffeescript - не решен вопрос с типобезопасностью
- Java - проблема с трансляцией в js, сложность настройки, монструозность кода
- .NET-langs проблема с настройкой платформы и запуском тестов под win7


# Преимущества, которые ищу
- Гомогенность: возможность писать на одном языке и frontend и backend (должен компилироваться в js, либо иметь обертку над ним)
- Лаконичность и легкость чтения
- Возможность писать в функциональном стиле, или близко
- Легкость запуска и простота настройки
- Простой параллелизм
- Популярность и развитость инфраструктуры
- Легкость тестирования и быстры цикл Обратной связи
- Наличие механизмов типо-безопасности и подсказки по типам при работе
- Иммутабельность
- Простота сборки проекта и удобный пакетный менеджер
- Быстрые вычисления
- Скорость обработки запросов
- Возможность писать под разные платформы: web, mobile, desktop
- Совместимость с Win7 и Linux


# Описание тестов
0. Провести сравнительный анализ языков, по их очевидным характеристикам
1. Решить 3 задачи с собеседования Яндекс по kitlin, на каждом из проверяемых языков. Оценить лаконичность и читаемость коода и опыт написания программы. Оформить решение в виде проекта.
2. Покрыть вспомогательные фукции для решения задачи юнит-тестами. Оценить опыт написания и запуска юнит-тестов и циклы обратной связи при разработке.
3. Оценить систему типизации, предупреждения IDE об ошибке типов, проверки типов на режиме компиляции и в рантайме. 
4. Переписать решение задач с помощью только иммутабельных переменных, коллекций и функций. Как это влияет на лаконичность кода, и насколько язык приспособлен для писания в подомном стиле.
5. Оценить управление зависимостями. Написать программу, состоящую из 4 пакетов:
    - Описывает абстракции и хранится в приватном github-репозитории
    - Реализует абстракции из пакета #1 и подтягивается из папки
    - Хранится в публичном пакетном хранилище
    - Подтягивает все модули и композирует их
6. Параллелизм. Написать программу, которая принимает массив из 10000 случайных символов, распределяет их по 2 ядрам, редуцирует в строку и объединяет результаты, полученные с каждого ядра. Провести 1000 итераций, замерить скорость работы.
7. Нейросеть. Написать программу, порождающую и обучающую нейросеть из 3 слоев по 100 нейронов и обучается по пресету из 1000 начальных/конечных значений. Извмерить скорость обучения и выдачи результата.
8. Генерация frontend. Написать сервер, который будет генерировать и выдавать html+css+js страницы, представляющей собой SPA TODO-app. Возможность сохранения состояния в БД и загрузки состояния.
9. Написать android-приложение с функционалом: 
    - Отрисовать 1000 строк таблицу программно
    - Отсортировать строки в таблице в обратном порядке пузырьком
    - Сохранить результат в файл
    - Замерить продолжительность всего цикла
    - Так же замерить время полной загрузки приложения
10. Написать desktop-приложение с аналогичным функционалом.