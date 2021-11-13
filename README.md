# Electronic reference book "Thermophysical properties of coolants"

## Как запустить клиентскую часть?

1. `cd client`
2. `yarn`
3. `yarn start`

## Как запустить серверную часть?

### Вариант 1. Установка зависимостей в виртуальном окружении и запуск сервера на локальной машине

1. `cd server`
2. `python3 -m venv venv`
3. `venv/bin/pip install -U pip`
4. `venv/bin/pip install -Ur requirements.txt`
5. `source venv/bin/activate`
6. `gunicorn -b 0.0.0.0:3000 server:app`

### Вариант 2. Запуск сервера в docker-контейнере

1. `cd server`
2. `docker build -t <my_account_name>/enekcalc .`
3. `docker run -it --name enekcalc -p 3000:3000 <my_account_name>/enekcalc`
