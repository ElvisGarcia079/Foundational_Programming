#Initializing a Variable

#With Python it is Simple. You just need: 
'''
1. The Variable Name
2. The Assignment Operator
3. The Value
'''

#The Value Could Be Any Data Type: 

#1. A String
progLanguage = "Python"

#2. A Number
num = 28

#3. A Boolean
isCoding = True

#You can check the values by using Python's Print Method with the variable name inside
print(progLanguage)
print(num)
print(isCoding)

#You can also check the type of the data by using the Python Type Method: 
type(progLanguage)
type(num)
type(isCoding)


#Version 1: 

'''
If you would like to see the result of the Method Type, you will need to wrap it within the method Print
'''

print(type(progLanguage))
print(type(num))
print(type(isCoding))

#Version 2: 

'''
You Can Store the Reference from the Type Method and Store that in a Variable, and then Print it using the Print Method.
'''

#Step 1: Create the Variable Reference to the Type Value
progLanguageDT = type(progLanguage)
numDT = type(num)
isCodingDT = type(isCoding)

#Step 2: Print the Variables with the Stored Reference
print(progLanguageDT)
print(numDT)
print(isCodingDT)

