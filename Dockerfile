FROM python:3.10-slim-buster
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
EXPOSE 8008
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]