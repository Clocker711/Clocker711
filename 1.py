f = open('1.txt','r')
a = f.readlines()
b=[]
print('ok')
for i in a:
    if i!='\n':
        b.append(i[3:].replace('\n',''))
    else:
        print('ok')
for c in b:
    if a =='':
        b.remove(c)
print(b)
f.close()
c = open('123.txt','w', encoding='utf8')
c.write(str(b))
c.close()
input('..')
