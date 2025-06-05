import socket
host=socket.gethostname()
port=5000
udp_client=socket.socket(type=socket.SOCK_DGRAM)
while True:
    data=input("Enter Data to send")
    if not data:
        break
    udp_client.sendto(data.encode(),(host,port))
    data,addr=udp_client.recvfrom(1024)
    if not data:
        break
    print("Recived :",data.decode())
udp_client.close()    
        
