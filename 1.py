f = open('1.txt','r', encoding='utf8')
a = f.read().split('    ')
b=''
for i in a:
	for j in i.split('  '):
   	 	b+=j+'<br>\n'
print(b)
f.close()
c = open('12.txt','w', encoding='utf8')
c.write(b)
c.close()
input('..')