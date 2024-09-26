local function writeToFile(items)
    local file = io.open("ki.txt","w")

    for index, value in ipairs(items) do
        file:write(value)
        file:write(";")
    end
    file:write("\n")
    io.close(file)
end

local function generateNums()
    local nums = {}
    io.write ('How many numbers do you want to generate?: ')
    local quantity = io.read("n")
    
    local min
    local max
    repeat
        io.write('Give a min: ')
        min = io.read("n")
        io.write('Give a max: ')
        max = io.read("n")
    until max > min
    for i = 1, quantity, 1 do
        table.insert(nums,math.random(min, max))
    end
    for index, value in ipairs(nums) do
        print(value)
    end
    writeToFile(nums)
end

local function concatChars(chars)
    local t = { }
    for index,value in ipairs(chars) do
        t[#t+1] = tostring(value)
    end
    return table.concat(t)
end


local function generateWords()
    local words = {}
    local alphabet = {
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    }

    local length = math.random(1,20)
    io.write("How many words you want to generate?: ")
    local quantity = io.read("n")
    for i = 1, quantity, 1 do
        local chars = {}
        for i = 1, length, 1 do
            table.insert(chars, alphabet[math.random(1,#alphabet)])
        end
        table.insert(words,concatChars(chars))
    end
    for index, value in ipairs(words) do
        print(value)
    end
    writeToFile(words)
end

local function testForNums()
    io.write ('How many numbers were generated?: ')
    local quantity = io.read("n")
    io.write("What was the minimum?: ")
    local min = io.read("n")
    io.write("What was the maximum?: ")
    local max = io.read("n")
    local file = io.open("ki.txt","r")

    local isOverMin = false
    local isOverMax = false
    local nums = {}
    for line in file:lines() do
        for token in string.gmatch(line, "[^;]+") do
            table.insert(nums,tonumber(token))
            if tonumber(token) < min then
                isOverMin = true
            end
            if tonumber(token) > max then
                isOverMax = true
            end
        end
    end
    if #nums > quantity then
        print("Numbers in file are over the quantity the user entered")
    end
    if isOverMax then
        print("Numbers in file are over the maximum the user entered")
    end
    if isOverMin then
        print("Numbers in file are over the minimum the user entered")
    end
end

local function testForWords()
    
end

local function testFile()
    local funcNames = {"Test for numbers", "Test for words"}
    local functions = {testForNums,testForWords}
    local choice
    repeat
        print("What do you want to test for?: ")
        for index, value in ipairs(funcNames) do
            print(string.format("(%i): %s",index,value))
        end
        choice = io.read("n")
    until choice > 0 and choice < #functions

        for index, value in ipairs(functions) do
            if index == choice then
                value()
            end
        end
    
    
    
end

local function main()
    local options = {"Generate numbers","Generate words", "Test the output file","Read the output file"}
    local functions = {generateNums,generateWords,testFile}
    while true do
        print("Choose an option:")
        for index, value in ipairs(options) do
            print(string.format("(%i): %s",index,value))
        end
        local choice = 1

        repeat
            choice = io.read("n")
        until choice > 0 and choice <= #functions
        
        for index, value in ipairs(functions) do
            if index == choice then
                value()
            end        
        end
    end
end

main()