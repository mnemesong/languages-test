inp = "AAABBBCCXYZDDDDAAAABB"

local inspect = require('inspect')

counter = {}
chars = {}
inp:gsub(".", function(c) table.insert(chars,c) end)

for chi, chv in pairs(chars) do
    if #counter == 0 then
        counter[1] = {chv, 1}
    else
        local lastChar = counter[#counter][1]
        if lastChar == chv then
            counter[#counter][2] = counter[#counter][2] + 1
        else 
            counter[#counter + 1] = {chv, 1}
        end
    end
end

result = ""
for chi, chv in pairs(counter) do
    result = result .. chv[1] .. chv[2]
end

print(result)
