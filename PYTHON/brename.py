import os
 
os.chdir('/home/dimoskan/Desktop/ss/')
print(os.getcwd())
 
for count, f in enumerate(sorted(os.listdir())):
    f_name, f_ext = os.path.splitext(f)
    f_name = str(count+59)
 
    new_name = f'{f_name}{f_ext}'
    os.rename(f, new_name)

