local function writeToFile(items)
    local file = io.open("ki.txt", "w")

    for index, value in ipairs(items) do
        file:write(value)
        file:write(";")
    end
    file:write("\n")
    io.close(file)
end

local function generateNums()
    print(string.rep("-", 40))
    local nums = {}
    io.write('How many numbers do you want to generate?: ')
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
        table.insert(nums, math.random(min, max))
    end
    for index, value in ipairs(nums) do
        print(value)
    end
    writeToFile(nums)
end

local function concatChars(chars)
    local t = {}
    for index, value in ipairs(chars) do
        t[#t + 1] = tostring(value)
    end
    return table.concat(t)
end


local function generateWords()
    print(string.rep("-", 40))
    local words = {}
    local alphabet = {
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    }

    local length = math.random(1, 20)
    print(string.format("The length of the words will be %i", length))
    io.write("How many words you want to generate?: ")
    local quantity = io.read("n")
    for i = 1, quantity, 1 do
        local chars = {}
        for i = 1, length, 1 do
            table.insert(chars, alphabet[math.random(1, #alphabet)])
        end
        table.insert(words, concatChars(chars))
    end
    for index, value in ipairs(words) do
        print(value)
    end
    writeToFile(words)
end

local testForWords
local testForNums

local testForNums = function()
    print(string.rep("-", 40))
    io.write('How many numbers were generated?: ')
    local quantity = io.read("n")
    io.write("What was the minimum?: ")
    local min = io.read("n")
    io.write("What was the maximum?: ")
    local max = io.read("n")
    local file = io.open("ki.txt", "r")

    local isBelowMin = false
    local isOverMax = false
    local nums = {}
    for line in file:lines() do
        for token in string.gmatch(line, "[^;]+") do
            table.insert(nums, tonumber(token))
            if tonumber(token) < min then
                isBelowMin = true
            end
            if tonumber(token) > max then
                isOverMax = true
            end
        end
    end
    io.close(file)

    local correct = true
    if #nums > quantity then
        print("Numbers in file are over the quantity the user entered")
        correct = false
    elseif #nums < quantity then
        print("Numbers in file are below the quantity the user entered")
        correct = false
    end
    if isOverMax then
        print("Numbers in file are over the maximum the user entered")
        correct = false
    end
    if isBelowMin then
        print("Numbers in file are below the minimum the user entered")
        correct = false
    end
    if correct then
        print("User input is matching with the file contents")
    end
end

local testForWords = function()
    print(string.rep("-", 40))
    io.write("What was the length of the words?: ")
    local length = io.read("n")

    io.write("How many words have been written?: ")
    local quantity = io.read("n")
    local file = io.open("ki.txt", "r")

    local words = {}
    local isOverLength = false
    local isBelowLength = false
    for line in file:lines() do
        for token in string.gmatch(line, "[^;]+") do
            table.insert(words, tostring(token))
            if string.len(tostring(token)) > length then
                isOverLength = true
            end
            if string.len(tostring(token)) < length then
                isBelowLength = true
            end
        end
    end
    io.close(file)
    print(#words)
    local correct = true
    if quantity > #words then
        print("There are more words generated than what the user entered")
        correct = false
    else
        if quantity < #words then
            print("There are fewer words generated than what the user entered")
            correct = false
        end
    end
    if isOverLength then
        print("The length of the words are over the length that the user entered")
        correct = false
    end
    if isBelowLength then
        print("The length of the words are below the length that the user entered")
        correct = false
    end
    if correct then
        print("User input is matching with the file contents")
    end
end

local function testFile()
    if io.open("ki.txt","r")==nil then
        print("File non-existent!")
        os.exit()
    end
    print(string.rep("-", 40))
    local funcNames = { "Test for numbers", "Test for words" }
    local functions = { testForNums, testForWords }
    local choice
    repeat
        print("What do you want to test for?: ")
        for index, value in ipairs(funcNames) do
            print(string.format("(%i): %s", index, value))
        end
        choice = io.read("n")
    until choice > 0 and choice <= #functions

    local checker = ""
    for index, value in ipairs(functions) do
        if index == choice then
            local f = io.open("ki.txt","r")
            for line in f:lines() do
                for token in string.gmatch(line, "[^;]+") do
                    checker = token
                end
            end
            if choice==1 and tonumber(checker, 10) == nil then
                print("Switching to word checking!")
                testForWords()
                break
            end
            if choice==2 and tonumber(checker, 10) ~= nil then
                print("Switching to number checking!")
                testForNums()
                break
            end
            value()
            io.close(f)
        end
    end 
end
local function readFile()
    if io.open("ki.txt","r")==nil then
        print("File non-existent!")
        os.exit()
    end
    print(string.rep("-", 40))
    local file = io.open("ki.txt", "r")
    local contents = {}
    for line in file:lines() do
        for token in string.gmatch(line, "[^;]+") do
            table.insert(contents, token)
        end
    end
    io.close(file)
    for index, value in ipairs(contents) do
        io.write(string.format("%s, ", value))
    end
    print("")
end


local function main()
    local options = { "Generate numbers", "Generate words", "Test the output file", "Read the output file" }
    local functions = { generateNums, generateWords, testFile, readFile }
    while true do
        print(string.rep("-", 40))
        print("Choose an option:")
        for index, value in ipairs(options) do
            print(string.format("(%i): %s", index, value))
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