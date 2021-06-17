import os
import re


def to_camel_case(s):
    ls = s.split('-')
    return "".join([word[0].upper()+word[1:] for word in ls])


directory = r".\\"
f = open("FontAwesomeIcons.js", "a")


def write_import():
    for filename in os.listdir(directory):
        if filename.endswith(".svg"):
            name = re.findall('(.*)\.svg', filename)[0]
            name = to_camel_case(s=name)
            print(name)
            f.write(f'import {name} from "../icons/{filename}";\n')


def write_icons():
    for filename in os.listdir(directory):
        if filename.endswith(".svg"):
            name = re.findall('(.*)\.svg', filename)[0]
            name = to_camel_case(s=name)
            print(name)
            f.write(f'static {name} = {name};\n')


def write_class():
    write_import()
    f.write(
        "//**\n* Font Awesome Icons\n * Free Licence\n * 5.15.3\n*/\nclass FontAwesomeIcons {\n")
    write_icons()
    f.write("\n}\nexport default FontAwesomeIcons")


write_class()
