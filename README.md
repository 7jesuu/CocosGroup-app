# Cocos API

## Описание

Cocos API предоставляет интерфейс для управления записями Cocos. API поддерживает создание, получение, обновление и удаление записей с возможностью пагинации и фильтрации.

## Ответы к 2-3 заданиям находятся в файле deci

## Документация

Документация API доступна по следующему маршруту:

- [Swagger UI](http://localhost:3000/api/docs)

## Установка

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/7jesuu/CocosGroup-app.git
    ```

2. Установите зависимости:

    ```bash
    yarn
    ```

## Запуск проекта

1. Запустите проект:

    ```bash
    nest start
    ```

2. Проект будет доступен по адресу:

    ```
    http://localhost:3000
    ```

## Использование API

### Создать новую запись

- **URL:** `/cocos`
- **Метод:** `POST`
- **Тело запроса:**

    ```json
    {
      "title": "Example Title",
      "description": "Example Description"
    }
    ```

- **Ответы:**
  - `201`: Запись успешно создана.
  - `400`: Неверные данные.

### Получить все записи с пагинацией и фильтрацией

- **URL:** `/cocos`
- **Метод:** `GET`
- **Параметры запроса:**
  - `page` (опционально): Номер страницы (по умолчанию 1)
  - `limit` (опционально): Количество записей на странице (по умолчанию 10)
  - `search` (опционально): Поиск по названию
- **Ответы:**
  - `200`: Список записей.

### Получить запись по ID

- **URL:** `/cocos/{id}`
- **Метод:** `GET`
- **Параметры пути:**
  - `id`: ID записи
- **Ответы:**
  - `200`: Запись найдена.
  - `404`: Запись не найдена.

### Обновить запись по ID

- **URL:** `/cocos/{id}`
- **Метод:** `PATCH`
- **Параметры пути:**
  - `id`: ID записи
- **Тело запроса:**

    ```json
    {
      "title": "Updated Title",
      "description": "Updated Description"
    }
    ```

- **Ответы:**
  - `200`: Запись успешно обновлена.
  - `404`: Запись не найдена.

### Удалить запись по ID (мягкое удаление)

- **URL:** `/cocos/{id}`
- **Метод:** `DELETE`
- **Параметры пути:**
  - `id`: ID записи
- **Ответы:**
  - `200`: Запись успешно удалена.
  - `404`: Запись не найдена.
