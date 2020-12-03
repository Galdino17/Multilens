import socket 
from requests import get
hostname = socket.gethostname()
ip_interno = socket.gethostbyname(hostname)
ip_externo = get('https://api.ipify.org').text

print(f"Hostname: {hostname}")
print(f"IP Interno: {ip_interno}")
print(f"IP Externo: {ip_externo}")