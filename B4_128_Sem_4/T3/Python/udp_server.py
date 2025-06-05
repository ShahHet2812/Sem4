import socket
host=socket.gethostname()
port=5000
udp_server=socket.socket(type=socket.SOCK_DGRAM)
udp_server.bind((host,port))
while True:
    print("Wating for Massage")
    data,addr=udp_server.recvfrom(1024*2)
#     sq=int(data)**2
    d=data.upper()
#     print("Recived :", data.decode()," from ",addr)
#     msg=input('->')
    udp_server.sendto(d.encode(),addr)
udp_server.close()    
