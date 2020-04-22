# Dockerfile
FROM python:3.8.2

RUN pip install gunicorn
RUN pip install scipy
RUN pip install iapws

COPY server.py /server.py

EXPOSE 3000

CMD [ "gunicorn", "-b", "0.0.0.0:3000", "server:app"]
