FROM python:3.10
COPY . /app
WORKDIR /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ENTRYPOINT ["python"]
CMD ["main.py"]
