# Dockerfile
FROM python:3.8.2

RUN pip install gunicorn
RUN pip install scipy
RUN pip install iapws

COPY server.py /server.py

CMD [ "gunicorn", "-b", "127.0.0.1:80", "server:app"]
