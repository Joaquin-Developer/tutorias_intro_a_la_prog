## ¿Cómo ejecutar la API REST?

Se deberá instalar python3 en su computadora

### Instalar Python:

Python es un lenguaje de programación multipropósito, interpretado, al igual que JavaScript. Entonces, debemos descargar su intérprete.

Desde una consola de Linux:

```bash
sudo apt-get install python3
```
O si no:
```bash
yum install python3
```

Desde Windows: Descargarlo desde la [página web](https://www.python.org/downloads/) 

#### Luego de la instalación de Python3:
Debemos instalar Flask y todos las librerías necesarias.

Flask es un framework de Python que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código. 
Para instalarlo, nos paramos en la carpeta conde esté el archivo App.py, y ejecutamos lo siguiente en una consola (Bash o CMD de windows):

```bash
pip3 install flask
pip3 install flask-cors
```
#### Ejecución de la API REST en LocalHost:
Lo que haremos ahora, será ejecutar el servidor Flask, en un puerto local de nuestra computadora (localhost)

```bash
python3 App.py
```
Cuando queramos detenerlo, podemos apretar Ctr + C