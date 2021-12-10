import sqlite3

connection = sqlite3.connect('calendar.db')

cursor = connection.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS Shows
              (Date TEXT, Event TEXT, Description TEXT)''')

connection.commit()
connection.close()

print("help")